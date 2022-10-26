import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoryRight = ({ cate }) => {
    const { title, image_url, details, rating, id } = cate;
    return (
        <Link to={`/category/${id}`} className='text-decoration-none mt-2'>
            <Container>
                <CardGroup>
                    <Card className='d-flex w-50'>
                        <Row>
                            <Col xs={12} lg={6}>  <Card.Img variant="top" src={image_url} /></Col>
                            <Col xs={12} lg={6}> <Card.Body>
                                <Card.Title>{title}</Card.Title>


                                <Card.Text className='mt-1'>Ratings :{rating}<FaStar /> </Card.Text>
                                <Card.Text className='mt-1 '> Duration :{details.course_duration}</Card.Text>
                                <Card.Text className='mt-1 '> Enroll :{details.total_student} students</Card.Text>

                            </Card.Body>
                            </Col>
                        </Row>


                    </Card>
                </CardGroup>
            </Container>
        </Link>
    );
};

export default CategoryRight;