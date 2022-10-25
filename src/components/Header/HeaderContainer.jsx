import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import authReducer, {authMeThunk, logoutThunk, setUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";
// import {Redirect} from "../Hoc/Redirect";

class HeaderContainer extends React.Component{
    componentDidMount() {
        // this.props.authMeThunk()
    }
    logout = () => {
        debugger
        this.props.logoutThunk()
    }
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps,{setUserData,authMeThunk,logoutThunk})(HeaderContainer);