import React from 'react';
import './navbar.css';

function Navbar(){
    return(
        <nav className='navbar'>
            <ul className="navlist">
                <li><a href="">Home</a></li>
                <li><a href="#main-section">About</a></li>
                <li><a href="#card-section">Wings</a></li>
                <li><a href="#events-section">Events</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;