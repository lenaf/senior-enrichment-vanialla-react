import React from 'react';

export default function Navbar(props) {

    return (
        <nav id='nav' className="navbar navbar-inverse bg-primary">
            <ul className ="nav navbar-nav navbar-left">
                <li><a className="nav-item color-me" href="#about">Home</a></li>
                <li><a href="#contact">Students</a></li>
            </ul>
        </nav>
    );
}
