import React from 'react';

const Footer = () => {
    return (
        <div className="enroll-follow">
            {/* Enroll Now Section */}
            <div className="enroll-now">
                <h3 style={{ color: "#fff", fontSize: "35px" }}>Ready to start your Journey ?</h3>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfHmHRFGU4ZkpsoFYM-gNKrPB4cXeDfpmxNvyE2iY-lZ9PcYg/viewform" className="enroll-btn" target="_blank" rel="noopener noreferrer">Enroll Now</a>
            </div>
            {/* Follow Us Section */}
            <div id="follow-us-section">
                <h3>Follow Us</h3>
                <div className="social-buttons">
                    <a href="https://www.facebook.com/profile.php?id=61550316355738" target="_blank" rel="noopener noreferrer" className="social-button"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook" /></a>
                    <a href="https://www.instagram.com/perseverance_institute/" target="_blank" rel="noopener noreferrer" className="social-button"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="Instagram" /></a>
                    <a href="https://www.youtube.com/@persevcareers6577" target="_blank" rel="noopener noreferrer" className="social-button"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/YouTube_social_red_circle_%282017%29.svg/2048px-YouTube_social_red_circle_%282017%29.svg.png" alt="YouTube" /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
