import "./header.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Person3RoundedIcon from "@mui/icons-material/Person3Rounded";
import MarkChatReadRoundedIcon from "@mui/icons-material/MarkChatReadRounded";
import { Notifications, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Header() {
  const {user} = useContext(AuthContext);
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className='logo'>
          <Link
            to='/'
            style={{ color: "inherit", textDecoration: "none" }}>
            TheSocial
          </Link>
        </span>
      </div>
      <div className='topbarCenter'>
        <div className='searchbar'>
          <SearchOutlinedIcon className='searchIcon' />
          <input
            placeholder='Search for friend, post or video'
            className='searchInput'
          />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLinks'>
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <Person3RoundedIcon />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <MarkChatReadRoundedIcon />
            <span className='topbarIconBadge'>2</span>
          </div>
          <div className='topbarIconItem'>
            <Notifications />
            <span className='topbarIconBadge'>1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              // user.profilePicture
              //   ? user.profilePicture
              //   : user.profilePicture +
              //     "https://icon-library.com/images/default-profile-icon/default-profile-icon-3.jpg"
              user.profilePicture  || "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg"
            }
            alt=''
            className='topbarImg'
          />
        </Link>
        <Link to={`/profile/${user.username}`}>
        <span  style={{textAlign:'center', color:'#fff', marginLeft:-45, fontWeight:'bold',}}>{user.username}</span>
        </Link>
        <Settings />
      </div>
    </div>
  );
}
export default Header;
