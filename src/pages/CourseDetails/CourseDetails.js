import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails.title)
    return (
        <div>
            <h1>{courseDetails.title} </h1>
        </div>
    );
};

export default CourseDetails;