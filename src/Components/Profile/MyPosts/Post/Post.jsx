import React from 'react';
import { count } from 'rxjs';
import s from './Post.module.css';

const Post = (props) => {

  // debugger 
  return (
    <div>
      <div className={s.item}>
        <img src='https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'></img>
        {props.message}
        <br />
        <span>like {props.count}</span>
      </div>
   
  </div>
  )
}

export default Post;
