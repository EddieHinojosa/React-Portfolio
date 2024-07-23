import React from 'react';
import './about.css';
//import bootstrapIcon
import { SiBlender } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoTerminal } from "react-icons/io5";


import profileImage from '../../assets/profile.png'; // Add your profile image path


const About = () => {
    return (
        <section id="about-me" className="container my-5">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <img src={profileImage} alt="Profile" className="img-fluid rounded-circle" />
                </div>
                <div className="col-md-8">
                    <h2>My name is Eddie Hinojosa</h2 >
                    <h2>Full-Stack Developer</h2>
                    <p> 
                        I am a Full-Stack Developer with a background in technical support and operations.
                        I have a foundation in HTML, CSS, JavaScript, MongoDB, Node.js, React, and more.
                        My goal is to melt my technical support background with my new coding skills to create a seamless user experience.
                    </p> 
                        
                    <p>
                        My previous work experience has been in advance technical and hardware/software support regarding portable telecommunication devices from 2016-2022,  
                        and currently im an operation specialist at a brokerage firm.
                        My desire to want to learn to fix complex problems lead me to becoming a Full-Stack Developer.
                    </p>
                    
                    <p>
                        I have always been a problem solver, and I have always been interested in how things work and what makes things tick.
                    </p>
                    
                    <p>
                        and i like to dabble in 3D modeling and animation in my free time.
                    </p>
                    
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-5">
                    <div className="skills-carousel">
                        <div className="carousel-track">
                            <SiHtml5 />
                            <SiCss3 />
                            <SiJavascript />
                            <SiMongodb />
                            <SiNodedotjs />
                            <SiReact />
                            <IoTerminal />
                            <SiGithub />
                            <VscVscode />
                            <SiBlender />
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;