import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

// images
import backImg from '../../assets/images/covers/pattern.png';
import verticalImg from '../../assets/images/layouts/vertical-full-sm.png';

const Hero = () => {
    return (
        <section
            className="hero-section position-relative overflow-hidden px-3 text-dark pt-4 pb-0"
            style={{ background: `url(${backImg}) center top` }}>
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
                <Row className="align-items-center">
                    <Col className="text-center">
                        <div className="py-4">
                            <h1 className="mb-4">Build your dashboard or admin application faster with Shreyu</h1>

                            <p className="mb-3 fs-16 text-center">
                                Shreyu is a fully featured admin and dashboard template. Shreyu comes with tones of well
                                designed & ready to use <br />
                                UI elements, components, widgets and pages.
                            </p>

                            <p className="pt-3 mb-2">
                                <Button className="btn-lg me-2 link-demos my-1" href="#demos">
                                    Check Demos
                                    <i className="bi bi-arrow-right-short icon-xs ms-1 align-middle"></i>
                                </Button>
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={verticalImg} alt="" className="mx-auto d-block shadow img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
