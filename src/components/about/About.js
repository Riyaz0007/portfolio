import image from '../assest/my-image.jpg'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import resume from '../assest/riyaz_profile--1.pdf';



import './about.css';
const About = () => {
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
                                <WorkOutlineIcon/>
                                </div>
                                <h3 className='about-title'>Experience</h3>
                                <p className='about-desc'>1 Year 2 Months Working</p>

                            </div>
                            <div className='about-internal'>
                               <div className='icon'>
                                <FolderOpenIcon/>
                                </div>
                                <h3 className='about-title'>Completed</h3>
                                <p className='about-desc'>3+ Projects</p>
                                
                                
                            </div>
                           

                        </div>

                        <p className='desc'>Skilled Front-End Developer with expertise  with 1+ years experience in React.js, dedicated to creating responsive,
                            config driven UI and user-friendly web applications. Experienced in state management, API integration, and
                            collaborating with cross-functional teams. Seeking to contribute to a dynamic team by delivering high-quality,
                            scalable solutions that enhance user experience.</p>
                            <button className='resume-btn'><a href={resume} download='riyaz_profile--1.pdf' className='cv-link'>My resume</a></button>


                    </div>







                </div>

            </section>

        </>
    )
}
export default About;