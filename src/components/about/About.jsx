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
                    <p>My name is Eddie Hinojosa, I am a Full-Stack Developer as of 2024, my prior work experience has been</p>
                    <p>Another paragraph about yourself...</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <div id="skillsCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={htmlIcon} className="d-block mx-auto" alt="HTML" />
                            </div>
                            <div className="carousel-item">
                                <img src={cssIcon} className="d-block mx-auto" alt="CSS" />
                            </div>
                            <div className="carousel-item">
                                <img src={jsIcon} className="d-block mx-auto" alt="JavaScript" />
                            </div>
                            <div className="carousel-item">
                                <img src={blenderIcon} className="d-block mx-auto" alt="Blender" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#skillsCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#skillsCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;