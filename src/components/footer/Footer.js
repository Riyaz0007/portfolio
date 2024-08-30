import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

import './footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer">
                    <hr style={{ width: '100%' }} />
                    <div className="footer-m">
                        <div className="footer-l">
                            <span>&copy; 2024 Mohammad Riyaz. All Rights Reserved</span>
                        </div>
                        <div>
                            <span className="footer-icon-l">
                                <a href="https://www.linkedin.com/in/md-riyaz-947a4b1b0" target="_blank" rel="noopener noreferrer" className="footer-link">
                                    <LinkedInIcon fontSize="large" />
                                </a>
                            </span>
                            <span className="footer-icon-g">
                                <a href="https://github.com/Riyaz0007" target="_blank" rel="noopener noreferrer" className="footer-link">
                                    <GitHubIcon fontSize="large" />
                                </a>
                            </span>
                            <span className="footer-icon-i">
                                <a href="https://www.instagram.com/mohammad_riyaz" target="_blank" rel="noopener noreferrer" className="footer-link">
                                    <InstagramIcon fontSize="large" />
                                </a>
                            </span>
                        </div>
                        <div className="footer-r">
                            <span className="terms">Terms of Services</span>
                            <span>Privacy Policy</span>   
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
