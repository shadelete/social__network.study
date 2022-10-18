import React from "react";
import axios from "axios";
import Users from "./Users";
import {setUserAC} from "../../redux/users-reducer";

class UsersAPIComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.setUsers()
    }
    setUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items);
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
        return <Users
            totalUsers={this.props.totalUsers}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            changePage={this.changePage}
        />
    }
}

export default UsersAPIComponent;