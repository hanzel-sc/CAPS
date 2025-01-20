import React, { useState } from "react";
import './header.css';
import Navbar from './navbar';
import SignUpModal from "./signupmodal";
function Header() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return(
        <header className = "header">
            <div className="header-container">
                <img className="logo" src = "l9.png" alt="CAPS logo"></img>
                <h1>CAPS</h1> 
                <Navbar onSignUpClick={openModal}/>   
                <SignUpModal isOpen={isModalOpen} onClose={closeModal}/>        
            </div>
            
        </header>
    );
}
export default Header;