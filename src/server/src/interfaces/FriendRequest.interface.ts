enum FriendRequestStatus {
    Pending = 'pending',
    Accepted = 'accepted',
    Rejected = 'rejected'
}


export interface IFriendRequest {
    id: number;
    senderId: number;
    receiverId: number;
    status: FriendRequestStatus;
    createdAt: Date;
    updatedAt: Date;
};

export interface IFriendRequestResponse {
    id: number;
    senderId: number;
    receiverId: number;
    status: FriendRequestStatus;
    createdAt: Date;
    updatedAt: Date;
};

export interface IFriendRequestCreate {
    senderId: number;
    receiverId: number;
    status: FriendRequestStatus;
};
