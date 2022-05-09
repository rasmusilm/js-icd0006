import React, {useContext, useState} from 'react';
import {AppContext} from "../state/AppContext";
import {IdentityContext} from "../state/IdentityContext";
import {IdentityService} from "../services/IdentityService";


const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    let identityState = useContext(IdentityContext);
    let identityService = new IdentityService();

    const register = async (name: string, email: string, password: string, repeatPassword: string) => {
        if (password === repeatPassword) {
            identityState.setJwt((await identityService.register(email, password, name)).data!)
        }
    }

    return (<div className="id-container">
        <div className="id-field">
            <input className="input-box" value={name} type="text" placeholder="Username"  onChange={(e) => setName(e.target.value)}/>
            <br />
            <input className="input-box" value={email} type="text" placeholder="email" id="login-username" onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <input className="input-box" value={password} type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <br />
            <input className="input-box" value={repeatPassword} type="password" placeholder="repeat password" onChange={(e) => setRepeatPassword(e.target.value)}/>
            <br />
            <input className="submit" type="submit" onClick={() => register(name, email, password, repeatPassword)}  defaultValue="Register"/>
        </div>
    </div>);
}


export default Register;