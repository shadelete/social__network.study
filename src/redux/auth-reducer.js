import {usersAPI} from "../api/api";

const SET_USER_DATA = 'FOLLOW';

let initialState = {
    userId: null,
    email: null,
    login: null,
    // isFetching: false,
    isAuth: false
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
        default: {
            return state;
        }
    }
}

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
                let {id,email,login} = res.data;
                dispatch(setUserData(id,email,login))
            }
        });
    }
}


export default authReducer;