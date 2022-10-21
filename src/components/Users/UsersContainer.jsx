import React from "react";
import {connect} from "react-redux";
import {getUsersThunkCreator, followThunk, unfollowThunk} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {Navigate} from "react-router-dom";
import {Redirect} from "../Hoc/Redirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
    }
    changePage = (p) => {
        this.props.getUsersThunkCreator(p,this.props.pageSize)
    }
    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null }
        <Users
            totalUsers={this.props.totalUsers}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollowThunk={this.props.unfollowThunk}
            followThunk={this.props.followThunk}
            changePage={this.changePage}
            setFollowingInProgress={this.props.setFollowingInProgress}
            followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}



export default compose(
    connect(mapStateToProps, {
        getUsersThunkCreator,
        followThunk,
        unfollowThunk
    }),
    Redirect
)(UsersContainer)
