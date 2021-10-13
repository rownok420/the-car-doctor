import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useServices from "../../Hooks/useServices";
import Service from "../Home/Service/Service";
import AllServicesCard from "./AllServicesCard/AllServicesCard";

const AllServices = () => {
    const [services] = useServices();

    return (
        <div>
            <div  className="py-5" style={{ backgroundColor: "#F2F2F2" }}>
                <div className="container">
                    <div className="text-center mb-4">
                        <h6 style={{ color: "#1c63b8" }} className="fw-bold">
                            What We Do
                        </h6>
                        <h1 style={{ color: "#0b2154" }}>
                            Quality Servicing Opportunity
                        </h1>
                    </div>
                    <div>
                        <AllServicesCard />
                    </div>
                </div>
            </div>
            <div className="container my-4">
                <div>
                    <div className="text-center">
                        <h1 style={{ color: "#1c63b8" }}>ALL SERVICES</h1>
                        <hr className="dotted-hr mb-3" />
                        <p>
                            Our professionals will perform diagnostic tests,
                            fluid flush and fills, engine replacement, oil
                            changes, and total vehicle overhauls.
                        </p>
                    </div>
                    <div>
                        <Row xs={1} md={3} lg={4} className="g-4 mt-3">
                            {services.map((service) => (
                                <Service key={service.id} service={service} />
                            ))}
                        </Row>
                    </div>
                    <div className="text-center mt-5">
                        <Link to="/home">
                            <button className="my-btn">Back to Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServices;
