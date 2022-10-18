import s from "./MyPosts.module.css";
import Post from "./Post/Posts";
import React from "react";
import { updateNewPostActionCreator, addPostActionCreator } from "../../../redux/profile-reducer";


const MyPosts = (props) => {
  
  let postsElements = props.posts.map(elem => <Post key={elem.id} message={elem.message} count={elem.likesCount} />);
  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost()
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
      props.updateNewPostText(text)
  }

  return (
    <div className={s.postsBlock}>
      my posts
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
