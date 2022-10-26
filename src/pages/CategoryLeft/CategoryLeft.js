import React from 'react';
import { Link } from 'react-router-dom';

const CategoryLeft = ({ cate }) => {
    return (
        <div className='mb-3'>
            <Link to={'/category/id'}> {cate.title}</Link>
        </div>
    );
};

export default CategoryLeft;