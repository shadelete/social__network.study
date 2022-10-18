import React from "react";
import UsersAPIComponent from "./UsersAPIComponent";
import {connect} from "react-redux";
import {followedAC, unfollowedAC, setUserAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followedAC(id))
        },
        unfollow: (id) => {
            dispatch(unfollowedAC(id))
        },
        setUsers: (users) => {
            dispatch(setUserAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalCount: (count) => {
            dispatch(setTotalUsersCountAC(count))
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersAPIComponent)
