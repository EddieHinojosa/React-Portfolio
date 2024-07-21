import React from 'react';
import './navigation.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (


        <div>

            <Navbar expand="lg" className="bg-body-tertiary ">
                <Container >
                    <Navbar.Brand href="#Home" className='fw-bold'>Eddie Hinojosa's Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-link" >
                            <NavLink className="nav-link" to="./">Home</NavLink>
                            <NavLink className="nav-link" to="./about">About</NavLink>
                            <NavLink className="nav-link" to="./projects">Projects</NavLink>
                            <NavLink className="nav-link" to="./Contact">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Navigation