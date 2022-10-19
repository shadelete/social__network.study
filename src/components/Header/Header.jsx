import s from'./Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    // debugger
    return (
        <header className={s.header}>
            <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"/>
            <div className={s.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;