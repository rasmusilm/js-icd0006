import React from 'react';


const Identity = () => {
    if (false) {
        return (<span className="identity">
        <li>
            <span className="nav-item">Logout</span>
        </li>
    </span>
        )
    } else {
        return (<span className="identity">
        <li>
          <a href="/register" className="nav-item">Register</a>
        </li>
        <li>
          <a className="nav-item" href="/login">Login</a>
        </li>
        </span>)
    }

}


const Navbar = () => (
<nav>
    <ul className="navigation-list">
        <li>
            <a href="/feed" className="nav-item">Home</a>
        </li>
        <li>
            <a href="/about" className="nav-item">About</a>
        </li>
        {Identity()}
    </ul>
</nav>
)

export default Navbar;