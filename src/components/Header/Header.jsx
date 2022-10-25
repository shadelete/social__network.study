import s from'./Header.module.css'
import {NavLink} from "react-router-dom";
import {useState} from "react";

const Header = (props) => {
    // debugger
    return (
        <header className={s.header}>
            <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"/>
            <div className={s.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                <NavLink onClick={()=> {props.logout()}} to={'/login'}>logout</NavLink>
                {/*{ props.isAuth ? <NavLink onClick={()=> {props.logout()}} to={'/login'}>Logout</NavLink> : <NavLink to={'/login'}>Login</NavLink>}*/}
            </div>
        </header>
    );
}

export default Header;