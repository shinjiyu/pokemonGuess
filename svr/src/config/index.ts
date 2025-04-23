// 房间在没有玩家加入时保留实例的时间，单位s
export const ROOM_RESERVE_TIME = 180;

// 等待另一名玩家时间
export const WAIT_ANOTHER_PLAYER_TIME = 60;



// 决定先手的玩家的动画的时间
export const ROLL_DICE_TIME = 6;

// 回合时间
export const TURN_TIME = 30;

// 准备时间
//export const BEFORE_ROLL_DICE_TIME = 3;

// 背景数量
export const BG_NUM = 3;

// 玩家球数
export const PLAYER_BALL_AMOUNT = 6;

export const AUTH_SECRET = "X4GW#OBJAo8J18a&Ma4AvaGHVJ%iJlma";

export const API_DOMAIN = process.env.NODE_ENV === 'production' ? "melon-gateway-os.immomo.com" : "melon-gateway-stage.immomo.com";

export const GAME_ID = "kangleqiu";

export const RECONNECT_WAIT_TIME = 10;

export const RESTART_COUNT_DOWN = 3; //重新开始倒计时时间


export const ANSWER_TIME = 20;


export const SHOW_QUESTION_TIME = 1000;

export const REVIEW_ANSWER_TIME = 2000;

export const AUTO_START_TIME = 5 * 1000;


