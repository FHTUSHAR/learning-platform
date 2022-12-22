import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CategoryLeft from '../CategoryLeft/CategoryLeft';
import CategoryRight from '../CategoryRight/CategoryRight';

const Category = () => {
    const category = useLoaderData();

    return (
        <Container>
            <h2 className=' fw-bold mb-3 mt-2'>Popular Courses</h2>
            <hr></hr>
            <Row>
                <Col lg={4}>
                    {
                        category.map(cate => <CategoryLeft key={cate.id} cate={cate}></CategoryLeft>)
                    }
                </Col>
                <Col lg={8}>

                    {
                        category.map(cate => <CategoryRight key={cate.id} cate={cate}></CategoryRight>)
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Category;