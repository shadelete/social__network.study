import {usersAPI} from "../api/api";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

let initialState = {
    postData: [
        { id: 1, message: "post 1", likesCount: 2 },
        { id: 2, message: "post 2", likesCount: 9 },
        { id: 3, message: "post 3", likesCount: 6 },
        { id: 4, message: "post 4", likesCount: 2 },
        { id: 5, message: "post 5", likesCount: 34 },
        { id: 6, message: "post 6", likesCount: 1 },
        { id: 7, message: "post 7", likesCount: 7 },
    ],
    newPostText: '',
    profileData: null,
    profileStatus: null
};

const profileReducer = (state = initialState, action) => {
    // debugger
    let stateCopy;
    switch (action.type) {
        case ADD_POST:
            let body = state.newPostText
            stateCopy = {
                ...state,
                newPostText: '',
                postData:[...state.postData, {id:8,message: body, likesCount:0}]
            }
            return stateCopy;
        case UPDATE_NEW_POST_TEXT: {
            stateCopy = {
                ...state,
                newPostText: action.newText
            }
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            stateCopy = {
                ...state, profileData: action.profileData
            }
            return stateCopy;
        }
        case SET_PROFILE_STATUS: {
            stateCopy = {
                ...state, profileStatus: action.profileStatus
            }
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profileData) => ({ type: SET_USER_PROFILE, profileData: profileData});
export const setUserStatus = (profileStatus) => ({
    type: SET_PROFILE_STATUS,
    profileStatus: profileStatus
});


export const updateNewPostActionCreator = (n) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: n
    }
}

export const getProfileStatus = (id) => (dispatch) => {
        profileAPI.getStatus(id).then(res => {
            dispatch(setUserStatus(res))
        });
}

export const putProfileStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status);
    dispatch(setUserStatus(status));
}

export const getProfileThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(res => {
            dispatch(setUserProfile(res))
        });
    }
}

export default profileReducer;