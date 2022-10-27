import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './Register.css'

const Register = () => {
    const { createUser, userProfile } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (event) => {

        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.PhotoURL.value;
        console.log(email, password, photoURL, name)
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                navigate('/');
                handleUpdateUserProfile(name, photoURL)
                setError('')
            })
            .catch(error => setError(error.message))
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        userProfile(profile)
            .then(() => { })
            .catch((e) => { setError(error.message) })
    }
    return (
        <div className='register_div rounded p-5'>
            <h2 className='text-primary text-center'>Register</h2>
            <Form onSubmit={handleSubmit}>
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
            <p className='text-danger'>{error}</p>
        </div>
    );
};

export default Register;