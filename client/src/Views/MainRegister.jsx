import RegisterForm from "../Components/RegisterForm"
import { useEffect, useState } from "react";
import axios from "axios";

const MainRegister = () =>{
    const [accounts, setAccounts] = useState([])

    useEffect(
        ()=>{
            axios.get('http://127.0.0.1:8000/api/accounts')
            .then(res => {
                setAccounts(res.data)
            })
        },[]);

        /*const addToDom = (newUser) => {
            setPeople([...people, newUser]);
        }*/

    return(
        <div>
            <RegisterForm accounts ={accounts} ></RegisterForm>
        </div>
    );
}

export default MainRegister;