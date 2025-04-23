import React, { useEffect, useState } from 'react';
import { GameSettings, GameState, PokemonGuessService } from '../services/PokemonGuessService';
import '../styles/PokemonGuessLobby.css';

interface PokemonGuessLobbyProps {
  gameService: PokemonGuessService;
  gameState: GameState | null;
  isHost: boolean;
}

const PokemonGuessLobby: React.FC<PokemonGuessLobbyProps> = ({ gameService, gameState, isHost }) => {
  const [settings, setSettings] = useState<GameSettings>({
    maxAttempts: 8,
    pokemonRange: "1-151",
    firstCorrectEnds: false,
    timeLimitSeconds: 300
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 初始化时从gameState中获取设置
  useEffect(() => {
    if (gameState?.settings) {
      setSettings(gameState.settings);
    }
  }, [gameState]);

  // 更新游戏设置
  const updateSettings = async () => {
    if (!isHost) {
      setError("只有房主可以更改设置");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      await gameService.updateGameSettings(settings);
    } catch (error) {
      setError(`更新设置失败: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsLoading(false);
    }
  };

  // 开始游戏
  const startGame = async () => {
    if (!isHost) {
      setError("只有房主可以开始游戏");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      await gameService.startGame(settings);
    } catch (error) {
      setError(`开始游戏失败: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsLoading(false);
    }
  };

  // 渲染玩家列表
  const renderPlayerList = () => {
    if (!gameState?.players?.length) {
      return <p className="no-players">等待玩家加入...</p>;
    }

    return (
      <div className="player-list">
        <h3>玩家列表 ({gameState.players.length})</h3>
        <ul>
          {gameState.players.map(player => (
            <li key={player.playerId} className={`player-item ${player.isHost ? 'host' : ''}`}>
              <div className="player-avatar">
                <img src={player.avatarUrl || '/assets/default-avatar.png'} alt={player.nickname} />
              </div>
              <div className="player-info">
                <span className="player-name">{player.nickname}</span>
                {player.isHost && <span className="host-tag">房主</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="pokemon-guess-lobby">
      <div className="lobby-container">
        <div className="lobby-settings">
          <h2>游戏设置</h2>
          {error && <div className="error-message">{error}</div>}

          <div className="settings-form">
            <div className="form-group">
              <label htmlFor="maxAttempts">最大尝试次数:</label>
              <input 
                type="number" 
                id="maxAttempts"
                value={settings.maxAttempts}
                onChange={e => setSettings({...settings, maxAttempts: Number(e.target.value)})}
                min="1"
                max="20"
                disabled={!isHost}
              />
            </div>

            <div className="form-group">
              <label htmlFor="pokemonRange">宝可梦范围:</label>
              <select
                id="pokemonRange"
                value={settings.pokemonRange}
                onChange={e => setSettings({...settings, pokemonRange: e.target.value})}
                disabled={!isHost}
              >
                <option value="1-151">第一代 (1-151)</option>
                <option value="1-251">第一代和第二代 (1-251)</option>
                <option value="1-386">第一代至第三代 (1-386)</option>
                <option value="1-493">第一代至第四代 (1-493)</option>
                <option value="1-649">第一代至第五代 (1-649)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="timeLimitSeconds">时间限制 (秒):</label>
              <input 
                type="number" 
                id="timeLimitSeconds"
                value={settings.timeLimitSeconds}
                onChange={e => setSettings({...settings, timeLimitSeconds: Number(e.target.value)})}
                min="30"
                max="1800"
                disabled={!isHost}
              />
            </div>

            <div className="form-group checkbox">
              <input 
                type="checkbox" 
                id="firstCorrectEnds"
                checked={settings.firstCorrectEnds}
                onChange={e => setSettings({...settings, firstCorrectEnds: e.target.checked})}
                disabled={!isHost}
              />
              <label htmlFor="firstCorrectEnds">第一个猜对结束游戏</label>
            </div>

            {isHost && (
              <div className="settings-actions">
                <button 
                  className="update-settings-btn"
                  onClick={updateSettings}
                  disabled={isLoading}
                >
                  更新设置
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="lobby-players">
          {renderPlayerList()}
        </div>
      </div>

      {isHost && (
        <div className="start-game-container">
          <button 
            className="start-game-btn"
            onClick={startGame}
            disabled={isLoading || !gameState?.players?.length}
          >
            开始游戏
          </button>
          <p className="start-info">至少需要一名玩家才能开始游戏</p>
        </div>
      )}

      {!isHost && (
        <div className="waiting-message">
          <p>等待房主开始游戏</p>
        </div>
      )}
    </div>
  );
};

export default PokemonGuessLobby; 