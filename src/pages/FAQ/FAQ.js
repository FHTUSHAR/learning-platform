import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div className='container' style={{ height: '500px' }}>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Is there any option to submit the assignment letter ?</Accordion.Header>
                    <Accordion.Body>
                        We are very strict about punctuality.So you need to submit the assignment in time.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Is there any option to refund?</Accordion.Header>
                    <Accordion.Body>
                        There is no way to refund.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Can we attend the class physically ?</Accordion.Header>
                    <Accordion.Body>
                        No.You can't attend the class physically.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;