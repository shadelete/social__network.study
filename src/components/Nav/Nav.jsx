import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import {connect} from "react-redux";

const activeNav = (navData) => (navData.isActive ? s.active : s.item);

const Navi = (props) => {
  let friendMap = props.friendMap.map(el => <Friends key={el.id} name={el.name} avatar={el.avatar}/>);
  return (
    <nav className={s.nav}>
      <div className={`${s.nav__item} ${s.nav__item_hover}`}>
        <NavLink className={activeNav} to="/profile">
          Profile
        </NavLink>
      </div>
        <div className={`${s.nav__item} ${s.nav__item_hover}`}>
            <NavLink className={activeNav} to="/users">
                Users
            </NavLink>
        </div>
      <div className={`${s.nav__item} ${s.nav__item_hover}`}>
        <NavLink className={activeNav} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div className={`${s.nav__item} ${s.nav__item_hover}`}>
        <NavLink className={activeNav} to="/news">
          News
        </NavLink>
      </div>
      <div className={`${s.nav__item} ${s.nav__item_hover}`}>
        <NavLink className={activeNav} to="/music">
          Music
        </NavLink>
      </div>
      <div className={`${s.nav__item} ${s.nav__item_hover}`}>
        <NavLink className={activeNav} to="/settings">
          Settings
        </NavLink>
      </div>
      <div className={s.nav__friends}>
        {friendMap}
      </div>
    </nav>
  );
};

let mapStateToProps = (state) => {
    return {
        friendMap: state.sidebarData.friendsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const Nav = connect( mapStateToProps, mapDispatchToProps )(Navi)

export default Nav;
