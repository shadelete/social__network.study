import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setIsFetching, setFollowingInProgress
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(res => {
            this.props.setUsers(res.items);
            this.props.setIsFetching(false);
            this.totalPageCount(res.totalCount);
            this.props.setTotalCount(res.totalCount);
        });
    }
    changePage = (p) => {
        this.props.setCurrentPage(p)
        this.props.setIsFetching(true)
        usersAPI.getUsers(p,this.props.pageSize).then(res => {
            this.props.setUsers(res.items);
            this.props.setIsFetching(false);
        });

    }
    totalPageCount = (p) => {
        return p
    }
    setTotalCount = (n) => {
        return n
    }
    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null }
        <Users
            totalUsers={this.props.totalUsers}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
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
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setIsFetching,
    setFollowingInProgress
})(UsersContainer)
