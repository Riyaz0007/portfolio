import React, { useState } from "react";
import './contact.css';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import emailjs from 'emailjs-com';




const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceID = 'service_ifry0he'; // Your service ID
        const templateID = 'template_hf9gtn5'; // Your template ID
        const publicKey = 'vgcZGBDik-aokyA2C';
        // const replyTemplateID = 'template_hf9gtn5'; 


        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        try {
            await emailjs.send(serviceID, templateID, templateParams, publicKey);
            // await emailjs.send(serviceID, replyTemplateID, templateParams, publicKey);

            alert('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send message.');
        }
    };
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
                        <form onSubmit={handleSubmit}>
                            <div className="name-div">
                                <label htmlFor="name" className="custom-label">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    autoComplete="new-password"
                                    placeholder="Enter your Name"
                                    className="custom-input"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="email-div">
                                <label htmlFor="email" className="custom-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="new-password"
                                    placeholder="Enter your email"
                                    className="custom-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="message-div">
                                <label className="description">Write your message here</label><br />
                                <textarea
                                    className='textarea'
                                    placeholder="Enter your text here"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="submit-btn">Submit now</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
