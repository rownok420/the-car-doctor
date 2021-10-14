import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Login.css";
import loginImg from "../../../images/login.png";
import useSignIn from "../../../Hooks/useSignIn";

const Login = () => {
    const { handleGoogleLogin, handleFacebookLogin, handleGithubLogin } =
        useSignIn();

    const handleRegister = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="mb-4">
                            <img className="w-100" src={loginImg} alt="" />
                        </div>
                    </Col>
                    <Col
                        xs={12}
                        md={6}
                        className="d-flex align-items-center justify-content-center"
                    >
                        <div>
                            <div>
                                <h2
                                    className="mb-2 fw-bold"
                                    style={{ color: "#1c63b8" }}
                                >
                                    Create an Account
                                </h2>
                                <p className="text-muted mb-4">
                                    Setup a new account in a minute
                                </p>
                            </div>
                            <div>
                                <Form
                                    onSubmit={handleRegister}
                                    className="w-100"
                                >
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicName"
                                    >
                                        <Form.Control
                                            type="text"
                                            placeholder="Your name"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Control
                                            type="email"
                                            placeholder="Email address"
                                        />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with
                                            anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicPassword"
                                    >
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicCheckbox"
                                    >
                                        <Form.Check
                                            style={{ color: "#1c63b8" }}
                                            type="checkbox"
                                            label="Already register"
                                        />
                                    </Form.Group>
                                    <button
                                        className="login-btn rounded-2"
                                        type="submit"
                                    >
                                        Register
                                    </button>
                                </Form>
                            </div>
                            <div className="mt-4 mb-5 text-center">
                                <small>or register with</small>
                                <div className="mt-4">
                                    <i
                                        role="button"
                                        style={{ color: "#EB4233" }}
                                        onClick={handleGoogleLogin}
                                        className="fab fab-icon fa-2x fa-google"
                                    ></i>
                                    <i
                                        role="button"
                                        style={{ color: "#1877f2" }}
                                        onClick={handleFacebookLogin}
                                        className="fab fab-icon fa-2x fa-facebook"
                                    ></i>
                                    <i
                                        role="button"
                                        style={{ color: "#1877f2" }}
                                        className="fab fab-icon fa-2x fa-twitter"
                                    ></i>
                                    <i
                                        role="button"
                                        onClick={handleGithubLogin}
                                        className="fab fab-icon fa-2x fa-github"
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
