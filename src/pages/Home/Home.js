import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
const Home = () => {
    const { users } = useContext(AuthContext)
    return (
        <div>
            <h1>This is home  </h1>
        </div>
    );
};

export default Home;