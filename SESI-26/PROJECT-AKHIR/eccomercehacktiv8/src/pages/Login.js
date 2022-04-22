import { useState } from "react";
import CardLogin from "../components/Login/Login";
import {useNavigate} from "react-router-dom";
import axios from "../api/axios";

function Login(){
    const LOGIN_URL = "/auth/login";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState()
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleLoginSubmitted = (e) => {
        e.preventDefault();
        console.log(username, password)
        setSuccess(true);
        try {
            axios
            .post(LOGIN_URL,
            {
                username: username, 
                password: password
            }, {headers: {"Content-Type":"application/json"}}
            )
            .then((response) =>{
                console.log(response.status);
                console.log(response.data.token);
                localStorage.setItem("token",  `Bearer${response.data.token}`); 
                navigate("/products");
            })
            .catch((error) =>{
                console.log(error);
            })
        } catch (error) {
            console.log(error.message)
        }

    }

    return(
        <CardLogin 
        handleLoginSubmitted={handleLoginSubmitted}
        username={username}
        password={password}
        setUsername={setUsername} 
        setPassword={setPassword}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        setSuccess={setSuccess}/>
    )
}

export default Login;
