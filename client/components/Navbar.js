import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    return (
        <nav id='nav' className="navbar navbar-inverse bg-primary">
            <ul className="nav navbar-nav navbar-left">
                <li><a className="nav-item color-me" href="/campuses">Home</a></li>
                <li><a href="/students">Students</a></li>
            </ul>
        </nav>
    );
}
