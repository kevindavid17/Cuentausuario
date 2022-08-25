import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserList = (props) => {
    const {people, RemoveFromDom} = props;

    const DeleteUser = (userId) => {
        axios.delete(`http://127.0.0.1:8000/api/user/${userId}`)
        .then(res => {
            RemoveFromDom(userId)
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            {
            people.map(
                (user,ind) => {
                    return (
                        <div key={ind}>
                            <Link to={"/person/"+user._id} key={ind}>{user.userName} -- {user.email}</Link> 
                            <button onClick={(e)=>{DeleteUser(user._id)}}>Delete</button>
                            <br/><hr/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default UserList;