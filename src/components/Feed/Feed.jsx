import React from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./feed.scss";
import { Posts } from "../../TemporaryDataForTest";

function Feed() {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {Posts.map((p)=>(
          <Post key={p.id} post={p} />  
        ))}
        {/* <Post post={Posts[0]} /> */}  
      </div>
    </div>
  );
}
export default Feed;
