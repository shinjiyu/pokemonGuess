import React, { useEffect, useRef, useState } from 'react';
import { GameState, PlayerGuessDetail, PokemonGuessService } from '../services/PokemonGuessService';
import '../styles/PokemonGuessPlay.css';
// @ts-ignore
import pokemonNames from '../data/names.json';

interface PokemonGuessPlayProps {
  gameService: PokemonGuessService;
  gameState: GameState;
  isHost: boolean;
}

// 扩展IPlayerDetailInfo类型以包含guessHistory
interface ExtendedPlayerDetail {
  playerId?: string;
  nickname?: string;
  avatarUrl?: string;
  isHost?: boolean;
  status?: number;
  attemptsUsed?: number;
  lastActivityTime?: number;
  guessDetails?: any[]; // 完整的猜测历史详情
  [key: string]: any;
}

const PokemonGuessPlay: React.FC<PokemonGuessPlayProps> = ({ gameService, gameState, isHost }) => {
  const [pokemonName, setPokemonName] = useState<string>('');
  const [filteredNames, setFilteredNames] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [timeRemaining, setTimeRemaining] = useState(gameState.remainingTimeSeconds);
  const [playerDetail, setPlayerDetail] = useState<ExtendedPlayerDetail | null>(null);
  const [guessHistory, setGuessHistory] = useState<PlayerGuessDetail[]>([]);
  const [currentAttempt, setCurrentAttempt] = useState(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 加载玩家详细信息
  useEffect(() => {
    const detail = gameService.getPlayerDetail() as ExtendedPlayerDetail;
    if (detail) {
      setPlayerDetail(detail);
      
      // 更新猜测历史记录
      if (detail.guessDetails && detail.guessDetails.length > 0) {
        setGuessHistory(detail.guessDetails.map((guess: any) => ({
          attemptNumber: guess.attemptNumber || 0,
          pokemonName: guess.pokemonName || '',
          status: guess.status || 0,
          timestamp: guess.timestamp || 0,
          type: guess.type || [],
          power: guess.power,
          speed: guess.speed,
          attack: guess.attack,
          defense: guess.defense,
          generation: guess.generation,
          shape: guess.shape,
          evolution: guess.evolution,
          catchRate: guess.catchRate,
          abilities: guess.abilities || [],
          eggs: guess.eggs || [],
          labels: guess.labels || [],
          stage: guess.stage,
          color: guess.color
        })));
        setCurrentAttempt((detail.guessDetails.length || 0) + 1);
      }
    }

    // 设置监听器接收玩家详情更新
    gameService.onPlayerDetailUpdated(handlePlayerDetailUpdated);

    return () => {
      gameService.offPlayerDetailUpdated(handlePlayerDetailUpdated);
    };
  }, [gameService]);

  // 设置倒计时计时器
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setTimeRemaining(gameState.remainingTimeSeconds);

    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [gameState.remainingTimeSeconds]);

  // 处理玩家详情更新
  const handlePlayerDetailUpdated = (detail: any) => {
    const extendedDetail = detail as ExtendedPlayerDetail;
    setPlayerDetail(extendedDetail);
    
    // 更新猜测历史
    if (extendedDetail.guessDetails && extendedDetail.guessDetails.length > 0) {
      setGuessHistory(extendedDetail.guessDetails.map((guess: any) => ({
        attemptNumber: guess.attemptNumber || 0,
        pokemonName: guess.pokemonName || '',
        status: guess.status || 0,
        timestamp: guess.timestamp || 0,
        type: guess.type || [],
        power: guess.power,
        speed: guess.speed,
        attack: guess.attack,
        defense: guess.defense,
        generation: guess.generation,
        shape: guess.shape,
        evolution: guess.evolution,
        catchRate: guess.catchRate,
        abilities: guess.abilities || [],
        eggs: guess.eggs || [],
        labels: guess.labels || [],
        stage: guess.stage,
        color: guess.color
      })));
      
      setCurrentAttempt((extendedDetail.guessDetails.length || 0) + 1);
    }
  };

  // 处理输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPokemonName(value);
    setError('');

    if (value.trim()) {
      // 搜索匹配的宝可梦名称
      const filtered = pokemonNames.filter((name: string) => 
        name.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 10); // 限制最多显示10个结果
      setFilteredNames(filtered);
      setShowDropdown(filtered.length > 0);
    } else {
      setFilteredNames([]);
      setShowDropdown(false);
    }
  };

  // 选择宝可梦名称
  const selectPokemon = (name: string) => {
    setPokemonName(name);
    setShowDropdown(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // 点击外部关闭下拉框
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
          inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 提交猜测
  const handleSubmitGuess = () => {
    if (!pokemonName.trim()) {
      setError('请输入宝可梦名称');
      return;
    }

    setIsSubmitting(true);
    setError('');
    
    gameService
      .submitGuess(pokemonName, currentAttempt)
      .then(() => {
        setPokemonName('');
        setIsSubmitting(false);
      })
      .catch((err) => {
        console.error('提交猜测失败:', err);
        setIsSubmitting(false);
        setError(err.message || '提交失败，请重试');
      });
  };

  // 放弃游戏
  const giveUpGame = async () => {
    if (window.confirm('确定要放弃本局游戏吗？')) {
      try {
        await gameService.endGame(true);
      } catch (error) {
        setError(`放弃游戏失败: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  };

  // 获取猜测结果状态文本
  const getStatusText = (status: number): string => {
    switch (status) {
      case 1: return '猜对了';
      case 2: return '猜错了';
      case 3: return '放弃了';
      case 4: return '连接断开';
      default: return '未知';
    }
  };

  // 获取比较结果图标
  const getComparisonIcon = (comparison: any) => {
    if (!comparison) return null;
    if (comparison.value === 'high') return '↑'; // 较高，显示向上箭头
    if (comparison.value === 'low') return '↓'; // 较低，显示向下箭头
    return null;
  };

  // 获取比较结果标签样式
  const getComparisonClass = (comparison: any): string => {
    if (!comparison) return '';
    if (comparison.value === 'True' || comparison.value === 'equiv') return 'near'; // 相同，绿色
    if (comparison.distance === 'far') return 'far'; // 较远，灰色
    if (comparison.distance === 'near') return 'close'; // 接近，黄色
    return '';
  };

  // 格式化剩余时间
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // 渲染玩家列表（简短信息）
  const renderPlayerList = () => {
    return (
      <div className="player-status-list">
        <h3>玩家状态</h3>
        <ul>
          {gameState.players.map(player => {
            const latestGuess = player.guessHistory?.length > 0 
              ? player.guessHistory[player.guessHistory.length - 1] 
              : null;
              
            return (
              <li key={player.playerId} className="player-status-item">
                <span className="player-name">{player.nickname}</span>
                <span className={`player-status status-${player.status}`}>
                  {player.status === 1 ? '游戏中' : 
                   player.status === 2 ? '已完成' : 
                   player.status === 3 ? '已放弃' : '未知'}
                </span>
                <span className="guess-count">尝试: {player.attemptsUsed}/{gameState.settings.maxAttempts}</span>
                {latestGuess && (
                  <span className={`latest-guess status-${latestGuess.status}`}>
                    最近: {getStatusText(latestGuess.status)}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  // 渲染猜测历史
  const renderGuessHistory = () => {
    if (guessHistory.length === 0) {
      return <p className="no-guesses">还没有猜测记录</p>;
    }

    return (
      <div className="guess-history">
        {guessHistory.map((guess, index) => (
          <div key={index} className={`guess-item status-${guess.status}`}>
            <div className="guess-header">
              <span className="attempt-number">#{guess.attemptNumber}</span>
              <span className="pokemon-name">{guess.pokemonName}</span>
              <span className={`guess-status status-${guess.status}`}>
                {getStatusText(guess.status)}
              </span>
            </div>
            
            {/* 只有猜对或猜错才显示详细比较 */}
            {(guess.status === 1 || guess.status === 2) && (
              <div className="guess-details">
                {guess.type && guess.type.length > 0 && (
                  <div className="attribute-comparison">
                    <span className="attribute-label">属性:</span>
                    <div className="attribute-tags">
                      {guess.type.map((t: any, i: number) => (
                        <span key={i} className={`attribute-tag ${getComparisonClass(t)}`}>
                          {t.key}
                          {getComparisonIcon(t)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {guess.generation && (
                  <div className="attribute-comparison">
                    <span className="attribute-label">世代:</span>
                    <span className={`attribute-tag ${getComparisonClass(guess.generation)}`}>
                      {guess.generation.key} {getComparisonIcon(guess.generation)}
                    </span>
                  </div>
                )}
                
                {guess.power && (
                  <div className="attribute-comparison">
                    <span className="attribute-label">强度:</span>
                    <span className={`attribute-tag ${getComparisonClass(guess.power)}`}>
                      {guess.power.key} {getComparisonIcon(guess.power)}
                    </span>
                  </div>
                )}
                
                {guess.speed && (
                  <div className="attribute-comparison">
                    <span className="attribute-label">速度:</span>
                    <span className={`attribute-tag ${getComparisonClass(guess.speed)}`}>
                      {guess.speed.key} {getComparisonIcon(guess.speed)}
                    </span>
                  </div>
                )}
                
                {guess.attack && (
                  <div className="attribute-comparison">
                    <span className="attribute-label">攻击:</span>
                    <span className={`attribute-tag ${getComparisonClass(guess.attack)}`}>
                      {guess.attack.key} {getComparisonIcon(guess.attack)}
                    </span>
                  </div>
                )}
                
                {guess.defense && (
                  <div className="attribute-comparison">
                    <span className="attribute-label">防御:</span>
                    <span className={`attribute-tag ${getComparisonClass(guess.defense)}`}>
                      {guess.defense.key} {getComparisonIcon(guess.defense)}
                    </span>
                  </div>
                )}
                
                {guess.evolution && (
                  <div className="attribute-comparison">
                    <span className="attribute-label">进化:</span>
                    <span className={`attribute-tag ${getComparisonClass(guess.evolution)}`}>
                      {guess.evolution.key} {getComparisonIcon(guess.evolution)}
                    </span>
                  </div>
                )}
                
                {guess.shape && (
                  <div className="attribute-comparison">
                    <span className="attribute-label">形态:</span>
                    <span className={`attribute-tag ${getComparisonClass(guess.shape)}`}>
                      {guess.shape.key} {getComparisonIcon(guess.shape)}
                    </span>
                  </div>
                )}
                
                {guess.stage && (
                  <div className="attribute-comparison">
                    <span className="attribute-label">进化阶段:</span>
                    <span className={`attribute-tag ${getComparisonClass(guess.stage)}`}>
                      {guess.stage.key} {getComparisonIcon(guess.stage)}
                    </span>
                  </div>
                )}
                
                {guess.catchRate && (
                  <div className="attribute-comparison">
                    <span className="attribute-label">捕获率:</span>
                    <span className={`attribute-tag ${getComparisonClass(guess.catchRate)}`}>
                      {guess.catchRate.key} {getComparisonIcon(guess.catchRate)}
                    </span>
                  </div>
                )}
                
                {guess.abilities && guess.abilities.length > 0 && (
                  <div className="attribute-comparison">
                    <span className="attribute-label">特性:</span>
                    <div className="attribute-tags">
                      {guess.abilities.map((a: any, i: number) => (
                        <span key={i} className={`attribute-tag ${getComparisonClass(a)}`}>
                          {a.key}
                          {getComparisonIcon(a)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {guess.eggs && guess.eggs.length > 0 && (
                  <div className="attribute-comparison">
                    <span className="attribute-label">蛋组:</span>
                    <div className="attribute-tags">
                      {guess.eggs.map((e: any, i: number) => (
                        <span key={i} className={`attribute-tag ${getComparisonClass(e)}`}>
                          {e.key}
                          {getComparisonIcon(e)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {guess.labels && guess.labels.length > 0 && (
                  <div className="attribute-comparison">
                    <span className="attribute-label">标签:</span>
                    <div className="attribute-tags">
                      {guess.labels.map((l: any, i: number) => (
                        <span key={i} className={`attribute-tag ${getComparisonClass(l)}`}>
                          {l.key}
                          {getComparisonIcon(l)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {guess.color && (
                  <div className="attribute-comparison">
                    <span className="attribute-label">颜色:</span>
                    <span className={`attribute-tag color-tag ${typeof guess.color === 'object' ? getComparisonClass(guess.color) : ''}`} 
                          style={{backgroundColor: typeof guess.color === 'string' ? guess.color : (guess.color as any).key}}>
                      {typeof guess.color === 'string' ? guess.color : (guess.color as any).key}
                      {typeof guess.color === 'object' ? getComparisonIcon(guess.color) : null}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    // 如果游戏结束，清除错误信息和输入
    if (gameState.state === 3) { // 3 表示游戏结束状态
      setPokemonName('');
      setError('');
    }
  }, [gameState.state]);

  return (
    <div className="pokemon-guess-play">
      <div className="play-header">
        <div className="game-info">
          <div className="timer">
            <span className="timer-label">剩余时间:</span>
            <span className={`timer-value ${timeRemaining < 30 ? 'urgent' : ''}`}>
              {formatTime(timeRemaining)}
            </span>
          </div>
          <div className="attempts">
            <span className="attempts-label">尝试次数:</span>
            <span className="attempts-value">
              {currentAttempt - 1}/{gameState.settings.maxAttempts}
            </span>
          </div>
        </div>
        
        <div className="game-actions">
          {isHost && (
            <button 
              className="end-game-btn"
              onClick={() => gameService.endGame(false)}
            >
              结束游戏
            </button>
          )}
          <button 
            className="give-up-btn"
            onClick={giveUpGame}
          >
            放弃
          </button>
        </div>
      </div>

      <div className="play-content">
        <div className="players-section">
          {renderPlayerList()}
        </div>
        
        <div className="guess-section">
          <h2>猜宝可梦</h2>
          {error && <div className="error-message">{error}</div>}
          
          <div className="guess-form">
            <div className="autocomplete-wrapper">
              <input 
                ref={inputRef}
                type="text"
                value={pokemonName}
                onChange={handleInputChange}
                placeholder="输入宝可梦名称..."
                disabled={isSubmitting || currentAttempt > gameState.settings.maxAttempts}
              />
              {showDropdown && (
                <div className="pokemon-dropdown" ref={dropdownRef}>
                  {filteredNames.map((name, index) => (
                    <div 
                      key={index} 
                      className="pokemon-option"
                      onClick={() => selectPokemon(name)}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button 
              className="submit-guess-btn"
              onClick={handleSubmitGuess}
              disabled={isSubmitting || !pokemonName.trim() || currentAttempt > gameState.settings.maxAttempts || !pokemonNames.includes(pokemonName)}
            >
              {isSubmitting ? '提交中...' : '提交'}
            </button>
          </div>
          
          <div className="guess-history-section">
            <h3>你的猜测历史</h3>
            {renderGuessHistory()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonGuessPlay; 