import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CheckOut.css'

const CheckOut = () => {
    const selectedItem = useLoaderData()
    return (
        <div style={{ width: '28rem' }} className=' checkout '>
            <h2 className='text-center mb-2'>CheckOut </h2>
            <img style={{ width: '28rem' }} src={selectedItem.image_url} alt="" />
            <h1>{selectedItem.title}</h1>
        </div>
    );
};

export default CheckOut;