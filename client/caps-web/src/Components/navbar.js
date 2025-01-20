import React from 'react';
import './navbar.css';

function Navbar({onSignUpClick}){
    return(
        <nav className="navbar">
            <ul className="navlist">
                <li><a href="">Home</a></li>
                <li><a href="#main-section">About</a></li>
                <li><a href="#card-section">Wings</a></li>
                <li><a href="#events-section">Events</a></li>
                <li><a href="#signup" onClick={(e) => {
                    e.preventDefault();
                    onSignUpClick();
                }}>Sign-Up</a>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;