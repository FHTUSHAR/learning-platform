import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Category = () => {
    return (
        <Container>
            <Row>
                <Col className='bg-primary' lg={4}>1 of 2</Col>
                <Col lg={8}>2 of 2</Col>
            </Row>
        </Container>
    );
};

export default Category;