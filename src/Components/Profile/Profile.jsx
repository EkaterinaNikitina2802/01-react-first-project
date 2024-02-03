import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";



const Profile = (props) => {
debugger


  return (
    <div>
      <Profileinfo />
      <MyPosts postsData = {props.state.postsData} />
    </div>
  );
};

export default Profile;
