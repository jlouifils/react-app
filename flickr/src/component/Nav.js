import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to="/looneytunes">Looney Tunes</NavLink></li>
            <li><NavLink to="/boondocks">Boondocks</NavLink></li>
            <li><NavLink to="/graffiti">Graffiti</NavLink></li>
        </ul>
    </nav>
);

export default Nav;
