export enum UserStatus {
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
    status: UserStatus;
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
};

export type IUserResponse = Omit<IUser, 'password'>;