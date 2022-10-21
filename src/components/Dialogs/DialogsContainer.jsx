import s from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";
import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {Redirect} from "../Hoc/Redirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addNewMessage: () => {
      dispatch(addMessageActionCreator())
    },
    updateMessageText: (body) => {
      dispatch(updateNewMessageActionCreator(body))
    }
  }
}

export default compose(
    connect( mapStateToProps, mapDispatchToProps ),
    Redirect
)(Dialogs);
