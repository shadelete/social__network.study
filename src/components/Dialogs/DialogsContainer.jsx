import s from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";
import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage
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

const DialogsContainer = connect( mapStateToProps, mapDispatchToProps )(Dialogs)

export default DialogsContainer;
