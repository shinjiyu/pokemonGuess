import { EventEmitter } from 'events';

export interface UserInfo {
    userId: string;
    nickname: string;
    avatar: string;
    gender: string;
}

export class UserManager {
    private static instance: UserManager;
    private userInfo: UserInfo;
    private eventEmitter: EventEmitter;
    private storageKey = 'quiz_game_user_info';

    private constructor() {
        this.eventEmitter = new EventEmitter();
        this.userInfo = this.loadUserInfo();
    }

    public static getInstance(): UserManager {
        if (!UserManager.instance) {
            UserManager.instance = new UserManager();
        }
        return UserManager.instance;
    }

    private loadUserInfo(): UserInfo {
        try {
            const storedInfo = localStorage.getItem(this.storageKey);
            if (storedInfo) {
                return JSON.parse(storedInfo);
            }
        } catch (error) {
            console.error("Error loading user info from localStorage:", error);
        }

        // Default user info if nothing is stored
        return {
            userId: `user_${Math.floor(Math.random() * 10000)}`,
            nickname: `Player_${Math.floor(Math.random() * 1000)}`,
            avatar: this.getDefaultAvatar(),
            gender: 'unknown'
        };
    }

    private saveUserInfo(): void {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.userInfo));
            this.eventEmitter.emit('userInfoUpdated', this.userInfo);
        } catch (error) {
            console.error("Error saving user info to localStorage:", error);
        }
    }

    public getUserId(): string {
        return this.userInfo.userId;
    }

    public getNickname(): string {
        return this.userInfo.nickname;
    }

    public getAvatar(): string {
        return this.userInfo.avatar;
    }

    public getGender(): string {
        return this.userInfo.gender;
    }

    public getUserInfo(): UserInfo {
        return { ...this.userInfo };
    }

    public setNickname(nickname: string): void {
        if (!nickname || nickname.trim() === '') {
            throw new Error('Nickname cannot be empty');
        }
        this.userInfo.nickname = nickname.trim();
        this.saveUserInfo();
    }

    public setAvatar(avatar: string): void {
        if (!avatar || avatar.trim() === '') {
            throw new Error('Avatar URL cannot be empty');
        }
        this.userInfo.avatar = avatar.trim();
        this.saveUserInfo();
    }

    public setGender(gender: string): void {
        const validGenders = ['male', 'female', 'other', 'unknown'];
        if (!validGenders.includes(gender.toLowerCase())) {
            throw new Error(`Gender must be one of: ${validGenders.join(', ')}`);
        }
        this.userInfo.gender = gender.toLowerCase();
        this.saveUserInfo();
    }

    public resetUserInfo(): void {
        // Keep the same userId but reset other fields
        const userId = this.userInfo.userId;
        this.userInfo = {
            userId,
            nickname: `Player_${Math.floor(Math.random() * 1000)}`,
            avatar: this.getDefaultAvatar(),
            gender: 'unknown'
        };
        this.saveUserInfo();
    }

    public onUserInfoUpdated(callback: (userInfo: UserInfo) => void): void {
        this.eventEmitter.on('userInfoUpdated', callback);
    }

    public offUserInfoUpdated(callback: (userInfo: UserInfo) => void): void {
        this.eventEmitter.off('userInfoUpdated', callback);
    }

    private getDefaultAvatar(): string {
        // Return a default avatar URL or placeholder
        return 'https://api.dicebear.com/7.x/bottts/svg?seed=' + Math.random().toString(36).substring(2, 8);
    }
} 