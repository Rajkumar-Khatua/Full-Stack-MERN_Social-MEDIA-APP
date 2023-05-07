import React from "react";
import "./rightbar.scss";
import { Users } from "../../TemporaryDataForTest";
import Online from "../Online/Online";
import { format } from "timeago.js";

function Right({ user }) {
  // innner components
  const HomeRightBar = () => {
    return (
      <>
        <div className='birthdayContainer'>
          <img
            src='https://cdn.pixabay.com/photo/2016/12/09/04/02/presents-1893640_960_720.jpg '
            alt=''
            className='birthdayImg'
          />
          <span className='birthdayText'>
            <b>Poltu</b> and <b>3 others Birthday today </b>Wish them.
          </span>
        </div>
        <img
          src='https://cdn.pixabay.com/photo/2020/01/04/11/22/hire-4740315_960_720.jpg'
          alt=''
          className='rightbarAd'
        />

        <h4 className='rightbarTitle'>Active Friends</h4>
        <ul className='rightbarFriendList'>
          {/* Fetch the Online Friend from Dummy data and render via Online Components. */}
          {Users.map((u) => (
            <Online
              key={u}
              user={u}
            />
          ))}
        </ul>
      </>
    );
  };

  // this function is only showing in the profile page
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className='rightBarTitle'>User Information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItems'>
            <span className='rightBarInfoKey'>City:</span>
            <span className='rightBarInfoVal'>{user.city}</span>
          </div>
          <div className='rightbarInfoItems'>
            <span className='rightBarInfoKey'>From:</span>
            <span className='rightBarInfoVal'>{user.from}</span>
          </div>
          <div className='rightbarInfoItems'>
            <span className='rightBarInfoKey'>Relationship:</span>
            <span className='rightBarInfoVal'>{user.reslationship ===1 ? "Single" : user.reslationship===2 ? "Married" : "Complecated"}</span>
          </div>
          <div className='rightbarInfoItems'>
            <span className='rightBarInfoKey'>Join at:</span>
            <span className='rightBarInfoVal'>{format(user.createdAt)}</span>
          </div>
          <h4 className='rightBarTitle'>My Friends</h4>
          <div className='rightbarFollowings'>
            <div className='rightbarFollowg'>
              <img
                src='https://cdn.pixabay.com/photo/2014/07/10/11/17/grimace-388987_960_720.jpg'
                alt=''
                className='rightbarFollowingImg'
              />
              <span className='rightbarFollowingName'>Brock Lesner.</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
export default Right;
