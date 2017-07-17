import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
	<nav id='nav' className="navbar navbar-inverse bg-primary">
		<ul className="nav navbar-nav navbar-left">
			<li><Link className="nav-item color-me" to="/campuses">Home</Link></li>
			<li><Link to="/students">Students</Link></li>
		</ul>
	</nav>
)

