import React, { useContext, useEffect, useState } from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./feed.scss";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
// dummy data
// import { Posts } from "../../TemporaryDataForTest";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("http://localhost:8800/api/posts/profile/" + username)
        : await axios.get("http://localhost:8800/api/posts/timeline/" + user._id);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username,user._id]);

  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {posts.map((p) => (
          <Post
            key={p._id}
            post={p}
          />
        ))}
      </div>
    </div>
  );
}
export default Feed;
