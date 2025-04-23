import React, { useEffect, useState } from 'react';
import SYSTEM_CONFIG from '../core/config/SYSTEM_CONFIG';
import { OnlinePlayerService } from '../services/OnlinePlayerService';
import '../styles/App.css';
import OnlineMatch from './OnlineMatch';
import PokemonGuessGame from './PokemonGuessGame';
import UserProfile from './UserProfile';

type Tab = 'home' | 'match' | 'profile' | 'pokemon';

const App: React.FC = () => {
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState('Disconnected');
  const [onlinePlayerService] = useState(() => OnlinePlayerService.getInstance());
  const [activeTab, setActiveTab] = useState<Tab>('home');

  useEffect(() => {
    const connectToServer = async () => {
      setMessage('Connecting to server...');
      const success = await onlinePlayerService.connect(
        SYSTEM_CONFIG.SERVER.DEFAULT_URL,
        SYSTEM_CONFIG.GAME.DEFAULT_ROOM
      );
      
      if (success) {
        setConnected(true);
        setMessage('Connected to server!');
      } else {
        setMessage('Failed to connect. Please try again.');
      }
    };

    connectToServer();

    return () => {
      // Cleanup if needed
    };
  }, [onlinePlayerService]);

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <UserProfile />;
      case 'match':
        return <OnlineMatch />;
      case 'pokemon':
        return <PokemonGuessGame />;
      default:
        return (
          <>
            <div className="connection-status">
              <div className={`status-indicator ${connected ? 'connected' : 'disconnected'}`}></div>
              <p>{message}</p>
            </div>
            
            {connected ? (
              <div className="game-container">
                <h2>欢迎来到游戏大厅!</h2>
                <p>请选择游戏模式</p>
                <div className="menu-buttons">
                  <button 
                    className="menu-button"
                    onClick={() => setActiveTab('match')}
                  >
                    在线玩家匹配
                  </button>
                  <button 
                    className="menu-button pokemon-button"
                    onClick={() => setActiveTab('pokemon')}
                  >
                    猜宝可梦
                  </button>
                </div>
              </div>
            ) : (
              <button 
                className="connect-button"
                onClick={() => {
                  onlinePlayerService.connect(
                    SYSTEM_CONFIG.SERVER.DEFAULT_URL,
                    SYSTEM_CONFIG.GAME.DEFAULT_ROOM
                  ).then(success => {
                    if (success) {
                      setConnected(true);
                      setMessage('Connected to server!');
                    } else {
                      setMessage('Failed to connect. Please try again.');
                    }
                  });
                }}
              >
                连接到服务器
              </button>
            )}
          </>
        );
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="nav-buttons">
          <button 
            className={`nav-button ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            首页
          </button>
          {connected && (
            <>
              <button 
                className={`nav-button ${activeTab === 'match' ? 'active' : ''}`}
                onClick={() => setActiveTab('match')}
              >
                匹配
              </button>
              <button 
                className={`nav-button pokemon-nav ${activeTab === 'pokemon' ? 'active' : ''}`}
                onClick={() => setActiveTab('pokemon')}
              >
                猜宝可梦
              </button>
            </>
          )}
        </div>
        <h1>游戏中心</h1>
        <button 
          className={`profile-button ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab(activeTab === 'profile' ? 'home' : 'profile')}
        >
          {activeTab === 'profile' ? '关闭个人资料' : '个人资料'}
        </button>
      </header>
      
      <main className="main">
        {renderContent()}
      </main>
    </div>
  );
};

export default App; 