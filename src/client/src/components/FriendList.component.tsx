import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

interface Friend {
    id: number;
    name: string;
}

interface FriendListProps {
    friends: Friend[];
}

const FriendList: React.FC<FriendListProps> = ({ friends }) => {
    return (
        <List>
            {friends.map((friend) => (
                <ListItem key={friend.id}>
                    <ListItemText primary={friend.name} />
                </ListItem>
            ))}
        </List>
    );
};

export default FriendList;