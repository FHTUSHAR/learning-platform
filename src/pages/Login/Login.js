import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useState } from 'react';


const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const { createGoogleUser, createGithubUser, user, signInUser } = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleSubmit = (event) => {

        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate('/');
                setError('')
                navigate(from, { replace: true });

            })
            .catch(error => {
                setError(error.message)
            })
    };
    const handleGoogle = () => {
        createGoogleUser()
            .then(result => {
                const users = result.user;
                navigate(from, { replace: true });
                console.log(users)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleGithub = () => {
        createGithubUser()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user)
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return (
        <div className='login_div rounded'>
            <h2 className='text-primary text-center'>Login </h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>Don't have an account?Please <Link to={'/register'}>Register</Link></p>
            </Form>

            <div>
                <Button onClick={handleGoogle} variant="light"> <FaGoogle /><span className='ms-2'>Google</span></Button>
                <Button onClick={handleGithub} variant="light" className='ms-2'> <FaGithub /><span className='ms-2'>Github</span></Button>
            </div>
            <p>{error}</p>
        </div>

    );
};

export default Login;