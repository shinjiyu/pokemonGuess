import React, { useEffect, useState } from 'react';
import { OnlinePlayerService } from '../services/OnlinePlayerService';
import '../styles/UserProfile.css';
import { UserInfo, UserManager } from '../user/UserManager';

const UserProfile: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>(UserManager.getInstance().getUserInfo());
  const [editMode, setEditMode] = useState(false);
  const [nickname, setNickname] = useState(userInfo.nickname);
  const [avatar, setAvatar] = useState(userInfo.avatar);
  const [gender, setGender] = useState(userInfo.gender);
  const [error, setError] = useState('');
  const [reconnecting, setReconnecting] = useState(false);

  useEffect(() => {
    const userManager = UserManager.getInstance();
    
    // Update local state when user info changes
    const handleUserInfoUpdate = (updatedInfo: UserInfo) => {
      setUserInfo(updatedInfo);
      setNickname(updatedInfo.nickname);
      setAvatar(updatedInfo.avatar);
      setGender(updatedInfo.gender);
    };
    
    userManager.onUserInfoUpdated(handleUserInfoUpdate);
    
    return () => {
      userManager.offUserInfoUpdated(handleUserInfoUpdate);
    };
  }, []);

  const reconnectToOnlineRoom = async () => {
    const onlineService = OnlinePlayerService.getInstance();
    if (onlineService.isConnected()) {
      setReconnecting(true);
      try {
        // 断开连接
        onlineService.disconnect();
        
        // 获取当前服务器URL和房间ID
        const serverUrl = localStorage.getItem('last_server_url') || 'wss://your-default-server-url.com';
        const roomId = localStorage.getItem('last_room_id') || 'OnlinePlayerRoom';
        
        // 重新连接
        await onlineService.connect(serverUrl, roomId, true);
        console.log('Successfully reconnected with updated user information');
      } catch (error) {
        console.error('Failed to reconnect:', error);
      } finally {
        setReconnecting(false);
      }
    }
  };

  const handleSave = async () => {
    try {
      const userManager = UserManager.getInstance();
      userManager.setNickname(nickname);
      userManager.setAvatar(avatar);
      userManager.setGender(gender);
      setEditMode(false);
      setError('');
      
      // 保存成功后重连
      await reconnectToOnlineRoom();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Failed to save user information');
      }
    }
  };

  const handleCancel = () => {
    // Reset form values to current user info
    setNickname(userInfo.nickname);
    setAvatar(userInfo.avatar);
    setGender(userInfo.gender);
    setEditMode(false);
    setError('');
  };

  const handleReset = async () => {
    if (window.confirm('Are you sure you want to reset your profile information?')) {
      UserManager.getInstance().resetUserInfo();
      // 重置后也需要重连
      await reconnectToOnlineRoom();
    }
  };

  // Generate random avatar using DiceBear API
  const generateRandomAvatar = () => {
    const seed = Math.random().toString(36).substring(2, 8);
    setAvatar(`https://api.dicebear.com/7.x/bottts/svg?seed=${seed}`);
  };

  return (
    <div className="user-profile">
      <div className="profile-card">
        <div className="profile-header">
          <h2>User Profile</h2>
          {reconnecting && <span className="reconnecting-status">Reconnecting...</span>}
          {error && <div className="error-message">{error}</div>}
        </div>
        
        <div className="profile-avatar">
          <img 
            src={avatar || 'https://api.dicebear.com/7.x/bottts/svg?seed=fallback'} 
            alt="User Avatar"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/bottts/svg?seed=fallback';
            }}
          />
        </div>
        
        <div className="profile-details">
          {editMode ? (
            <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
              <div className="form-group">
                <label htmlFor="nickname">Nickname:</label>
                <input
                  id="nickname"
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  maxLength={20}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="avatar">Avatar URL:</label>
                <input
                  id="avatar"
                  type="text"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="unknown">Prefer not to say</option>
                </select>
              </div>
              
              <div className="button-group">
                <button type="submit" className="save-btn" disabled={reconnecting}>Save</button>
                <button type="button" className="cancel-btn" onClick={handleCancel} disabled={reconnecting}>Cancel</button>
              </div>
            </form>
          ) : (
            <>
              <div className="info-row">
                <span className="info-label">User ID:</span>
                <span className="info-value">{userInfo.userId}</span>
              </div>
              
              <div className="info-row">
                <span className="info-label">Nickname:</span>
                <span className="info-value">{userInfo.nickname}</span>
              </div>
              
              <div className="info-row">
                <span className="info-label">Gender:</span>
                <span className="info-value">{userInfo.gender}</span>
              </div>
              
              <div className="button-group">
                <button className="edit-btn" onClick={() => setEditMode(true)} disabled={reconnecting}>Edit Profile</button>
                <button className="reset-btn" onClick={handleReset} disabled={reconnecting}>Reset</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 