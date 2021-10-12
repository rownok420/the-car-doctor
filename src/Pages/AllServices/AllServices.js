import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import Service from '../Home/Service/Service';

const AllServices = () => {
    const [services] = useServices();

    return (
        <div className="my-5">
            <div className="container">
                <div className="text-center">
                    <h1 className="services-heding">ALL SERVICES</h1>
                    <hr className="dotted-hr mb-3" />
                    <p>
                        Our professionals will perform diagnostic tests, fluid
                        flush and fills, engine replacement, oil changes, and
                        total vehicle overhauls.
                    </p>
                </div>
                <div>
                    <Row xs={1} md={3} lg={4} className="g-4 mt-3">
                        {services.map((service) => (
                            <Service key={service.id} service={service} />
                        ))}
                    </Row>
                </div>
                <div className='text-center mt-5'>
                    <Link to='/home'><button className='my-btn'>Back to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllServices;