import React from 'react';
import Friend from './Friend';


const FriendsList = props => {
  

    const { friends } = props;

    const mappedFriends = friends.map(friend  => 
                        <Friend 
                            key={Math.random} 
                            name={friend.name} 
                            age={friend.age} 
                            pets={friend.pets} 
                        />)

    return (
        <div>
            { mappedFriends }
        </div>

    )

}
export default FriendsList