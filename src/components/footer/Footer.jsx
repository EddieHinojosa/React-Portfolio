import React from 'react';
import './footer.css';

const Footer = () => {
    //get current year for footer
    const YearDisplay = new Date().getFullYear();


    return (
        <footer>
            <footer>--Footer--</footer>
            <p> Eddie's React Portfolio - © {YearDisplay}</p>
        </footer>
    )
}

export default Footer;




