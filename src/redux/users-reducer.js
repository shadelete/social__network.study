import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW: {
            return  {
                ...state,
                users: state.users.map(n => {
                    if(n.id === action.id){
                        return {...n,followed: true}
                    }
                    return n;
                })
            }
        }
        case UNFOLLOW: {
            return  {
                ...state,
                users: state.users.map(n => {
                    if(n.id === action.id){
                        return {...n,followed: false}
                    }
                    return n
                })
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsers: action.totalUsers}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {...state, followingInProgress: action.followingInProgress
                    ?  [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id!=action.userId)
            }
        }
        default: {
            return state;
        }
    }
}

export const follow = (id) => ({type: FOLLOW, id: id})
export const unfollow = (id) => ({type: UNFOLLOW, id: id})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalCount = (count) => ({type: SET_TOTAL_USERS_COUNT, totalUsers: count})
export const setIsFetching = (boolean) => ({type: TOGGLE_IS_FETCHING, isFetching: boolean})
export const setFollowingInProgress = (boolean,userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress: boolean, userId: userId})

export const getUsersThunkCreator = (currentPage,pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        usersAPI.getUsers(currentPage,pageSize).then(res => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(res.items));
            dispatch(setTotalCount(res.totalCount));
            dispatch(setCurrentPage(currentPage));
        })};
}

export const unfollowThunk = (id) => {
    return (dispatch) => {
        dispatch(setFollowingInProgress(true,id))
        usersAPI.unFollow(id).then(res => {
            if(res.resultCode === 0){
                dispatch(unfollow(id))
            }
            dispatch(setFollowingInProgress(false,id))
        })
}}

export const followThunk = (id) => {
    return (dispatch) => {
        dispatch(setFollowingInProgress(true,id))
        usersAPI.follow(id).then(res => {
            if(res.resultCode === 0){
                dispatch(follow(id))
            }
            dispatch(setFollowingInProgress(false,id))
        })
    }}


export default usersReducer;