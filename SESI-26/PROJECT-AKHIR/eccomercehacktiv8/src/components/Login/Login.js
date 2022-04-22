import React, {useRef, useState, useEffect, useContext,} from "react";
import AuthContext from "../../context/AuthProvider";

function Login({handleLoginSubmitted, username, password, setUsername, setPassword, success, setSuccess, errorMessage, setErrorMessage}){
//    const {setAuth} = useContext(AuthContext);
    return(
        <div className="container">
            <form className="d-flex flex-column" onSubmit={handleLoginSubmitted}>
            <div className="mb-3">
                <label for="username" className="form-label">Username</label>
                <input 
                type="text" 
                id="username"
                name="username"
                className="form-control" 
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div class="mb-3">
                <label for="" className="form-label">Password</label>
                <input 
                type="password" 
                id="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input type="submit" className="btn btn-primary" value="Login"/>
            </div>
            </form>
        </div>
    )
}


export default Login;