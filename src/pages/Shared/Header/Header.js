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
        <Navbar className='nav_header' expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img
                    alt=""
                    src={img}
                    width="35"
                    height="35"
                    className="d-inline-block align-top"
                />{' '}
                    <span className='logoText fs-3 fw-bold'>Smart_Edu_Platform</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-white">
                        <Nav.Link ><Link className='text-decoration-none text-white' to={'/home'}>Home</Link></Nav.Link>
                        <Nav.Link ><Link to={'/category'} className='text-decoration-none text-white'>Courses</Link></Nav.Link>
                        <Nav.Link ><Link to={'/faq'} className='text-decoration-none text-white'>FAQ</Link></Nav.Link>
                        <Nav.Link><Link to={'/blog'} className='text-decoration-none text-white'> Blog</Link></Nav.Link>
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

                        <Nav.Link>
                            {
                                user?.uid ?
                                    <>
                                        <div className='d-flex' >
                                            <img src={user?.photoURL} alt="" className='rounded-circle' data-toggle="tooltip" data-placement="bottom" title={user?.displayName} style={{ width: 40, height: 40 }} />
                                            <Nav.Link ><Button className='py-0 text-white' onClick={handleLogOut}>LogOut</Button></Nav.Link>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <Nav.Link ><Link className='text-decoration-none fw-bold text-white border px-2' to={'/login'}>Login</Link></Nav.Link>
                                    </>
                            }

                        </Nav.Link>



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;