import React from 'react';
import { PlayerRank, PokemonGuessService } from '../services/PokemonGuessService';
import '../styles/PokemonGuessResult.css';

interface PokemonGuessResultProps {
  gameService: PokemonGuessService;
  result: {
    answerId: string;
    answerName: string;
    rankings: PlayerRank[];
    nextState: number;
  };
  onPlayAgain: () => void;
}

const PokemonGuessResult: React.FC<PokemonGuessResultProps> = ({ gameService, result, onPlayAgain }) => {
  const isHost = gameService.isHost();
  
  // 获取状态文本
  const getStatusText = (status: number): string => {
    switch (status) {
      case 1: return '猜对了';
      case 2: return '猜错了';
      case 3: return '放弃了';
      case 4: return '连接断开';
      default: return '未知';
    }
  };

  // 创建新游戏
  const createNewGame = async () => {
    onPlayAgain();
  };

  return (
    <div className="pokemon-guess-result">
      <div className="result-header">
        <h2>游戏结束</h2>
      </div>
      
      <div className="answer-section">
        <h3>正确答案</h3>
        <div className="pokemon-answer">
          <div className="pokemon-image">
            {/* 宝可梦图片，可以根据answerId加载 */}
            <img 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${result.answerId}.png`} 
              alt={result.answerName} 
              onError={(e) => {
                // 图片加载失败时的替代方案
                (e.target as HTMLImageElement).src = '/assets/pokemon-placeholder.png';
              }}
            />
          </div>
          <div className="pokemon-info">
            <span className="pokemon-name">{result.answerName}</span>
            <span className="pokemon-id">#{result.answerId}</span>
          </div>
        </div>
      </div>
      
      <div className="rankings-section">
        <h3>游戏排名</h3>
        {result.rankings.length === 0 ? (
          <p>没有玩家完成游戏</p>
        ) : (
          <table className="rankings-table">
            <thead>
              <tr>
                <th>名次</th>
                <th>玩家</th>
                <th>尝试次数</th>
                <th>用时</th>
                <th>状态</th>
                <th>得分</th>
              </tr>
            </thead>
            <tbody>
              {result.rankings.map((rank, index) => (
                <tr key={rank.playerId} className={`rank-row ${index < 3 ? `top-${index + 1}` : ''}`}>
                  <td>{rank.rank}</td>
                  <td>{rank.nickname}</td>
                  <td>{rank.attemptsUsed}</td>
                  <td>{Math.floor(rank.timeUsedSeconds / 60)}:{(rank.timeUsedSeconds % 60).toString().padStart(2, '0')}</td>
                  <td className={`status-${rank.finalStatus}`}>{getStatusText(rank.finalStatus)}</td>
                  <td>{rank.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      
      <div className="actions-section">
        {isHost && (
          <button 
            className="new-game-btn"
            onClick={createNewGame}
          >
            开始新游戏
          </button>
        )}
        {!isHost && (
          <div className="waiting-host">
            <p>等待房主开始新游戏</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonGuessResult; 