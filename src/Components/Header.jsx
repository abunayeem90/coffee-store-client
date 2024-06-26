import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/signup'}>Sign Up</NavLink>
            <NavLink to={'/signin'}>Sign in</NavLink>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/'}>Home</NavLink>
        </div>
    );
};

export default Header;