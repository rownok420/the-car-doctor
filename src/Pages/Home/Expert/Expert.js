import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Expert = ({expert}) => {
    const {img, name, expertize, experence} = expert;
    return (
        <Col>
            <Card className='card-style h-100'>
                <Card.Img variant="top" className='p-3' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6 className='mt-2'>{expertize}</h6>
                    <p>{experence.slice(0,90)}</p>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Expert;