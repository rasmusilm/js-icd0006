import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {IdentityContext} from "../../state/IdentityContext";


const Identity = () => {
    let identityState = useContext(IdentityContext);

    if (identityState.jwt) {
        return (<span className="identity">
        <li>
            <span className="nav-item" onClick={() => identityState.setJwt(undefined)}>Logout</span>
        </li>
    </span>
        )
    } else {
        return (<span className="identity">
        <li>
          <Link to="/register" className="nav-item">Register</Link>
        </li>
        <li>
            <Link to="/login" className="nav-item">Login</Link>
        </li>
        </span>)
    }

}


const Navbar = () => (
<nav>
    <ul className="navigation-list">
        <li>
            <Link to="/" className="nav-item">Home</Link>
        </li>
        <li>
            <Link to="/about" className="nav-item">About</Link>
        </li>
        {Identity()}
    </ul>
</nav>
)

export default Navbar;