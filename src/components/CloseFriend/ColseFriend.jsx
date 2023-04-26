import React from 'react';
import "./colseFriend.scss";
const ColseFriend = ({user}) => {
    return (
      <li className='sidebarFriend'>
      <img
        src={user.profilePicture}
        alt=''
        className='sidebarFriendImg'
      />
      <span className='sidebarFriendName'>{user.username}</span>
    </li>
    );
}

export default ColseFriend;
