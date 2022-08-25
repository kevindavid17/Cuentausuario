import {useState} from 'react';
import axios from 'axios';

function UserForm(props){
    const {addToDom} = props;
    const [ userName, setUser ] = useState("");
    const [ email, setEmail ] = useState("");
    //variable de estado para mostrar mensaje de creacion
    const [statusCreation, setStatusCreation] = useState("");
    const [emailError, setEmailError] = useState("");
    const [userNameError, setUserNameError] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/user/new', {userName, email,statusCreation,emailError, userNameError})
            .then(res => {
                console.log(res);
                addToDom(res.data.insertedUser);
                setUser("");
                setEmailError("");
                setEmail("");
                setUserNameError("");
                setStatusCreation("User has been successfully created")
                
                
            })
            .catch(err => {

                const errorResponse = err.response.data.errors;
                if(Object.keys(errorResponse).includes('email')){
                    setEmailError(errorResponse['email'].message);
                    setStatusCreation("");
                }
                else{
                    setEmailError("");
                }

                if (Object.keys(errorResponse).includes('userName')){
                    setUserNameError(errorResponse['userName'].message);
                    setStatusCreation("");
                }
                else{
                    setUserNameError("");
            }
                
                //console.log('Peticion fallida', err));
            })
    }

    return(
        <form onSubmit={onSubmitHandler}>

            <label>Nombre de usuario: </label>
            <input type="text" name="user" onChange={(e) => setUser(e.target.value)}/>
            <p className='errorUser'>{userNameError}</p>
            <br/>
            <label>Email: </label>
            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
            <p className='errorEmail' >{emailError}</p>
            <br/>
            <input type="submit" value="Guardar" />
            <p className='msgCreacion'>{statusCreation}</p>

        </form>
    );
}

export default UserForm;