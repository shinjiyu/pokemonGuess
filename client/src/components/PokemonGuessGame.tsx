import React, { useEffect, useState } from 'react';
import { GameState, PlayerRank, PokemonGuessService } from '../services/PokemonGuessService';
import '../styles/PokemonGuessGame.css';
import { UserManager } from '../user/UserManager';
import PokemonGuessLobby from './PokemonGuessLobby';
import PokemonGuessPlay from './PokemonGuessPlay';
import PokemonGuessResult from './PokemonGuessResult';

enum GameScreen {
  HOME,  // 新增：初始选择界面
  LOBBY,
  PLAY,
  RESULT
}

interface GameResult {
  answerId: string;
  answerName: string;
  rankings: PlayerRank[];
  nextState: number;
}

const PokemonGuessGame: React.FC = () => {
  const [pokemonGuessService] = useState(() => PokemonGuessService.getInstance());
  const [gameScreen, setGameScreen] = useState<GameScreen>(GameScreen.HOME);  // 默认初始界面
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [isHost, setIsHost] = useState(false);
  const [connected, setConnected] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [roomId, setRoomId] = useState<string>('');
  const [inputRoomId, setInputRoomId] = useState<string>('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  // 添加一个检查房主状态的方法
  const checkAndUpdateHostStatus = () => {
    const currentHostStatus = pokemonGuessService.isHost();
    console.log(`⭐ [UI更新] 检查房主状态: 当前UI状态=${isHost}, 服务状态=${currentHostStatus}`);
    if (isHost !== currentHostStatus) {
      console.log(`⭐ [UI更新] 房主状态发生变化，更新UI: ${isHost} -> ${currentHostStatus}`);
      setIsHost(currentHostStatus);
    }
  };

  useEffect(() => {
    // 设置事件监听
    if (connected) {
      pokemonGuessService.onGameStateUpdated(handleGameStateUpdated);
      pokemonGuessService.onGameStarted(handleGameStarted);
      pokemonGuessService.onGameEnded(handleGameEnded);
      
      // 添加直接监听玩家详情更新的事件处理
      pokemonGuessService.onPlayerDetailUpdated(() => {
        console.log(`⭐ [UI更新] 收到玩家详情更新，检查房主状态`);
        // 当玩家详情更新时，立即检查并更新房主状态
        checkAndUpdateHostStatus();
      });

      // 初始检查房主状态
      checkAndUpdateHostStatus();
    }

    return () => {
      // 清除事件监听
      pokemonGuessService.offGameStateUpdated(handleGameStateUpdated);
      pokemonGuessService.offGameStarted(handleGameStarted);
      pokemonGuessService.offGameEnded(handleGameEnded);
      
      // 移除玩家详情监听
      pokemonGuessService.offPlayerDetailUpdated(() => {});
    };
  }, [pokemonGuessService, connected, isHost]); // 添加isHost到依赖数组

  // 处理游戏状态更新
  const handleGameStateUpdated = (state: GameState) => {
    setGameState(state);
    
    // 更新房主状态并添加日志
    const newIsHost = pokemonGuessService.isHost();
    console.log(`⭐ [UI更新] 游戏状态更新时检查房主状态: 当前=${isHost}, 新状态=${newIsHost}`);
    setIsHost(newIsHost);

    // 根据游戏状态决定显示哪个界面
    if (state.state === 1) { // 游戏进行中
      setGameScreen(GameScreen.PLAY);
    } else if (state.state === 0) { // 游戏准备中
      setGameScreen(GameScreen.LOBBY);
    }
  };

  // 处理游戏开始
  const handleGameStarted = (startInfo: any) => {
    setGameScreen(GameScreen.PLAY);
  };

  // 处理游戏结束
  const handleGameEnded = (endInfo: GameResult) => {
    setGameResult(endInfo);
    setGameScreen(GameScreen.RESULT);
  };

  // 开始新游戏
  const startNewGame = () => {
    setGameResult(null);
    setGameScreen(GameScreen.LOBBY);
  };

  // 创建新房间
  const createRoom = async () => {
    try {
      setIsConnecting(true);
      setErrorMessage(null);
      
      // 从UserManager获取用户信息
      const userInfo = UserManager.getInstance().getUserInfo();
      
      const success = await pokemonGuessService.connect('coated-linked-spies-visits.trycloudflare.com', '', { 
        create: true,
        nickName: userInfo.nickname,
        avatar: userInfo.avatar,
        gender: userInfo.gender
      });
      
      setConnected(success);
      if (success) {
        const id = pokemonGuessService.getRoomId();
        setRoomId(id);
        setGameScreen(GameScreen.LOBBY);
      } else {
        setErrorMessage('无法创建游戏房间');
      }
    } catch (error) {
      setErrorMessage(`创建房间错误: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsConnecting(false);
    }
  };

  // 加入房间
  const joinRoom = async () => {
    if (!inputRoomId.trim()) {
      setErrorMessage('请输入房间ID');
      return;
    }
    
    try {
      setIsConnecting(true);
      setErrorMessage(null);
      
      // 从UserManager获取用户信息
      const userInfo = UserManager.getInstance().getUserInfo();
      
      const success = await pokemonGuessService.connect('coated-linked-spies-visits.trycloudflare.com', inputRoomId.trim(), {
        nickName: userInfo.nickname,
        avatar: userInfo.avatar,
        gender: userInfo.gender
      });
      
      setConnected(success);
      if (success) {
        setRoomId(inputRoomId.trim());
        setGameScreen(GameScreen.LOBBY);
      } else {
        setErrorMessage('无法加入游戏房间');
      }
    } catch (error) {
      setErrorMessage(`加入房间错误: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsConnecting(false);
    }
  };

  // 断开连接，返回主界面
  const disconnectAndGoHome = () => {
    pokemonGuessService.disconnect();
    setConnected(false);
    setGameScreen(GameScreen.HOME);
    setRoomId('');
    setInputRoomId('');
    setErrorMessage(null);
  };

  // 复制房间ID
  const copyRoomIdToClipboard = () => {
    navigator.clipboard.writeText(roomId)
      .then(() => {
        setCopySuccess('已复制！');
        setTimeout(() => setCopySuccess(null), 2000);
      })
      .catch(() => {
        setCopySuccess('复制失败');
        setTimeout(() => setCopySuccess(null), 2000);
      });
  };

  // 渲染初始选择界面
  const renderHomeScreen = () => {
    return (
      <div className="pokemon-guess-home">
        <h2>猜宝可梦</h2>
        <div className="home-options">
          <div className="option-card">
            <h3>创建房间</h3>
            <p>创建一个新游戏房间，邀请好友加入</p>
            <button 
              className="create-room-btn"
              onClick={createRoom}
              disabled={isConnecting}
            >
              {isConnecting ? '正在创建...' : '创建房间'}
            </button>
          </div>
          
          <div className="option-card">
            <h3>加入房间</h3>
            <p>输入房间ID加入好友的游戏</p>
            <div className="join-form">
              <input
                type="text"
                value={inputRoomId}
                onChange={(e) => setInputRoomId(e.target.value)}
                placeholder="输入房间ID"
                disabled={isConnecting}
              />
              <button 
                className="join-room-btn"
                onClick={joinRoom}
                disabled={isConnecting || !inputRoomId.trim()}
              >
                {isConnecting ? '正在加入...' : '加入房间'}
              </button>
            </div>
          </div>
        </div>
        
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    );
  };

  // 渲染游戏内容
  const renderGameContent = () => {
    if (gameScreen === GameScreen.HOME) {
      return renderHomeScreen();
    }

    return (
      <>
        <header className="game-header">
          <div className="header-left">
            <h1>猜宝可梦游戏</h1>
            <button className="back-btn" onClick={disconnectAndGoHome}>返回</button>
          </div>
          <div className="header-right">
            {roomId && (
              <div className="room-info">
                <span className="room-id">房间ID: {roomId}</span>
                <button className="copy-btn" onClick={copyRoomIdToClipboard}>
                  {copySuccess || '复制'}
                </button>
              </div>
            )}
            {isHost && <span className="host-badge">房主</span>}
          </div>
        </header>

        {errorMessage && <div className="error-banner">{errorMessage}</div>}

        {gameScreen === GameScreen.LOBBY && (
          <PokemonGuessLobby 
            gameService={pokemonGuessService}
            gameState={gameState}
            isHost={isHost}
          />
        )}

        {gameScreen === GameScreen.PLAY && gameState && (
          <PokemonGuessPlay 
            gameService={pokemonGuessService}
            gameState={gameState}
            isHost={isHost}
          />
        )}

        {gameScreen === GameScreen.RESULT && gameResult && (
          <PokemonGuessResult 
            gameService={pokemonGuessService}
            result={gameResult}
            onPlayAgain={startNewGame}
          />
        )}
      </>
    );
  };

  return (
    <div className="pokemon-guess-game">
      {renderGameContent()}
    </div>
  );
};

export default PokemonGuessGame; 