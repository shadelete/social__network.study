import React from "react";
import axios from "axios";
import Users from "./Users";
import {followedAC, setCurrentPageAC, unfollowedAC} from "../../redux/users-reducer";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items);
            this.totalPageCount(res.data.totalCount);
            this.props.setTotalCount(res.data.totalCount);
        });
    }
    // _getUsers(p) {
    //     // debugger
    //
    // }
    changePage(p) {
        // debugger
        this.props.setCurrentPage(p)
        // this._getUsers(p)
    }
    totalPageCount = (p) => {
        return p
    }
    setTotalCount = (n) => {
        return n
    }
    render() {
        return <Users state={this.throwProps()}/>
    }
    throwProps() {
        return {
            totalUsers: this.props.totalUsers,
            pageSize: this.props.pageSize,
            currentPage: this.props.currentPage,
            users: this.props.users,
            unfollow: this.props.unfollow,
            follow: this.props.follow,
            changePage: this.changePage
        }
    }

}

export default UsersAPIComponent;