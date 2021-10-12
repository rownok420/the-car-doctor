import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
    const [services] = useServices();
    const ourServices = services.slice(0, 4);

    return (
        <div className="py-5 service-bg">
            <div className="container">
                <div className="text-center">
                    <h1 className="services-heding">POPULAR  SERVICES</h1>
                    <hr className="dotted-hr mb-3" />
                    <p>
                        Our professionals will perform diagnostic tests, fluid
                        flush and fills, engine replacement, oil changes, and
                        total vehicle overhauls.
                    </p>
                </div>
                <div>
                    <Row xs={1} md={2} lg={4} className="g-4 mt-3">
                        {ourServices.map((service) => (
                            <Service key={service.id} service={service} />
                        ))}
                    </Row>
                </div>
                <div className='text-center mt-5'>
                    <Link to='/services'><button className='my-btn'>More Services</button></Link>
                </div>
                
            </div>
        </div>
    );
};

export default Services;
