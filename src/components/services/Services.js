import React from "react";
import Frontend from '../assest/fron.png';
import Backend from '../assest/backend.jpg';
import './services.css';
const Services = () => {
    return (
        <>
            <section>
                <h1 className="services-h">My Services</h1>
                <div className="seervices-m">
                    <div className="services-1">
                        <div className="images">
                        <img src={Frontend} alt="frontend" className="common-img" />
                        </div>
                        <div className="internal-div">
                        <h1 className="service-heading">frontend devolopment</h1>
                        <p className="service-desc">I provide expert front-end development services, creating responsive, user-friendly interfaces with a focus on UI/UX design, performance optimization, and cross-browser compatibility to enhance your digital presence.</p>
                        </div>

                    </div>
                    <div className="services-2">
                        <div className="images">
                        <img src={Backend} alt="backend" className="common-img" />
                        </div>
                        <div className="internal-div">
                        <h1 className="service-heading">backend devolopment</h1>
                        <p className="service-desc">We offer robust backend development services, ensuring secure, scalable, and efficient server-side solutions with expertise in database management, API integration, and custom server architecture for seamless application performance.</p>
                        </div>


                    </div>

                </div>
            </section>
        </>
    )
}
export default Services;