export enum FriendRequestStatus {
    PENDING = 'pending',
    ACCEPTED = 'accepted',
    REJECTED = 'rejected'
};
export interface IFriendRequest {
    id: number;
    senderId: number;
    receiverId: number;
    status: FriendRequestStatus;
    createdAt: Date;
    updatedAt: Date;
};

export interface IFriendRequestResponse {
    senderId: number;
    receiverId: number;
    status: string;
};

export interface IFriendRequests {
    receiverId: number;
    status: string;
};
