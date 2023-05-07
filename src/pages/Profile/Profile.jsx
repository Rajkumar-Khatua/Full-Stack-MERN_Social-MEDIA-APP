import { useEffect, useState } from "react";
import Feed from "../../components/Feed/Feed";
import Header from "../../components/Header/Header";
import Leftbar from "../../components/LeftBar/Leftbar";
import Right from "../../components/RightBar/Rightbar";
import "./Profile.scss";
import axios from "axios";
import { useParams } from "react-router";
import { format } from "timeago.js";

function Profile() {
  const [user, setUser] = useState({});
  // define use to use in Main URL , Now dont need to say manually username
  const username = useParams().username;
  

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:8800/api/users?username=${username}`);
      setUser(res.data);
    };
    fetchUsers();
  }, [username]);

  return (
    <>
      <Header />
      <div className='profile'>
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                className='profileCoverImg'
                src={user.coverPicture || "https://images.pexels.com/photos/1353938/pexels-photo-1353938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                alt=''
              />
              <img
                className='profileUserImg'
                src={user.profilePicture || "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg"}
                alt=''
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>{user.username} </h4>
              <span className='profileInfoDesc'>{user.desc}</span>
              
            </div>
          </div>
          <div className='profileRightBottom'>
            <Leftbar />
            <Feed username={username} />
            <Right user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
