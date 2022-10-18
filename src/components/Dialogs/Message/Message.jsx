import s from "../Dialogs.module.css";

const Message = (props) => {
  return (
    <div>
      <div className={s.dialog}></div>
      <div className={s.message}>{props.message}</div>
    </div>
  );
};

export default Message;
