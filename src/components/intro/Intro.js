import riyaz from '../assest/riyaz-image.jpg';
import './intro.css';
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
                <button className='contact-btn'>Contact Me</button>
                <button className='resume-btn'>My resume</button>
                </div>
            </section>
        </>
    )
}
export default Intro;