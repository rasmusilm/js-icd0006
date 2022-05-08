import React from 'react';
import '../style/Login.css';

const Login = () => (
    <div className="id-container">
        <div className="id-field">
            <div className="input-container">
                <label className="input-label" htmlFor="Email">Email</label>
                <input v-model="email" className="input-box" type="text" />
            </div>
            <div className="form-group">
                <label className="input-label" htmlFor="Password">Password</label>
                <input v-model="password" className="input-box" type="password" />
            </div>
            <div>
                <input type="submit" defaultValue="Login" className="submit" />
            </div>
        </div>
    </div>
);

export default Login;