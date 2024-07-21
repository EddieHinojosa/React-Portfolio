import React from 'react';
import './header.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Navigation from '../navigation/Navigation.jsx';


const Header = () => {
    return (

      <header >
      <div>
          <h1 >My Portfolio</h1>
          <Navigation />
      </div>  
      </header>
    )
}

export default Header

