import {useState} from 'react';
import axios from 'axios';

function RegisterForm(props){
//    const {addToDom} = props;
    const [ password, setPassword ] = useState("");
    const [ email, setEmail ] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/account/new', {email, password, confirmPassword})
            .then(res => {
                console.log(res);
                //addToDom(res.data.insertedUser);
            })
            .catch(err =>               
                console.log('Peticion fallida', err));
    }

    return(
        <form onSubmit={onSubmitHandler}>

            <label>Email: </label>
            <input type="text" name="txtemail" onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <label>Password: </label>
            <input type="text" name="txtpassword" onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <label>Confirm Password: </label>
            <input type="text" name="txtconfirmpassword" onChange={(e) => setConfirmPassword(e.target.value)}/>
            <br/>
            <input type="submit" value="Registrar" />

        </form>
    );
}

export default RegisterForm;