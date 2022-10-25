import {usersAPI,loginAPI} from "../api/api";

const SET_USER_DATA = 'FOLLOW';
const LOGIN = 'LOGIN';

let initialState = {
    userId: null,
    email: null,
    login: null,
    // isFetching: false,
    isAuth: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA: {
            return  {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case LOGIN: {
            return  {
                ...state,
                userId: action.userId,
                isAuth: true
            }
        }
        default: {
            return state;
        }
    }
}

export const logIn = (userId) => ({
    type: LOGIN,
    data: {
        userId: userId
    }
})

export const setUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: {
        userId: userId,
        email: email,
        login: login
    }
})

export const authMeThunk = () => {
    return (dispatch) => {
        usersAPI.authMe().then(res => {
            if(res.resultCode === 0) {
                let {userId, email, login} = res.data;
                dispatch(setUserData(userId, email, login))
            }
        });
    }
}

export const loginThunk = (email,pass,rememberMe) => {
    return (dispatch) => {
        loginAPI.login(email,pass,rememberMe).then(res => {
            if(res.resultCode === 0) {
                dispatch(logIn(res.data))
                usersAPI.authMe().then(res => {
                    if(res.resultCode === 0) {
                        let {userId, email, login} = res.data;
                        dispatch(setUserData(userId, email, login))
                    }
                });
            }
        });
    }
}

export const logoutThunk = () => {
    return (dispatch) => {
        loginAPI.logout().then(res => {
            debugger
            if(res.resultCode === 0) {
                dispatch(setUserData(null,null,null))
            }
        });
    }
}


export default authReducer;