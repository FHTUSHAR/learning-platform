import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import img from '../../../images/logo1.webp'
import './Header.css'

const Header = () => {
    const { logOut, user } = useContext(AuthContext)
    const [theme, setTheme] = useState(true)
    const handleToggleFalse = () => {
        setTheme(false)
    }
    const handleToggleTrue = () => {
        setTheme(true)
    }
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img
                    alt=""
                    src={img}
                    width="35"
                    height="35"
                    className="d-inline-block align-top"
                />{' '}
                    <span className='logoText'>Smart_Edu_Platform</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link ><Link className='text-decoration-none' to={'/home'}>Home</Link></Nav.Link>
                        <Nav.Link ><Link className='text-decoration-none'>Courses</Link></Nav.Link>
                        <Nav.Link ><Link className='text-decoration-none'>FAQ</Link></Nav.Link>
                        <Nav.Link><Link className='text-decoration-none'> Blog</Link></Nav.Link>
                        <Nav.Link>
                            {
                                !theme ?
                                    <Button className='py-0' onClick={handleToggleTrue}>Light</Button>

                                    :
                                    <>
                                        <Button className='py-0' onClick={handleToggleFalse}>Dark</Button>

                                    </>

                            }

                        </Nav.Link>

                    </Nav>
                    <Nav>

                        <Nav.Link>{user?.displayName}</Nav.Link>

                        <Nav.Link ><Link className='text-decoration-none' to={'/login'}>Login</Link></Nav.Link>
                        <Nav.Link ><Button className='py-0' onClick={handleLogOut}>LogOut</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;