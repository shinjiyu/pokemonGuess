import React, { useEffect, useState } from 'react';
import { MatchInfo, OnlinePlayerService, PlayerInfo } from '../services/OnlinePlayerService';
import '../styles/OnlineMatch.css';

// 使用环境变量或常量控制功能开关
const ENABLE_MATCHMAKING = false; // 设置为false以隐藏匹配功能

const OnlineMatch: React.FC = () => {
  const [onlinePlayers, setOnlinePlayers] = useState<PlayerInfo[]>([]);
  const [isMatchmaking, setIsMatchmaking] = useState(false);
  const [matchId, setMatchId] = useState<string | null>(null);
  const [matchInfo, setMatchInfo] = useState<MatchInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [gameMode, setGameMode] = useState('standard');
  const [rank, setRank] = useState(1000);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const [showLogConsole, setShowLogConsole] = useState(false);
  const [logs, setLogs] = useState<Array<{playerId: string, message: string}>>([]);
  const [logMessage, setLogMessage] = useState('');
  
  useEffect(() => {
    // Initialize OnlinePlayerService with RoomModule
    const onlinePlayerService = OnlinePlayerService.getInstance();
    
    // Load online players
    loadOnlinePlayers();
    
    // Set up event listeners
    onlinePlayerService.onMatchSuccess(handleMatchSuccess);
    onlinePlayerService.onLogReceived(handleLogReceived);
    
    // Clean up event listeners
    return () => {
      onlinePlayerService.offMatchSuccess(handleMatchSuccess);
      onlinePlayerService.offLogReceived(handleLogReceived);
    };
  }, []);
  
  const handleMatchSuccess = (info: MatchInfo) => {
    setMatchInfo(info);
    setIsMatchmaking(false);
    setMatchId(null);
  };
  
  const handleLogReceived = (playerId: string, log: string) => {
    setLogs(prev => [...prev, { playerId, message: log }]);
  };
  
  const loadOnlinePlayers = async () => {
    try {
      setError(null);
      const service = OnlinePlayerService.getInstance();
      const players = await service.getOnlinePlayers(20);
      // 转换 IPlayerInfo[] 到 PlayerInfo[]
      const convertedPlayers: PlayerInfo[] = players.map(player => ({
        playerId: player.playerId || '',
        nickname: player.nickname || '',
        avatar: player.avatar || ''
      }));
      setOnlinePlayers(convertedPlayers);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load online players');
    }
  };
  
  const startMatchmaking = async () => {
    try {
      setError(null);
      const service = OnlinePlayerService.getInstance();
      const matchId = await service.joinMatch(gameMode);
      setIsMatchmaking(true);
      setMatchId(matchId);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to start matchmaking');
    }
  };
  
  const cancelMatchmaking = async () => {
    try {
      setError(null);
      const service = OnlinePlayerService.getInstance();
      await service.cancelMatch();
      setIsMatchmaking(false);
      setMatchId(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to cancel matchmaking');
    }
  };
  
  const subscribeToPlayerLogs = async (playerId: string) => {
    try {
      setError(null);
      const service = OnlinePlayerService.getInstance();
      await service.receiveLogsFrom(playerId);
      setSelectedPlayer(playerId);
      setShowLogConsole(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to subscribe to player logs');
    }
  };
  
  const sendLog = async () => {
    if (!logMessage.trim()) return;
    
    try {
      setError(null);
      const service = OnlinePlayerService.getInstance();
      await service.sendLog(logMessage);
      setLogMessage('');
      // Add our own log to the list
      setLogs(prev => [...prev, { 
        playerId: 'you', 
        message: logMessage 
      }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send log');
    }
  };
  
  return (
    <div className="online-match">
      <h2>Online Players</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="control-panel">
        <button 
          className="refresh-button"
          onClick={loadOnlinePlayers}
        >
          Refresh Players
        </button>
        
        {/* 匹配功能的UI，通过ENABLE_MATCHMAKING控制显示 */}
        {ENABLE_MATCHMAKING && !isMatchmaking && !matchInfo ? (
          <div className="matchmaking-panel">
            <div className="form-control">
              <label>Game Mode:</label>
              <select 
                value={gameMode}
                onChange={(e) => setGameMode(e.target.value)}
              >
                <option value="standard">Standard</option>
                <option value="quick">Quick Play</option>
                <option value="ranked">Ranked</option>
              </select>
            </div>
            
            <div className="form-control">
              <label>Rank:</label>
              <input 
                type="number" 
                value={rank}
                onChange={(e) => setRank(Number(e.target.value))}
                min="0"
                max="5000"
              />
            </div>
            
            <button 
              className="start-match-button"
              onClick={startMatchmaking}
            >
              Start Matchmaking
            </button>
          </div>
        ) : ENABLE_MATCHMAKING && isMatchmaking ? (
          <div className="matchmaking-status">
            <p>Matchmaking in progress... {matchId}</p>
            <div className="loading-spinner"></div>
            <button 
              className="cancel-button"
              onClick={cancelMatchmaking}
            >
              Cancel
            </button>
          </div>
        ) : ENABLE_MATCHMAKING && matchInfo ? (
          <div className="match-info">
            <h3>Match Found!</h3>
            <p>Room ID: {matchInfo?.roomId}</p>
            <div className="match-players">
              <h4>Players:</h4>
              <ul>
                {matchInfo?.players.map(player => (
                  <li key={player.playerId}>
                    {player.nickname}
                  </li>
                ))}
              </ul>
            </div>
            <button 
              className="new-match-button"
              onClick={() => {
                setMatchInfo(null);
                loadOnlinePlayers();
              }}
            >
              New Match
            </button>
          </div>
        ) : null}
      </div>
      
      <div className="player-list">
        <h3>Available Players ({onlinePlayers.length})</h3>
        {onlinePlayers.length === 0 ? (
          <p className="no-players">No players online. Try refreshing.</p>
        ) : (
          <ul>
            {onlinePlayers.map(player => (
              <li key={player.playerId} className="player-item">
                <div className="player-avatar">
                  <img src={player.avatar} alt={player.nickname} />
                </div>
                <div className="player-info">
                  <span className="player-name">{player.nickname}</span>
                </div>
                <div className="player-actions">
                  <button 
                    className="logs-button"
                    onClick={() => subscribeToPlayerLogs(player.playerId)}
                  >
                    View Logs
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {showLogConsole && (
        <div className="log-console">
          <div className="console-header">
            <h3>Logs {selectedPlayer && `- ${onlinePlayers.find(p => p.playerId === selectedPlayer)?.nickname}`}</h3>
            <button 
              className="close-button"
              onClick={() => {
                setShowLogConsole(false);
                setSelectedPlayer(null);
              }}
            >
              Close
            </button>
          </div>
          
          <div className="console-messages">
            {logs.length === 0 ? (
              <p className="no-logs">No logs available.</p>
            ) : (
              logs.map((log, index) => (
                <div 
                  key={index} 
                  className={`log-message ${log.playerId === 'you' ? 'own-message' : 'other-message'}`}
                >
                  <span className="log-sender">{log.playerId === 'you' ? 'You' : onlinePlayers.find(p => p.playerId === log.playerId)?.nickname || log.playerId}:</span>
                  <span className="log-text">{log.message}</span>
                </div>
              ))
            )}
          </div>
          
          <div className="console-input">
            <input 
              type="text"
              value={logMessage}
              onChange={(e) => setLogMessage(e.target.value)}
              placeholder="Type a message..."
              onKeyPress={(e) => e.key === 'Enter' && sendLog()}
            />
            <button onClick={sendLog}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnlineMatch; 