import React from "react";
import axios from "axios";

let Users = (props) => {

    if(props.users.length === 0) {

        axios.get("/db/data.json")
            .then(res => {
                props.setUsers(res.data.users)})
            .catch((err)=> console.log(err));

    }



    return (
        <div>
            {
                props.users.map(el =>
                    <div key={el.id} className="user-content">
                        <div className="user-photo">
                            <img src={el.photo}/>
                        </div>
                        <div>
                            <span>{el.name}</span>
                        </div>
                        <div>
                            <span>{el.status}</span>
                            <div>
                                <span>{el.location.country}</span>
                                <br/>
                                <span>{el.location.city}</span>
                            </div>
                        </div>
                        <div>
                            { el.followed
                                ? <button onClick={ () => props.unfollow(el.id)}>Unfollow</button>
                                : <button onClick={ () => props.follow(el.id)}>Follow</button>
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;