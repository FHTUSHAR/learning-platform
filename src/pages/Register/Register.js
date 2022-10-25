import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className='register_div rounded p-5'>
            <h2 className='text-primary text-center'>Register</h2>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" name="name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control type="text" placeholder="Enter PhotURL" name="PhotoURL" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p>Allreadyhave an account?Please <Link to={'/login'}>Login</Link></p>
            </Form>
        </div>
    );
};

export default Register;