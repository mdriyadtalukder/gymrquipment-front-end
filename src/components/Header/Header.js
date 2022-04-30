import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    }
    return (
        <Navbar sticky="top" id='header' expand="lg">
            <Container>
                <Navbar.Brand className='text-white fw-bold fs-2' as={Link} to="/">Gym Equipment House</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='text-white fw-bold navbar-element' as={Link} active to="/">Home</Nav.Link>
                        <Nav.Link className='text-white fw-bold navbar-element ' as={Link} active to="/blogs">Blogs</Nav.Link>
                        {
                            user ?
                                <Nav>
                                    <Nav.Link className='text-white fw-bold navbar-element ' as={Link} active to="/products">Manage Items</Nav.Link>
                                    <Nav.Link className='text-white fw-bold navbar-element' as={Link} active to="/additems">Add Items</Nav.Link>
                                    <Nav.Link className='text-white fw-bold navbar-element' as={Link} active to="myitems">My Items</Nav.Link>
                                    <button onClick={logOut} className='text-black fw-bold button3 text-white'>Log Out </button>
                                </Nav>
                                : <Nav.Link className='text-black btn fw-bold button3 text-white' as={Link} active to="/login">Log In </Nav.Link>



                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;