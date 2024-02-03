import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hi, how are you?", LilesCount: 12 },
    { id: 2, message: "Hello!!!", LilesCount: 11 },
    { id: 3, message: " Where are you", LilesCount: 16 },
    { id: 3, message: " haha", LilesCount: 3 },
  ];

  let postsElements = postsData.map(p => 
    <Post message={p.message} id={p.id} LilesCount={p.LilesCount} />
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
