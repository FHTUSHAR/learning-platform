import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import './Home.css'
const Home = () => {
    const { users } = useContext(AuthContext)
    return (
        <div className='home '>
            <div className='text-white p-4 container '>
                <h1>Here You can Learn with fun</h1>
                <h3>Our Services</h3>
                <ul>
                    <li className='mt-2'>Life time support</li>
                    <li className='mt-2'>Special batch for weak student</li>
                    <li className='mt-2'>You can solve your problem any time</li>
                    <li className='mt-2'>24 *7 support hours</li>
                    <li className='mt-2'>Problem solving session</li>

                </ul>
            </div>
        </div>
    );
};

export default Home;