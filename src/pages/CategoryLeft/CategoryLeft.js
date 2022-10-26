import React from 'react';
import { Link } from 'react-router-dom';

const CategoryLeft = ({ cate }) => {
    const { id } = cate;
    return (
        <div className='mb-3'>
            <Link to={`/course/${id}`}> {cate.title}</Link>
        </div>
    );
};

export default CategoryLeft;