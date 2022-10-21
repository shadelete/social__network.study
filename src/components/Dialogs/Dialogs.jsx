import s from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {
  let messageBody = props.dialogPage.newMessageText;

  let dialogsElements = props.dialogPage.dialogsData.map((elem) => (
    <DialogsItem name={elem.name} key={elem.id} avatar={elem.avatar} />
  ));

  let messegesElements = props.dialogPage.messageData.map((elem) => (
    <Message message={elem.message} key={elem.id} />
  ));

  let newMessageText = React.createRef();

  let addNewMessage = () => {
    props.addNewMessage()
  }

  let updateMessageText = () => {
    let text = newMessageText.current.value;
    props.updateMessageText(text)
  }

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>
          {messegesElements}
          <textarea onChange={updateMessageText} ref={newMessageText} value={messageBody}></textarea>
          <button onClick={addNewMessage}>push</button>
          </div>
      </div>
    </div>
  );
};

export default Dialogs;
