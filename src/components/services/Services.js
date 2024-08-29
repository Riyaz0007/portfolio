import React, { useState } from "react";
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import BorderAllSharpIcon from '@mui/icons-material/BorderAllSharp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Dialog from '@mui/material/Dialog';  // Import Dialog from Material-UI
import './services.css';

const Services = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <section>
                <h1 className="services-h">My Services</h1>
                <div className="seervices-m">
                    <div className="services-1">
                        <div>
                            <BorderAllSharpIcon />
                        </div>
                        <h3 className="services-inside-h">Frontend Development</h3>
                        <p className="service-desc">
                            I provide front-end development services focused on creating responsive, high-performance web applications using React to deliver exceptional user experiences on all devices.
                        </p>
                        <div className="view-div" onClick={handleClickOpen}>
                            <p className="view">View more</p>
                            <div className="arrow">
                                <ArrowForwardSharpIcon fontSize="small" />
                            </div>
                        </div>
                    </div>
                </div>

                <Dialog open={open} onClose={handleClose}>
                    <div className="modal-content">
                        <div className="modal-point">
                            <CheckCircleIcon fontSize="small" />
                            <p className="modal-content-desc">Ensuring all web applications are fully responsive, providing a seamless and consistent experience across all devices, from desktops to mobile phones.</p>
                        </div>
                        <div className="modal-point">
                            <CheckCircleIcon fontSize="small" />
                            <p className="modal-content-desc">Developing front-end applications with SEO best practices in mind, ensuring that content is easily discoverable by search engines and achieving higher visibility in search results.</p>
                        </div>
                        <div className="modal-point">
                            <CheckCircleIcon fontSize="small" />
                            <p className="modal-content-desc">Focusing on building scalable front-end solutions that can handle growth and increased traffic, ensuring the application's performance remains optimal as your business expands.</p>
                        </div>
                        <button className='modal-btn'onClick={handleClose}>Close</button>
                    </div>
                </Dialog>
            </section>
        </>
    );
};

export default Services;
