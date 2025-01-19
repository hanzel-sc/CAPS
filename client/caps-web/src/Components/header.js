import React from 'react';
import './header.css';
import Navbar from './navbar';

function Header(){
    return(
        <header className = "header">
            <div className="header-container">
                <img className="logo" src = "l9.png" alt="CAPS logo"></img>
                <h1>CAPS</h1> 
                <Navbar/>           
            </div>
            
        </header>
    );
}
export default Header;