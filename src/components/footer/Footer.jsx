import React from 'react';
import './footer.css';
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { Row } from 'react-bootstrap';

const Footer = () => {
    //get current year for footer
    const YearDisplay = new Date().getFullYear();

    //make icons clickable
    const handleClick = (URL) => {
        window.open(URL, '_blank');
    }


    return (
        <footer>

            <div>
                <p variant="primary"  >
                    <span  onClick={() => handleClick('https://github.com/EddieHinojosa')} style={{ cursor: 'pointer' }}>
                        <SiGithub />
                    </span>
                    <span onClick={() => handleClick('https://www.linkedin.com/in/eduardohinojosa')} style={{ cursor: 'pointer' }}>
                        <SiLinkedin />
                    </span>
                </p>
                <p>Eddie's Portfolio - © {YearDisplay}</p>
            </div>
        </footer>
    )
}

export default Footer;




