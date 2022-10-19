const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 1,
    isFetching: false
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

export default usersReducer;