import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.postsData.map(p => 
    <Post message={p.message} id={p.id} LikesCount={p.LikesCount} />
  );

  return (
    <div className={s.postsBlock}>
      <div>
        <h3> My posts </h3>
      </div>
      <div>
        <textarea></textarea>
        <br />
        <button> Add post </button>
      </div>
      <div className={s.posts}>
      {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
