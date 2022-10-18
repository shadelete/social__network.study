import s from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <img src={props.avatar}></img>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogsItem;
