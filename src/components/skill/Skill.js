import image from '../assest/riyaz-image.jpg'
import './skill.css';
const Skill = () => {
    return (
        <>
            <section className='skill'>
                <h1 className='heading'>About Me</h1>
                <div className='main'>
                    <div className='left-section'>
                        <img src={image} alt='this is section pic' />
                    </div>

                    <div className='right-section'>

                        <p className='desc'>Skilled Front-End Developer with expertise  with 1+ years experience in React.js, dedicated to creating responsive,
                            config driven UI and user-friendly web applications. Experienced in state management, API integration, and
                            collaborating with cross-functional teams. Seeking to contribute to a dynamic team by delivering high-quality,
                            scalable solutions that enhance user experience.</p>
                        <div className='about-skill'>
                            <div className='skills-list'><p>HTML&CSS</p><hr style={{ width: '90%',marginTop:'1rem',marginLeft:'1rem' }} /></div>
                            <div className='skills-list'><p>JavaScript</p><hr style={{ width: '85%',marginTop:'1rem',marginLeft:'1rem' }} /></div>
                            <div className='skills-list'><p>React.js</p><hr style={{ width: '80%',marginTop:'1rem',marginLeft:'1rem' }} /></div>
                            <div className='skills-list'><p>Bootstrap</p><hr style={{ width: '85%',marginTop:'1rem',marginLeft:'1rem' }} /></div>
                            <div className='skills-list'><p>Material UI</p><hr style={{ width: '83%',marginTop:'1rem',marginLeft:'1rem' }} /></div>
                            <div className='skills-list'><p>My sql</p><hr style={{ width: '84%',marginTop:'1rem',marginLeft:'1rem' }} /></div>
                            <div className='skills-list'><p>Git</p><hr style={{ width: '87%',marginTop:'1rem',marginLeft:'1rem' }} /></div>
                        </div>
                    </div>







                </div>

            </section>

        </>
    )
}
export default Skill;