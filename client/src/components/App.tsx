import { useEffect, useRef, useState } from 'react';
import { Common } from '../proto/combined';
import { OnlinePlayerService } from '../services/OnlinePlayerService';
import '../styles/App.css';
import '../styles/UserProfile.css';
import OnlineMatch from './OnlineMatch';
import PokemonGuessGame from './PokemonGuessGame';
import UserProfile from './UserProfile';

function App() {
  const [activeTab, setActiveTab] = useState<string>('pokemon');
  const [showDebug, setShowDebug] = useState<boolean>(false);
  const [connected, setConnected] = useState<boolean>(false);
  const [playerData, setPlayerData] = useState<Common.IPlayerInfo>({ 
    nickname: '', 
    playerId: '', 
    gender: '0', 
    avatar: '1' 
  });
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isManualToggle, setIsManualToggle] = useState<boolean>(false);
  const manualToggleTimer = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef<number>(0);

  // Connect to online player service
  useEffect(() => {
    const onlinePlayerService = OnlinePlayerService.getInstance();
    
    // 只有当未连接时才尝试连接，避免重复连接
    if (!onlinePlayerService.isConnected()) {
      onlinePlayerService.connect();
    }
    
    // Add properly typed connection listener
    const connectionListener = (isConnected: boolean) => {
      setConnected(isConnected);
    };
    
    onlinePlayerService.addConnectionListener(connectionListener);
    
    return () => {
      onlinePlayerService.removeConnectionListener(connectionListener);
      // 只有在组件卸载时才断开连接，避免不必要的断开重连
      // onlinePlayerService.disconnect();
    };
  }, []);

  useEffect(() => {
    const onlinePlayerService = OnlinePlayerService.getInstance();

    // Create a properly typed handler for player info updates
    const handlePlayerInfoUpdated = (info: Common.IPlayerInfo) => {
      setPlayerData({
        nickname: info.nickname || '',
        playerId: info.playerId || '',
        gender: info.gender || '0',
        avatar: info.avatar || '1'
      });
    };

    // Use the event emitter to add and remove event listeners
    onlinePlayerService.addEventListener('player_info_updated', handlePlayerInfoUpdated);

    return () => {
      onlinePlayerService.removeEventListener('player_info_updated', handlePlayerInfoUpdated);
    };
  }, []);

  useEffect(() => {
    // Auto-collapse header on scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (!isManualToggle) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 20) {
          setIsCollapsed(true);
        } else if (currentScrollY < lastScrollY.current) {
          setIsCollapsed(false);
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isManualToggle]);

  useEffect(() => {
    // Reset manual toggle after 3 seconds
    if (isManualToggle) {
      if (manualToggleTimer.current) {
        clearTimeout(manualToggleTimer.current);
      }
      
      manualToggleTimer.current = setTimeout(() => {
        setIsManualToggle(false);
      }, 3000);
    }
    
    return () => {
      if (manualToggleTimer.current) {
        clearTimeout(manualToggleTimer.current);
      }
    };
  }, [isManualToggle]);

  // Auto-collapse when entering Pokemon game
  useEffect(() => {
    if (activeTab === 'pokemon') {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [activeTab]);

  const toggleHeader = () => {
    setIsCollapsed(!isCollapsed);
    setIsManualToggle(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <UserProfile />;
      case 'match':
        return <OnlineMatch />;
      case 'pokemon':
        return <PokemonGuessGame />;
      case 'home':
      default:
        return (
          <div className="home-container" style={{
            textAlign: 'center',
            padding: '2rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2>Welcome to the Game Center</h2>
            <p>Select a game from the navigation bar to get started.</p>
            {!connected && (
              <div style={{ marginTop: '20px', color: '#f44336' }}>
                <p>Not connected to server. Please try refreshing the page.</p>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="app">
      <div className={`header-container ${isCollapsed ? 'collapsed' : ''}`} ref={headerRef}>
        <header className="header">
          <div className="nav-buttons">
            <button className={`nav-button ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
              首页
            </button>
            {connected && (
              <>
                <button className={`nav-button ${activeTab === 'match' ? 'active' : ''}`} onClick={() => setActiveTab('match')}>
                  在线列表
                </button>
                <button className={`nav-button pokemon-nav ${activeTab === 'pokemon' ? 'active' : ''}`} onClick={() => setActiveTab('pokemon')}>
                  猜宝可梦
                </button>
              </>
            )}
          </div>
          <h1>游戏中心</h1>
          <button className={`profile-button ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab(activeTab === 'profile' ? 'home' : 'profile')}>
            {activeTab === 'profile' ? '关闭个人资料' : '个人资料'}
          </button>
        </header>
        <button className="header-toggle" onClick={toggleHeader}>
          {isCollapsed ? '▼' : '▲'}
        </button>
      </div>

      <main className="main-content">
        {renderContent()}
      </main>

      {showDebug && (
        <div className="debug-panel">
          <h3>Debug Information</h3>
          <pre>{JSON.stringify({ connected, playerData, activeTab }, null, 2)}</pre>
        </div>
      )}
      <button 
        style={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 1000 }}
        onClick={() => setShowDebug(!showDebug)}
      >
        {showDebug ? 'Hide Debug' : 'Show Debug'}
      </button>
    </div>
  );
}

export default App;