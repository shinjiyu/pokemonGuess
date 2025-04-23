import type { Express } from "express";

interface Player {
  userId: string;
  teamId: string;
  nickname: string;
  avatar: string;
  isRobot: boolean;
  level: number;
}

interface CreateRoomRequest {
  gameId: string;
  userList: Player[];
  gameResultId: string;
}

interface DebugCreateRequest {
  playerCount: number;
}

interface DebugRoom {
  roomId: string;
  count: number;
  enteredCount: number;
}

let debugRooms: DebugRoom[] = [];

const initRouter = (app: Express) => {

  console.log(`Current mode: ${process.argv.includes("--test") ? "test" : "production"}`);

}

export default initRouter;