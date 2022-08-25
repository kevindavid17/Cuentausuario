import UserForm from "../Components/UserForm"
import { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../Components/UserList";
const Main = () =>{
    const [people, setPeople] = useState([])

    useEffect(
        ()=>{
            axios.get('http://127.0.0.1:8000/api/users')
            .then(res => {
                setPeople(res.data)
            })
        },[]);

        const RemoveFromDom = (userId) => {
            setPeople(people.filter(person => person._id!==userId));
        }
        const addToDom = (newUser) => {
            setPeople([...people, newUser]);
        }

    return(
        <div>
            <UserForm addToDom={addToDom}></UserForm>
            <hr />
            <UserList people ={people} RemoveFromDom={RemoveFromDom}></UserList>
        </div>
    );
}

export default Main;