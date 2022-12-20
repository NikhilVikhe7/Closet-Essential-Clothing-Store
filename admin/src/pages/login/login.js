import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/apiCalls";
import redirect from "react-router-dom/es/Redirect";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleClick = (e)=>{
        e.preventDefault();
        login(dispatch, {username, password});

    }

    return (
        <div style={{display:"flex", alignItems:"center",justifyContent:"center",height:"100vh",flexDirection:"column", gap:"15px"}}>
            <input type={"text"} placeholder={"username"} onChange={event => setUsername(event.target.value)}/>
            <input type={"password"} placeholder={"password"} onChange={event => setPassword(event.target.value)}/>
            <button style={{padding:"10px", width:"100px"}} onClick={handleClick}>Login</button>
        </div>

    );
};

export default Login;