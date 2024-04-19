enum UserStatus {
    ONLINE = 'online',
    OFFLINE = 'offline',
    BUSY = 'busy',
    AWAY = 'away'
};

export interface ILogin {
    email: string;
    password: string;
};

export interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
};

export interface IUserCreate {
    username: string;
    email: string;
    password: string;
};

export interface IUserProfile extends IUser {
    friends: IUser[];
    friendRequests: IUser[];
    sentFriendRequests: IUser[];
    status: UserStatus;
};

export type IUserResponse = Omit<IUser, 'password'>;