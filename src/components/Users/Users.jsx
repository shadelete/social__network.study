import React from "react";

let Users = (props) => {
    debugger
    let pagesCount = Math.ceil(props.state.totalUsers / props.state.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let cr = props.state.currentPage

    let p_cr = cr + 2
    let m_cr = cr - 3
    let slice_cr = cr > 2 ? pages.slice(m_cr, p_cr) : pages.slice(0, 5)
    return (
        <div>
            <div>

                {slice_cr.map(el => {
                    return <span className={props.state.currentPage === el && "select"} onClick={() => {
                        props.state.changePage(el)
                    }
                    }>{el}</span>
                })}
                {/*<span>   of {pagesCount}</span>*/}
            </div>
            {
                props.state.users.map(el =>
                    <div key={el.id} className="user-content">
                        <div className="user-photo">
                            <img src={el.photos}/>
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
                                ? <button onClick={() => props.state.unfollow(el.id)}>Unfollow</button>
                                : <button onClick={() => props.state.follow(el.id)}>Follow</button>
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;