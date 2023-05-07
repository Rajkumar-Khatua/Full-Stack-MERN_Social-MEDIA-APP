import {
  MoreVert,
  ThumbDownAltSharp,
  ThumbUpAltRounded,
} from "@mui/icons-material";
import React, { useEffect, useState, useContext } from "react";
import "./post.scss";
import axios from "axios";
import { Users } from "../../TemporaryDataForTest";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Post({ post }) {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [like, setLike] = useState(post.likes.length);
  // post already liked ?
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  
  useEffect(()=>{
    setIsLiked(post.likes.includes(currentUser._id));
  }, currentUser._id, post.likes);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/users?userId=${post.userId}`
      );
      setUser(res.data);
    };
    fetchUsers();
  }, [post.userId]);

  

  // change the like state by like handeller function if it is liked then
  // it will decrease the like count otherwise it will increase the like count
  // it will check first alreadey the post is like or not ? all thow it initial state is false
  const likeHandeller = () => {
    try {
      axios.put("http://localhost:8800/api/posts/" + post._id + "/like", {userId: currentUser._id });
    } catch (error) {}
    setLike(isLiked ? like - 1 : like + 1);
    // if like already exists then update the state
    setIsLiked(!isLiked);
  };

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <Link to={`profile/${user.username}`}>
              <img
                className='postProfileImg'
                src={
                  user.profilPicture ||
                  "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png"
                }
                alt=''
              />
            </Link>
            <span className='postUsername'>
              {/* // filter the username with  all individual posts */}
              {user.username}
            </span>
            <span className='postDate'>{format(post.createdAt)}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img
            className='postImg'
            src={post.img}
            alt=''
          />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            {isLiked ? (
              <ThumbUpAltRounded
                className='likeIcon'
                htmlColor='#f82097e1'
                onClick={likeHandeller}
              />
            ) : (
              <ThumbDownAltSharp
                ThumbUpAltRounded
                className='likeIcon'
                htmlColor='gray'
                onClick={likeHandeller}
              />
            )}
            {/* {isLiked? <TagFacesRoundedIcon  className="likeIcon" htmlColor='blue' onClick={happyHandeller}/>  : <SentimentDissatisfiedRoundedIcon ThumbUpAltRounded className="likeIcon"  htmlColor='gray' onClick={likeHandeller}/>} */}
            <span className='postLikeCounter'>{like} people like it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>
              {post.comment} people comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;
