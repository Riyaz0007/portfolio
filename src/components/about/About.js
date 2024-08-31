import React, { useState } from "react";
import './about.css';
import image from '../assest/my-image.jpg';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import resume from '../assest/riyaz_profile--1.pdf';
import { Modal, Box, Typography, IconButton } from '@mui/material'; // Import MUI components
import CloseIcon from '@mui/icons-material/Close';

const About = () => {
    // State to manage modal visibility
    const [open, setOpen] = useState(false);

    // Functions to open and close the modal
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Style for MUI Modal box
    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        p: 4,
    };

    return (
        <>
            <section className='skill'>
                <h1 className='heading'>About Me</h1>
                <div className='main'>
                    <div className='left-section'>
                        <img src={image} alt='this is section pic' />
                    </div>

                    <div className='right-section'>
                        <div className='about-section'>
                            <div className='about-internal'>
                                <div className='icon'>
                                    <WorkOutlineIcon />
                                </div>
                                <h3 className='about-title'>Experience</h3>
                                <p className='about-desc'>1 Year 2 Months Working</p>
                            </div>
                            <div className='about-internal'>
                                <div className='icon'>
                                    <FolderOpenIcon />
                                </div>
                                <h3 className='about-title'>Completed</h3>
                                <p className='about-desc'>+ Projects</p>

                                {/* Trigger Modal on Click */}
                                <div className="view-projects" onClick={handleOpen}>
                                    <span className="view-text">View Projects</span>
                                    <ArrowForwardIcon className="forward-arrow" />
                                </div>
                            </div>
                        </div>

                        <p className='desc'>Skilled Front-End Developer with expertise with 1+ years experience in React.js, dedicated to creating responsive,
                            config driven UI and user-friendly web applications. Experienced in state management, API integration, and
                            collaborating with cross-functional teams. Seeking to contribute to a dynamic team by delivering high-quality,
                            scalable solutions that enhance user experience.</p>
                        <button className='resume-btn'>
                            <a href={resume} download='riyaz_profile--1.pdf' className='cv-link'>My resume</a>
                        </button>
                    </div>
                </div>
            </section>

            {/* MUI Modal Component */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <IconButton 
                        aria-label="close" 
                        onClick={handleClose} 
                        sx={{ position: 'absolute', top: 8, right: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className="project-heading">
                        Project Details
                    </Typography>
                    <Typography variant="subtitle1" className='project-heading'>
                        Chat BTT Application
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1, mb: 2 }}>
                        <ul>
                            <li>Developed React components for various features including image querying, dynamic query generation, PDF summarization, and internet-based inquiries.</li>
                            <li>Implemented a sidebar in React to display the history of asked questions in the chatbot interface.</li>
                            <li>Ensured interactive features such as adding, deleting, and editing questions directly from the sidebar.</li>
                            <li>Implemented dynamic UI components and functionalities based on real-time data fetched from backend APIs.</li>
                        </ul>
                    </Typography>
                    <Typography variant="subtitle1"   className='project-heading'>
                        Auto ML Application
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                        <ul>
                            <li>Developed reusable React components for forms, tables, charts, and input fields.</li>
                            <li>Integrated Axios or Fetch API for making HTTP requests to backend RESTful APIs.</li>
                            <li>Integrated charting libraries (D3.js, Chart.js, React-vis) for data visualization.</li>
                            <li>Implemented file upload functionalities and managed file handling operations, including uploading files from S3 URLs.</li>
                            <li>Optimized React component performance and collaborated for deployment with backend and DevOps teams.</li>
                        </ul>
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};

export default About;
