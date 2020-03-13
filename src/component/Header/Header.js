import React from 'react';
import './Header.css';
import Logo from '../../images/Logo.png';

const Header = () => {
    return (
        <div className="Header">
            <div className="Logo">
                <img src={Logo} alt="Website Logo"/>
            </div>
            <nav className="navBar">
                <a href="/Home">Home</a>
                <a href="/Profile">Profile</a>
                <a href="/Friends">Friends</a>
            </nav>
        </div>
    );
};

export default Header;