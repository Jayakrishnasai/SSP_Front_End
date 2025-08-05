import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="app-header">
                <header className="header-container">
                    <h1>Shiva Sai's</h1>
                    <h1>Perseverance Software Training Institute</h1>
                </header>
                <div className="social-buttons" style={{ display: "flex", gap: "10px", position: "absolute", top: "5px", right: "10px" }}>
                    <a href="https://www.facebook.com/profile.php?id=61550316355738" target="_blank" rel="noopener noreferrer" className="social-button"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook" /></a>
                    <a href="https://www.instagram.com/perseverance_institute/" target="_blank" rel="noopener noreferrer" className="social-button"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="Instagram" /></a>
                    <a href="https://www.youtube.com/@persevcareers6577" target="_blank" rel="noopener noreferrer" className="social-button"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/YouTube_social_red_circle_%282017%29.svg/2048px-YouTube_social_red_circle_%282017%29.svg.png" alt="YouTube" /></a>
                </div>
            </header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <div className="dropdown">
                    <Link to="/contact" id="contact-dropdown-btn">Contact</Link>
                    <div className="dropdown-content">
                        <a href="#">7075505229</a>
                        <a href="#">7075506229</a>
                        <a href="mailto:persevcareers@gmail.com">Email us</a>
                    </div>
                </div>
                <Link to="/about">About us</Link>
            </nav>
        </>
    );
};

export default Header;
