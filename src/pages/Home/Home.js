import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import './Home.css'
import { FiArrowRight } from 'react-icons/fi';
import img from '../../images/hero-img.png'
import img2 from '../../images/bg1.webp'
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    const { users } = useContext(AuthContext)
    return (
        <div >
            <div className='home'>
                <div className='container'>
                    <Row className=' text-dark p-4  d-lg-flex home_header '>
                        <Col lg={6} className='d-flex mt-4' >
                            <div>
                                <h1 className='text-white fs-1'>Here You can Learn<br></br> with fun</h1>
                                <h3>We are here for you</h3>

                                <Link to={'/category'}> <Button className='btn btn-primary mt-5 px-3 text-white border border-white '>Courses <FiArrowRight /></Button></Link>

                            </div>
                        </Col>
                        <Col lg={6}>
                            <img className='img-fluid' src={img} alt="" />
                        </Col>
                    </Row>

                </div>
            </div>
            <div className='container mt-5 mb-5'>
                <div className='d-flex '>
                    <div className='w-50'>
                        <img className='w-75' src={img2} alt="" />
                    </div>
                    <div className=' w-50'>
                        <h2>About Us</h2>
                        <p>Here we are dedicated to teach you until you learn.</p>
                        <p>We have qualified instructor sothat you can learn what you want to learn.</p>
                        <p>Dedicated instructor to help you when you need help.</p>
                    </div>
                </div>
            </div>
            <div className='bg-primary'>
                <div className='container py-5 text-white '>

                    <h1 className='text-center text-white fs-1'>We are just keep growing</h1>
                    <p className='text-center fs-5'>Our global community and our course catalog get bigger every day.Check out<br></br> our latest numbers as of September 2022.</p>
                    <div>
                        <div className='row'>
                            <div className='col-4'>
                                <h1>57M+</h1>
                                <p>Learners</p>
                            </div>
                            <div className='col-4'>
                                <h1>74M+</h1>
                                <p>Instructors</p>
                            </div>

                            <div className='col-4 ml-5'>
                                <h1>100M+</h1>
                                <p>Courses</p>
                            </div>
                            <div className='col-4 ml-5'>
                                <h1>1001M+</h1>
                                <p>Courses Enrollments</p>
                            </div>
                            <div className='col-4'>
                                <h1>17</h1>
                                <p>Languages</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='container mb-5'>
                <h2 className='text-black text-center p-1 py-5 '>Our Services</h2>
                <h5><FiArrowRight /><span className='ms-3'>Life time support</span></h5>
                <h5><FiArrowRight /><span className='ms-3'>Special batch for weak student</span></h5>
                <h5><FiArrowRight /><span className='ms-3'>You can solve your problem any time</span></h5>
                <h5><FiArrowRight /><span className='ms-3'>24 *7 support hours</span></h5>
                <h5><FiArrowRight /><span className='ms-3 '>Problem solving session</span></h5>
            </div>
        </div>
    );
};

export default Home;