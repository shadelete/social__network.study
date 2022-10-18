import s from "./Friends.module.css";

const Friends = (props) => {
  return (
    <div className={s.friends__wrapper}>
      <div className={s.friend__list}>
        <p>{props.name}</p>
        <img src={props.avatar} alt="" />
      </div>
    </div>
  );
};

export default Friends;
