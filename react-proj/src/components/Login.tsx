import React, {useContext, useState} from 'react';
import '../style/Login.css';
import {AppContext} from "../state/AppContext";
import {IdentityService} from "../services/IdentityService";
import {IdentityContext} from "../state/IdentityContext";
import {Navigate} from "react-router-dom";
import Home from "./Home";

const Login = () => {
    const [email, setEmail] = useState("rasmus.ilmjarv@gmail.com");
    const [password, setPassword] = useState("Hea.Parool.1");
    let appState = useContext(AppContext);
    let identityState = useContext(IdentityContext);
    let identityService = new IdentityService();

    const reroute = () => {
        if (identityState.jwt) {
            return (<Navigate to="/"/>);
        }
    }

    return(
        <>
            <div className="id-container">
                <div style={{color: "#ffffff"}}>{appState.name}</div>
                <div style={{color: "#ffffff"}}>{identityState.jwt?.token}</div>
                <div style={{color: "#ffffff"}}>{identityState.jwt?.refreshToken}</div>
                <div className="id-field">
                    <div className="input-container">
                        <label className="input-label" htmlFor="Email">Email</label>
                        <input value={email} className="input-box" type="text" onChange={(e) => {setEmail(e.target.value)}} />
                    </div>
                    <div className="form-group">
                        <label className="input-label" htmlFor="Password">Password</label>
                        <input value={password} className="input-box" type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>
                    <div>
                        <input type="submit" value="Login" className="submit" onClick={(e) =>{
                            identityService
                            .login(email, password).then(serviceResult => {
                                console.log(serviceResult.data!)
                                identityState.setJwt(serviceResult.data!)
                            })
                        }}/>
                    </div>
                    <div>
                        {reroute()}
                    </div>
                </div>
            </div>
        </>
)};

export default Login;