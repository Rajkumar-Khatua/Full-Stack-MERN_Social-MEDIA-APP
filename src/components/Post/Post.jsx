import { HeartBrokenOutlined, HeatPumpRounded, MonitorHeartRounded, MoreVert, ThumbDownAltSharp, ThumbDownOffAlt, ThumbUpAltOutlined, ThumbUpAltRounded } from '@mui/icons-material';
import React, { useState } from 'react';
import "./post.scss";
import TagFacesRoundedIcon from '@mui/icons-material/TagFacesRounded';
import SentimentDissatisfiedRoundedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';
import { Users } from "../../TemporaryDataForTest";

function Post({post}) {
  // testing for user fetching
  // const users = Users.filter(u=>u.id === 1)
  // console.log(users[0].username);

  const [like, setLike] = useState(post.like);
  // post already liked ?
  const [isLiked, setIsLiked] = useState(false);
  // change the like state by like handeller function if it is liked then 
  // it will decrease the like count otherwise it will increase the like count
  // it will check first alreadey the post is like or not ? all thow it initial state is false 
  const likeHandeller = () =>{
    setLike(isLiked ? like-1 : like+1 );
    // if like already exists then update the state
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u)=> u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
            {/* // filter the username with  all individual posts */}
             {Users.filter((u)=> u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
           {isLiked? <ThumbUpAltRounded  className="likeIcon" htmlColor='blue' onClick={likeHandeller}/>  : <ThumbDownAltSharp ThumbUpAltRounded className="likeIcon"  htmlColor='gray' onClick={likeHandeller}/>}
            {/* {isLiked? <TagFacesRoundedIcon  className="likeIcon" htmlColor='blue' onClick={happyHandeller}/>  : <SentimentDissatisfiedRoundedIcon ThumbUpAltRounded className="likeIcon"  htmlColor='gray' onClick={likeHandeller}/>} */}
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} people comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Post