import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

import './footer.css'
const Footer = () =>{
    return(
        <>
        <footer>
            <div className="footer">
                <hr style={{width:'100%'}}/>
                <div className="footer-m">
                <div className="footer-l">
                <span>&copy; 2024 Mohammad Riyaz. All Rights reserved</span>
                </div>
                <div>
                    <span className="footer-icon-l"><LinkedInIcon fontSize="large"/></span>
                    <span className="footer-icon-g"><GitHubIcon fontSize="large"/></span>
                    <span className="footer-icon-i"><InstagramIcon fontSize="large"/></span>
                    </div>
                <div className="footer-r">
                    <span className="terms">terms of services</span>
                    <span>Privacy Policy</span>   
                    
                </div>
                
                </div>
                







            </div>
        </footer>
        
        </>
    )
}
export default Footer;