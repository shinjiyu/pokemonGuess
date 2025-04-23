export class Logger {
    private static isDebugMode(): boolean {
        return localStorage.getItem('debug_mode') === 'true';
    }

    static log(message: string, ...args: any[]): void {
        if (this.isDebugMode()) {
            console.log(`[LOG] ${message}`, ...args);
        }
    }

    static logWarning(message: string, ...args: any[]): void {
        if (this.isDebugMode()) {
            console.warn(`[WARNING] ${message}`, ...args);
        }
    }

    static logError(message: string, ...args: any[]): void {
        console.error(`[ERROR] ${message}`, ...args);
    }
} 