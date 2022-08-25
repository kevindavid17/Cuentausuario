import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Detail = (props) => {
    const{id} = useParams();
    const [person, setPerson] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/user/${id}`)
        .then(res => setPerson({...res.data}))
        .catch(err => console.log(err))
    },[]);

    return(
        <div>
            <p>UserName: {person.userName} -- Email: {person.email}</p>
            <Link to={"/person/"+person._id + "/edit"}>Update</Link>
            <button onClick={e => {navigate('/people')}}>Home</button>
        </div>
    );
}

export default Detail;