import React from "react";
import {connect} from "react-redux";
import {
    followedAC,
    unfollowedAC,
    setUserAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setIsFetchingAC
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.setUsers()
    }
    setUsers = () => {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items);
            this.props.setIsFetching(false);
            this.totalPageCount(res.data.totalCount);
            this.props.setTotalCount(res.data.totalCount);
        });
    }
    changePage = (p) => {
        this.props.setCurrentPage(p)
        this.setUsers()

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
        isFetching: state.usersPage.isFetching
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
        },
        setIsFetching: (boolean) => {
            dispatch(setIsFetchingAC(boolean))
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)
