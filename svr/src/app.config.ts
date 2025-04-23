import { monitor } from "@colyseus/monitor";
import { playground } from "@colyseus/playground";
import config from "@colyseus/tools";
import bodyParser from "body-parser";

/**
 * Import your Room files
 */
import { matchMaker } from "colyseus";
import { OnlinePlayerRoom } from "./controller/Room/OnlinePlayerRoom";
import { PokemonGuessRoom } from "./controller/Room/PokemonGuessRoom";
import initRouter from "./router/router";
import logger from "./utils/logger";

const createRoomWithId = async (roomId: string) => {
    try {
        const room = await matchMaker.createRoom("OnlinePlayerRoom", { roomId });
        console.log(`Room created with ID: ${room.roomId}`);
    } catch (error) {
        console.error("Failed to create room:", error);
    }
};

export default config({

    initializeGameServer: (gameServer) => {
        /**
         * Define your room handlers:
         */

        console.log("QuizBoostRoom");
        gameServer.define('OnlinePlayerRoom', OnlinePlayerRoom);
        gameServer.define('PokemonGuessRoom', PokemonGuessRoom);
    },

    initializeExpress: (app) => {

        app.use((req, res, next) => {
            logger.debug('Express: CORS', req.headers.origin);

            logger.debug(JSON.stringify(req.path));

            res.header('Access-Control-Allow-Origin', req.headers.origin);
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

            next();
        });

        app.use(bodyParser.json());

        initRouter(app);

        /**
         * Use @colyseus/playground
         * (It is not recommended to expose this route in a production environment)
         */
        if (process.env.NODE_ENV !== "production") {
            app.use("/", playground);
        }

        /**
         * Use @colyseus/monitor
         * It is recommended to protect this route with a password
         * Read more: https://docs.colyseus.io/tools/monitor/#restrict-access-to-the-panel-using-a-password
         */
        app.use("/colyseus", monitor());

        logger.debug(`this version is 2.0.15`);

        app.listen(8094);




    },


    beforeListen: () => {
        // 在服务器启动时创建一个指定的房间 ID 的房间
        // 指定房间 ID
        const specifiedRoomId = "online_player_room";
        createRoomWithId(specifiedRoomId);
    }
});

