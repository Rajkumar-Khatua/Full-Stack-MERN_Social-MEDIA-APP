import React from "react";
import "./header.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Person3RoundedIcon from "@mui/icons-material/Person3Rounded";
import MarkChatReadRoundedIcon from "@mui/icons-material/MarkChatReadRounded";
import { Notifications, Settings } from "@mui/icons-material";
import { MenuItem } from "@mui/base";
import { Menu } from "@mui/material";

function Header() {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className='logo'>TheSocial</span>
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
        <img
          src='https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg'
          alt=''
          className='topbarImg'
        />
        <Settings />
      </div>
    </div>
  );
}
export default Header;
