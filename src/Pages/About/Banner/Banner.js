import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../../images/about.jpg";

const Banner = () => {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="d-flex justify-content-center align-items-center">
                            <img
                                className="img-fluid mt-3 mb-4 rounded-3 shadow"
                                src={img}
                                alt=""
                            />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="m-3">
                                <div>
                                    <h1
                                        style={{
                                            color: "#1c63b8",
                                            lineHeight: "1.3em",
                                        }}
                                    >
                                        We’re Certified & Expert Car Servicing
                                        Agency
                                    </h1>
                                    <p className="text-muted mt-4 mb-5">
                                        But I must explain to you how all this
                                        mistaken idea of denouncing pleasure and
                                        praising pain was born will give
                                    </p>
                                </div>
                                <div>
                                    <div className="d-flex">
                                        <div className="d-flex justify-content-center align-items-center me-5">
                                            <h4
                                                style={{
                                                    backgroundColor: "#1c63b8",
                                                }}
                                                className="p-2 rounded-circle text-white"
                                            >
                                                01
                                            </h4>
                                        </div>
                                        <div>
                                            <h3>Professional & Expert</h3>
                                            <p>For Less than a Year User</p>
                                        </div>
                                    </div>
                                    <div className="d-flex my-4">
                                        <div className="d-flex justify-content-center align-items-center me-5">
                                            <h4
                                                style={{
                                                    backgroundColor: "#1c63b8",
                                                }}
                                                className="p-2 rounded-circle text-white"
                                            >
                                                02
                                            </h4>
                                        </div>
                                        <div>
                                            <h3>Quality Servicing Agency</h3>
                                            <p>For Less than a Year User</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="d-flex justify-content-center align-items-center me-5">
                                            <h4
                                                style={{
                                                    backgroundColor: "#1c63b8",
                                                }}
                                                className="p-2 rounded-circle text-white"
                                            >
                                                03
                                            </h4>
                                        </div>
                                        <div>
                                            <h3>Awards Winning Company</h3>
                                            <p>For Less than a Year User</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <Link to="/home">
                                        <button className="my-btn">
                                            Back to Home
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;
