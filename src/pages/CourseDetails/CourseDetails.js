import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CheckOut from '../CheckOut/CheckOut';
import './CourseDetails.css'

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails.title)

    return (
        <Card style={{ width: '28rem' }} className="course_details">
            <Card.Header>
                <Card.Title>{courseDetails.title}</Card.Title>
            </Card.Header>
            <Card.Img variant="top" src={courseDetails.image_url} />
            <Card.Body>

                <Card.Text>
                    {courseDetails.details.course_details}
                </Card.Text>
                <Link to={`/checkout/${courseDetails.id}`}>  <Button variant="info">Get Premium Access</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default CourseDetails;