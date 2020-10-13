import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import React from 'react';
import "./Login.css";

function Login() {

    const signIn = () =>{

        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
    return (
        <div className="login" >
            <h2> This is the login page</h2>
            
            <div className="login__logo">
                <img src="https://img1.pnghut.com/4/17/19/ELNtsTLsD8/nexus-mods-blue-mammal-text-discord.jpg" alt="https://img1.pnghut.com/4/17/19/ELNtsTLsD8/nexus-mods-blue-mammal-text-discord.jpg"/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
};

export default Login;
