import React from "react";
import { updateNewPostActionCreator, addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostActionCreator(text))
    }
  }
}

const MyPostsContainer = connect( mapStateToProps, mapDispatchToProps )(MyPosts)

export default MyPostsContainer;
