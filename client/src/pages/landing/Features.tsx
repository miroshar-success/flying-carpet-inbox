import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import img1 from '../../assets/images/widgets-sample/1.png';
import img2 from '../../assets/images/widgets-sample/2.png';
import img3 from '../../assets/images/widgets-sample/3.png';
import img4 from '../../assets/images/widgets-sample/4.png';
import img5 from '../../assets/images/widgets-sample/5.png';
import img6 from '../../assets/images/widgets-sample/6.png';
import img7 from '../../assets/images/widgets-sample/8.png';
import img8 from '../../assets/images/widgets-sample/9.png';
import img9 from '../../assets/images/widgets-sample/10.png';
import img10 from '../../assets/images/widgets-sample/14.png';

const Features = () => {
    return (
        <section className="py-5 bg-body border-bottom border-top">
            <Container>
                <Row className="pb-3">
                    <Col lg={12}>
                        <div className="text-center">
                            <h1>
                                Complete UI Kit with <span className="text-primary">Reusable Widgets</span>
                            </h1>
                            <p className="text-muted mt-2">
                                Fully responsive and resuable widgets covering statistics, user profile, team, chat,
                                tasks, etc.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Row>
                            <Col>
                                <Card className="animate mb-2">
                                    <Card.Body>
                                        <Card.Img variant="top" src={img3} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className="animate mb-2">
                                    <Card.Body>
                                        <Card.Img variant="top" src={img4} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className="animate mb-2">
                                    <Card.Body>
                                        <Card.Img variant="top" src={img5} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className="animate mb-2">
                                    <Card.Body>
                                        <Card.Img variant="top" src={img6} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className="animate mb-2">
                                    <Card.Body>
                                        <Card.Img variant="top" src={img1} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row>
                            <Col>
                                <Card className="animate mb-2">
                                    <Card.Body>
                                        <Card.Img variant="top" src={img2} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className="animate mb-2">
                                    <Card.Body>
                                        <Card.Img variant="top" src={img7} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row>
                            <Col>
                                <Card className="animate mb-2">
                                    <Card.Body>
                                        <Card.Img variant="top" src={img8} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className="animate mb-2">
                                    <Card.Body>
                                        <Card.Img variant="top" src={img9} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className="animate mb-2">
                                    <Card.Body>
                                        <Card.Img variant="top" src={img10} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="pt-4">
                    <Col className="text-center py-4">
                        <Link to="/components/widgets" className="btn btn-success shadow-sm">
                            Check All
                            <i className="bi bi-arrow-right-short icon-xs ms-1"></i>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features;
