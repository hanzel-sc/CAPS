import React from "react";
import "./signupmodal.css";

function SignUpModal({ isOpen, onClose }) {
    if (!isOpen) return null; 

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h2>Sign-Up</h2>
                <form className="signup-form">
                    <label>
                        Name:
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Register Number:
                        <input type="text" name="register" required />
                    </label>
                    <label>
                        Class:
                        <input type="text" name="class" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        Select a wing you'd like to be a part of:
                        <select name="options" required>
                            <option value="" disabled selected>
                                
                            </option>
                            <option value="Option 1">Tech Tank</option>
                            <option value="Option 2">Operations</option>
                            <option value="Option 3">Media and PR</option>
                            <option value="Option 4">Peer Training</option>
                        </select>
                    </label>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUpModal;
