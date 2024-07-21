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
                    <h2>About Me</h2>
                    <p>My name is Eddie Hinojosa, as of 2024 I am a Full-Stack Developer, my curiosity of  “how things workd” lead me on wanting to understand how website create works.
I took a coding bootcamp beginning of 2024 associated with UCF/EdX. Leading me to learn how to read and write code from HTML all the way to using React.js.
My previous work experience has been in advance technical and hardware/software support regarding portable telecommunication devices from 2016-2022,  and currently im an operation specialist at a brokerage firm.
By desire to want to learn to fix complex problems lead me to becoming a Full-Stack Developer.
Collaborating with my classmates and co-workers has always driven to say “how can we improve this”, and with the ever changing in technological advancements, this was the perfect opportunity to dive head first into this coding world.</p>
<p>—— generic unthought template, reworked about me page and mentioend blender/3d design work—-</p>
                    
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