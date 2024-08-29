import riyaz from '../assest/riyaz-image.jpg';
import './intro.css';
import resume from '../assest/profile.pdf';
import { Link } from 'react-scroll';
const Intro = () => {
    return (
        <>
            <section className='intro'>
                <img className='intro-img' src={riyaz} alt='my pic' />
                <div>
                    <span className='riyaz'>I'm Mohammad Riyaz , </span><span className='front'>frontend</span>
                    <br />
                    <span className='last'>devoloper based in India</span>
                </div>
                <p>Skilled Front-End Developer with expertise  with 1+ years experience in React.js, dedicated to creating responsive,
                    config driven UI and user-friendly web applications.</p>
                <p> Experienced in state management, API integration, and
                    collaborating with cross-functional teams.</p>
                <div>
                <button className='contact-btn'><Link to="contact" smooth={true} duration={500} offset={-80}>
                    Contact Me
                </Link></button>
                <button className='resume-btn'><a href={resume} download='riyaz_profile--1.pdf' className='cv-link'>My resume</a></button>
                </div>
            </section>
        </>
    )
}
export default Intro;