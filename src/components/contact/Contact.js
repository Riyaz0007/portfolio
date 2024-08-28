import React from "react";
import './contact.css';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
const Contact = () => {
    return (
        <>
            <section className="contact">
                <h1 className="contact-head">Get In touch</h1>
                <div className="mainc">

                    <div className="leftc">
                        <h1 className="inner-head">Let's talk</h1>
                        <p className="para">I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                        <div className="email-div">
                            <span><EmailIcon fontSize="large" /></span>
                            <span className="details">riyazwahab321@gmail.com</span>

                        </div>
                        <div className="phone-div">
                            <span><PhoneIcon fontSize="large" /></span>
                            <span className="details">+91 8106369757</span>

                        </div>
                        <div className='location-div'>
                            <span><LocationOnIcon fontSize="large" /></span>
                            <span className="address">Hyderabad,India</span>

                        </div>


                    </div>
                    <div className="rightc">
                        <div className="name-div">
                            <label for="name" className="custom-label">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your Name" className="custom-input" />
                        </div>
                        <div className="email-div">
                            <label for="email" className="custom-label">Email</label>
                            <input type="text" id="email" name="email" placeholder="Enter your email" className="custom-input" />
                        </div>
                        <div className="message-div">
                            <label className="description">Write your message here</label><br />
                            <textarea className='textarea'placeholder="Enter your text here" />
                        </div>
                        <button className="submit-btn">Submit now</button>

                    </div>

                </div>
            </section>

        </>
    )
}
export default Contact;