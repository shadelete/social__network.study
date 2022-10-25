import React, {Component} from 'react';
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-reducer";
import Login from "./Login";

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }
    methodLogin = (email,pass,rememberMe) => {
        this.props.loginThunk(email,pass,rememberMe)
    }
    render() {
        return (
            <Login login={this.methodLogin}/>
        );
    }
}

export default connect(null,{loginThunk})(LoginContainer);