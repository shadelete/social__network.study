import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";
import {setFollowingInProgress, unfollowThunk} from "../../redux/users-reducer";

let Users = (props) => {
    // debugger
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let cr = props.currentPage
    let p_cr = cr + 2
    let m_cr = cr - 3
    let slice_cr = cr > 2 ? pages.slice(m_cr, p_cr) : pages.slice(0, 5)
    return (
        <div>
            <div>
                {slice_cr.map(el => {
                    return <span className={props.currentPage === el && "select"} onClick={() => {
                        props.changePage(el) }}>{el}</span>
                })}
            </div>
            {
                props.users.map(el =>
                    <div key={el.id} className="user-content">
                        
                        <div className="user-photo">
                            
                            <NavLink to={'/profile/' + el.id}>
                                <img src={el.photos}/>
                            </NavLink>
                            
                        </div>
                        
                        <div>
                            <span>{el.name}</span>
                        </div>
                        <div>
                            <span>{el.status}</span>
                            {/*<div>*/}
                            {/*    <span>{el.location.country}</span>*/}
                            {/*    <br/>*/}
                            {/*    <span>{el.location.city}</span>*/}
                            {/*</div>*/}
                        </div>
                        <div>
                            {el.followed
                                ?
                                <button id={el.id} disabled={props.followingInProgress.some(id => id===el.id)} onClick={()=>{
                                    props.unfollowThunk(el.id)
                                }}>Unfollow</button>
                                :
                                <button disabled={props.followingInProgress.some(id => id===el.id)} onClick={()=>{
                                    props.followThunk(el.id)
                                }}>Follow</button>
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;