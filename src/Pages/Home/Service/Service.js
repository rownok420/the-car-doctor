import React from "react";
import { Card, Col } from "react-bootstrap";
import './service.css'

const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <Col>
            <Card className='card-style h-100'>
                <Card.Img variant="top" className='p-3' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>

                    <span className='fw-bold'>Price: {price}</span>
                    <p className='mt-2'>{description}</p>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;
