import React from "react";
import './contact.css';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
    return (
        <>
            <section className="contact">
                <h1 className="contact-head">Get In Touch</h1>
                <div className="mainc">

                    <div className="leftc">
                        <h1 className="inner-head">Let's Talk</h1>
                        <p className="para">
                            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
                        </p>
                        <div className="email">
                            <a href="mailto:riyazwahab321@gmail.com" className="icon-link">
                                <div className="icon-div-e"><EmailIcon fontSize="large" /></div>
                            </a>
                            <p className="details">riyazwahab321@gmail.com</p>
                        </div>
                        <div className="phone-div">
                            <a href="tel:+918106369757" className="icon-link">
                                <div className="icon-div-p"><PhoneIcon fontSize="large" /></div>
                            </a>
                            <p className="details">+91 8106369757</p>
                        </div>
                        <div className='location-div'>
                            <a href="https://www.google.com/maps?q=Hyderabad,India" target="_blank" rel="noopener noreferrer" className="icon-link">
                                <div className="icon-div-m"><LocationOnIcon fontSize="large" /></div>
                            </a>
                            <p className="details">Hyderabad, India</p>
                        </div>
                    </div>
                    <div className="rightc">
                        <div className="name-div">
                            <label htmlFor="name" className="custom-label">Name</label>
                            <input type="text" id="name" name="name" autoComplete="new-password" placeholder="Enter your Name" className="custom-input" />
                        </div>
                        <div className="email-div">
                            <label htmlFor="email" className="custom-label">Email</label>
                            <input type="text" id="email" autoComplete="new-password" name="email" placeholder="Enter your email" className="custom-input" />
                        </div>
                        <div className="message-div">
                            <label className="description">Write your message here</label><br />
                            <textarea className='textarea' placeholder="Enter your text here" />
                        </div>
                        <button className="submit-btn">Submit now</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
