import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import authReducer, {setUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component{
    componentDidMount() {
        usersAPI.authMe().then(res => {
            if(res.resultCode === 0) {
                let {id,email,login} = res.data;
                this.props.setUserData(id,email,login)
            }
        });
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps,{setUserData})(HeaderContainer);