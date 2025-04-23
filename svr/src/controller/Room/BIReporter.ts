export class BIReporter {

    private static instance: BIReporter;

    private constructor() { }

    public static getInstance(): BIReporter {
        if (!BIReporter.instance) {
            BIReporter.instance = new BIReporter();
        }
        return BIReporter.instance;
    }

    private reportCache: Array<{
        event_name: string,
        access_timestamp: number,
        user_id: number,
        kwargs?: object
    }> = [];

    private isSending: boolean = false;
    public cacheReport(event_name: string, user_id: string, kwargs: object = {}): void {
        const data = {
            event_name: event_name,
            access_timestamp: Date.now(),
            user_id: parseInt(user_id),
            kwargs: kwargs
        };
        this.reportCache.push(data);
        //console.log("[BI] Report cached:", data);
        this.processCache();
    }

    private async processCache(): Promise<void> {
        if (this.isSending || this.reportCache.length === 0) {
            return;
        }

        this.isSending = true;

        while (this.reportCache.length > 0) {
            const data = this.reportCache.shift();
            if (data) {
                await this.sendReport(data);
            }
        }

        this.isSending = false;
    }

    private async sendReport(data: {
        event_name: string,
        access_timestamp: number,
        user_id: number,
        kwargs?: object
    }): Promise<void> {
        const url = process.argv.includes("--test")
            ? "http://test_game-ark-im.momo.com:8004/quizboost/reporter"
            : "https://ark-quiz-game.spacecape.com/quizboost/reporter";
        const headers = {
            "Content-Type": "application/json"
        };

        const reportData = {
            user_id: data.user_id,
            event_name: data.event_name,
            event_type: "BE",
            access_timestamp: data.access_timestamp,
            display_timestamp: Date.now(),
            app_name: "ManaGames",
            kwargs: data.kwargs || {}
        };

        try {
            const body = JSON.stringify(reportData);
            console.log(`[BI] send report: ${body}`);
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: body
            });

            if (!response.ok) {
                console.log(`[BI] Failed to send report: ${response.statusText}`);
            } else {
                console.log("[BI] Report sent successfully");
            }
        } catch (error) {
            console.log(`[BI] Error sending report: ${error}`);
        }
    }
}