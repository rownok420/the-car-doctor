import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo.png";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
    const { user, logOut } = useAuth();
    const activeStyle = {
        fontWeight: "bold",
        color: "rgb(244, 199, 11)",
        textDecoration: "underline",
    };
    return (
        <Navbar className="nav-style" expand="lg">
            <Container>
                <Navbar.Brand>
                    <NavLink to="/">
                        <img className="logo" src={logo} alt="logo" />
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                        <NavLink activeStyle={activeStyle} to="/home">
                            Home
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/services">
                            Services
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/about">
                            About us
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/contact">
                            Contact us
                        </NavLink>
                    </Nav>
                    {user.email ? (
                        <div>
                            <NavLink to="/login">
                                <button
                                    onClick={logOut}
                                    className="home-button rounded-pill login-btn"
                                >
                                    Log out
                                </button>
                            </NavLink>
                        </div>
                    ) : (
                        <div>
                            <NavLink to="/login">
                                <button className="home-button rounded-pill login-btn">
                                    Login
                                </button>
                            </NavLink>
                        </div>
                    )}
                    {user.email && <div>
                        <Navbar.Brand>
                            <img
                                src={user.photoURL}
                                width="35"
                                height="35"
                                className="d-inline-block align-top rounded-circle m-2 me-0"
                                alt=""
                            />
                        </Navbar.Brand>
                    </div>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
