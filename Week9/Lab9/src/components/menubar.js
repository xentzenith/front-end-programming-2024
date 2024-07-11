import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link> | 
            <Link to="/login">Login</Link> | 
            <Link to="/register">Register</Link>
        </nav>
    );
};

export default MenuBar;