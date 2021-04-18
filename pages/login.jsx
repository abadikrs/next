import React, {useState,useEffect, Component } from 'react';

const Login = () => {
    const  [name,setName] = useState("");
    const  [password,setPassword] = useState("");
        return (
            <div>
                <h1>Login Page</h1><br/>
                <input type="text" placeholder="username" onChange={e => {setName(e.target.value)}}/>{name}<br/>
                <input type="text" placeholder="password" onChange={e => {setPassword(e.target.value)}}/>{password}
            </div>
        );
}

export default Login