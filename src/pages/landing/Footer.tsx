import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import backImg from '../../assets/images/covers/pattern.png';
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

const Footer = () => {
    return (
        <footer className="pt-5 pb-3 position-relative" style={{ background: `url(${backImg}) center top` }}>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <Container>
                <Row className="justify-content-between">
                    <Col md={6}>
                        <div className="auth-logo me-lg-5">
                            <Link to="/" className="logo logo-dark">
                                <span className="logo-lg">
                                    <img src={logoDark} alt="" className="me-2" height="24" />
                                </span>
                            </Link>

                            <Link to="/" className="logo logo-light">
                                <span className="logo-lg">
                                    <img src={logoLight} alt="" className="me-2" height="24" />
                                </span>
                            </Link>
                        </div>

                        <p className="fs-15 mt-4">
                            Shreyu makes it easier to build better websites with
                            <br /> great speed.Save hundreds of hours of design
                            <br /> and development by using it.
                        </p>
                    </Col>

                    <Col md={2}>
                        <h5 className="">Help</h5>

                        <ul className="list-unstyled ps-0 mb-0 mt-3">
                            <li className="mt-2">
                                <Link
                                    rel="noreferrer"
                                    to={{ pathname: 'https://coderthemes.com/#contact' }}
                                    target="_blank"
                                    className="text-dark">
                                    Get Support
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link rel="noreferrer" to={{ pathname: "http://shreyu-react.coderthemes.com/docs/" }} target="_blank" className="text-dark">
                                    Documentation
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col lg={12}>
                        <div className="mt-5">
                            <p className="mt-4 text-center mb-0">© {new Date().getFullYear()} Shreyu. Design and coded by Coderthemes</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
