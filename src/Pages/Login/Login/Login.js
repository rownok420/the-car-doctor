import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Login.css";
import loginImg from "../../../images/login.png";
import useSignIn from "../../../Hooks/useSignIn";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
    const { handleGoogleLogin, handleFacebookLogin, handleGithubLogin } =
        useSignIn();

    const {
        handleRegister,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        toggleLogIn,
        isLogin,
        error,
        handleResetPassword,
    } = useAuth();

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
                                    {isLogin
                                        ? "Login Your Account"
                                        : "Create an Account"}
                                </h2>
                                <p className="text-muted mb-4">
                                    {!isLogin &&
                                        "Setup a new account in a minute"}
                                </p>
                            </div>
                            <div>
                                <Form
                                    onSubmit={handleRegister}
                                    className="w-100"
                                >
                                    {!isLogin && (
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicName"
                                        >
                                            <Form.Control
                                                onBlur={handleNameChange}
                                                type="text"
                                                placeholder="Your name"
                                            />
                                        </Form.Group>
                                    )}
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Control
                                            onBlur={handleEmailChange}
                                            type="email"
                                            placeholder="Email address"
                                            required
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
                                            onBlur={handlePasswordChange}
                                            type="password"
                                            placeholder="Password"
                                            required
                                        />
                                    </Form.Group>
                                    <div>
                                        <p className="text-warning">{error}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicCheckbox"
                                        >
                                            <Form.Check
                                                onClick={toggleLogIn}
                                                style={{ color: "#1c63b8" }}
                                                type="checkbox"
                                                label="Already register"
                                            />
                                        </Form.Group>
                                        <div>
                                            {isLogin && (
                                                <p
                                                    onClick={
                                                        handleResetPassword
                                                    }
                                                    className="text-primary"
                                                    role="button"
                                                    tabIndex="0"
                                                >
                                                    Forgot password ?
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <button
                                        className="login-btn rounded-2"
                                        type="submit"
                                    >
                                        {isLogin ? "Login" : "Register"}
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
