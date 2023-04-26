import React from 'react';
import "./online.scss"
function Online({user}) {
  return (
    <li className="rightbarFriend">
    <div className="rightbarProfileImgContainer">
      <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
      <span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername">{user.username}</span>
  </li>
  )
}
export default Online

// This values are comming from RightBar Online section 'Need to remember this'***