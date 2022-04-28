import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar sticky="top" id='header' expand="lg">
            <Container>
                <Navbar.Brand className='text-white fw-bold fs-2' as={Link} to="/">Gym Equipment House</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='text-white fw-bold navbar-element fs-5 ' as={Link} active to="/">Home</Nav.Link>
                        <Nav.Link className='text-white fw-bold navbar-element fs-5' as={Link} active to="/blogs">Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;