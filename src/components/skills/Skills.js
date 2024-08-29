import './skills.css';
import FlagIcon from '@mui/icons-material/Flag';
const Skills = () => {
    return (
        <>
            <section className='skills-section'>
                <h1 className='skill-heading'>Skills</h1>
                <div className='skills-container'>
                    <div className='container-1'>
                            <h3 className='common-heading'>Frontend Devolopment</h3>
                            <div className='innermost'>
                                <div className='inner-left'>
                                    <div className='s-div'>
                                        <span className='skill-icon'><FlagIcon fontSize='small' /></span>
                                        <div className='skdiv'>
                                        <h4>HTML</h4>
                                        <span>advanced</span>
                                        </div>

                                    </div>
                                    <div className='s-div'>
                                        <span className='skill-icon'><FlagIcon fontSize='small' /></span>
                                        <div className='skdiv'>
                                        <h4>CSS</h4>
                                        <span>advanced</span>
                                        </div>

                                    </div>
                                    <div className='s-div'>
                                        <span className='skill-icon'><FlagIcon fontSize='small' /></span>
                                        <div className='skdiv'>
                                        <h4>Material UI</h4>
                                        <span>advanced</span>
                                        </div>

                                    </div>
                                    <div className='s-div'>
                                        <span className='skill-icon'><FlagIcon fontSize='small' /></span>
                                        <div className='skdiv'>
                                        <h4>Bootstrap</h4>
                                        <span>advanced</span>
                                        </div>

                                    </div>
                                   

                                </div>
                                <div className='right-inner'>
                                   <div className='s-div'>
                                        <span className='skill-icon'><FlagIcon fontSize='small' /></span>
                                        <div className='skdiv'>
                                        <h4>Javascript</h4>
                                        <span>advanced</span>
                                        </div>
                                    </div>
                                    <div className='s-div'>
                                        <span className='skill-icon'><FlagIcon fontSize='small'/></span>
                                        <div className='skdiv'>
                                        <h4>React.js</h4>
                                        <span>advanced</span>
                                        </div>

                                    </div>

                                </div>

                            </div>
                    </div>
                    <div className='container-2'>
                        <h3 className='common-heading'>Networking & Web Design</h3>
                        <div className='innermost'>
                                <div className='inner-left'>
                                    <div className='s-div'>
                                        <span className='skill-icon'><FlagIcon fontSize='small' /></span>
                                        <div className='skdiv'>
                                        <h4>HTTP</h4>
                                        <span>advanced</span>
                                        </div>

                                    </div>
                                    <div className='s-div'>
                                        <span className='skill-icon'><FlagIcon fontSize='small' /></span>
                                        <div className='skdiv'>
                                        <h4>REST API</h4>
                                        <span>advanced</span>
                                        </div>

                                    </div>
                                    <div className='s-div'>
                                        <span className='skill-icon'><FlagIcon fontSize='small' /></span>
                                        <div className='skdiv'>
                                        <h4>GraphQL</h4>
                                        <span>advanced</span>
                                        </div>

                                    </div>
                                    <div className='s-div'>
                                        <span className='skill-icon'><FlagIcon fontSize='small' /></span>
                                        <div className='skdiv'>
                                        <h4> WebSocket</h4>
                                        <span>advanced</span>
                                        </div>

                                    </div>
                                    
                                   

                                </div>
                                <div className='right-inner'>
                                <div className='s-div'>
                                        <span className='skill-icon'><FlagIcon fontSize='small' /></span>
                                        <div className='skdiv'>
                                        <h4>Responsive Design</h4>
                                        <span>advanced</span>
                                        </div>

                                    </div>
                                <div className='s-div'>
                                        <span className='skill-icon'><FlagIcon fontSize='small' /></span>
                                        <div className='skdiv'>
                                        <h4>Config-Driven UI</h4>
                                        <span>advanced</span>
                                        </div>

                                    </div>
                                    <div className='s-div'>
                                        <span className='skill-icon'><FlagIcon fontSize='small' /></span>
                                        <div className='skdiv'>
                                        <h4>SEO</h4>
                                        <span>advanced</span>
                                        </div>

                                    </div>
                                   

                                </div>

                            </div>

                    </div>
                    <div className='container-3'>
                        <h3 className='common-heading'>Database & version control</h3>
                        <div className='innermost'>
                                <div className='inner-left'>
                                    <div className='s-div'>
                                        <span className='skill-icon'><FlagIcon fontSize='small' /></span>
                                        <div className='skdiv'>
                                        <h4>MySql</h4>
                                        <span>advanced</span>
                                        </div>

                                    </div>
                                    <div className='s-div'>
                                        <span className='skill-icon'><FlagIcon fontSize='small' /></span>
                                        <div className='skdiv'>
                                        <h4>MongoDB</h4>
                                        <span>advanced</span>
                                        </div>

                                    </div>
                                    <div className='s-div'>
                                        <span className='skill-icon'><FlagIcon fontSize='small' /></span>
                                        <div className='skdiv'>
                                        <h4>Git</h4>
                                        <span>advanced</span>
                                        </div>

                                    </div>
                                    <div className='s-div'>
                                        <span className='skill-icon'><FlagIcon fontSize='small' /></span>
                                        <div className='skdiv'>
                                        <h4>Github</h4>
                                        <span>advanced</span>
                                        </div>

                                    </div>
                                   

                                </div>
                                <div className='right-inner'>
                                   <div className='s-div'>
                                        <span className='skill-icon'><FlagIcon fontSize='small' /></span>
                                        <div className='skdiv'>
                                        <h4>GitLab</h4>
                                        <span>advanced</span>
                                        </div>
                                    </div>
                                    

                                </div>

                            </div>

                    </div>

                </div>

            </section>
        </>
    )
}
export default Skills;