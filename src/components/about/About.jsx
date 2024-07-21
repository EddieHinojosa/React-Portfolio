import React from 'react';
import './about.css';


import profileImage from '../../assets/profile.png'; // Add your profile image path
import htmlIcon from '../../assets/html.png';
import cssIcon from '../../assets/css.png';
import jsIcon from '../../assets/javascript.png';
import blenderIcon from '../../assets/blender.png';



const About = () => {
    return (
        <section id="about-me" className="container my-5">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <img src={profileImage} alt="Profile" className="img-fluid rounded-circle" />
                </div>
                <div className="col-md-8">
                    <h2>About Me</h2>
                    <p>My name is Eddie Hinojosa, I am a Full-Stack Developer as of 2024, my prior work experience has been.</p>
                    <p>Another paragraph about yourself...</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div className="skills-carousel">
                        <div className="carousel-track">
                            <img src={htmlIcon} alt="HTML" />
                            <img src={cssIcon} alt="CSS" />
                            <img src={jsIcon} alt="JavaScript" />
                            <img src={blenderIcon} alt="Blender" />
                            <img src={htmlIcon} alt="HTML" />
                            <img src={cssIcon} alt="CSS" />
                            <img src={jsIcon} alt="JavaScript" />
                            <img src={blenderIcon} alt="Blender" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;