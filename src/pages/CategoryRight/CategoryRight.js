import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';

const CategoryRight = ({ cate }) => {
    const { title, image_url, details, rating } = cate;
    return (
        <Container>
            <CardGroup>
                <Card className='d-flex w-50'>
                    <Row>
                        <Col xs={12} lg={6}>  <Card.Img variant="top" src={image_url} /></Col>
                        <Col xs={12} lg={6}> <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {details.course_details}
                            </Card.Text>
                            <Card.Footer>
                                <Card.Text>Ratings :{rating}<FaStar /> </Card.Text>
                                <Card.Text></Card.Text>
                            </Card.Footer>
                        </Card.Body>
                        </Col>
                    </Row>


                </Card>
            </CardGroup>
        </Container>
    );
};

export default CategoryRight;