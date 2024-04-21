// import React, { useEffect, useState } from 'react';
// import FriendList from './components/FriendList.component';
// import RequestList from './components/RequestList.component';
// import StatusFeed from './components/StatusFeed.component';

function HomePage() {
    // const [friends, setFriends] = useState([]);
    // const [requests, setRequests] = useState([]);
    // const [feed, setFeed] = useState([]);

    // useEffect(() => {
    //     fetchFriends().then(setFriends);
    //     fetchRequests().then(setRequests);
    //     fetchFeed().then(setFeed);
    // }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold underline">HomePAge</h1>
            {/* <FriendList friends={friends} />
            <RequestList requests={requests} />
            <StatusFeed feed={feed} /> */}
        </div>
    );
}

export default HomePage;