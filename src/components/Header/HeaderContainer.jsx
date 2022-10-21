import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import authReducer, {authMeThunk, setUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.authMeThunk()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps,{setUserData,authMeThunk})(HeaderContainer);