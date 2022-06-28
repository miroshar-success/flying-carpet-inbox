import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcons from 'feather-icons-react';

// images
import avatar7 from '../../../assets/images/users/avatar-7.jpg';

const ProfileCard4 = () => {
    return (
        <>
            <Card>
                <Row className="g-0">
                    <Col md={4}>
                        <img src={avatar7} className="card-img" alt="" />
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title as="h5" className="mb-1">
                                Shreyu N
                            </Card.Title>
                            <h6 className="text-muted fw-normal mt-0 mb-3">New York, USA</h6>
                            <Row className="text-center">
                                <Col>
                                    <Button variant="primary" className="btn-sm w-100 me-1">
                                        Follow
                                    </Button>
                                </Col>
                                <Col>
                                    <Button variant="white" className="btn-sm w-100">
                                        Message
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>

            <Card>
                <Card.Body className="p-3">
                    <div className="d-flex">
                        <img src={avatar7} className="me-3 avatar-lg rounded" alt="" />
                        <div className="flex-grow-1">
                            <h5 className="mt-1 mb-0">Shreyu N</h5>
                            <h6 className="fw-normal mt-1 mb-1">
                                <Link to="#">@shreyu</Link>
                            </h6>
                            <p className="text-muted">Designer | Creative | Thinker</p>
                        </div>
                    </div>
                    <Row className="mt-2 border-top pt-2">
                        <Col>
                            <div className="d-flex">
                                <span className="icon-dual align-self-center me-2">
                                    <FeatherIcons icon="users" />
                                </span>
                                <div className="flex-grow-1">
                                    <h5 className="mt-2 pt-1 mb-0 fs-16">1.9M</h5>
                                    <h6 className="fw-normal mt-0">Followers</h6>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex">
                                <span className="icon-dual align-self-center me-2">
                                    <FeatherIcons icon="eye" />
                                </span>
                                <div className="flex-grow-1">
                                    <h5 className="mt-2 pt-1 mb-0 fs-16">19M</h5>
                                    <h6 className="fw-normal mt-0">Views</h6>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex">
                                <span className="icon-dual align-self-center me-2">
                                    <FeatherIcons icon="file-text" />
                                </span>
                                <div className="flex-grow-1">
                                    <h5 className="mt-2 pt-1 mb-0 fs-16">1k</h5>
                                    <h6 className="fw-normal mt-0">Posts</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-3 text-center">
                        <Col>
                            <Button variant="primary" className="btn-sm w-100 me-1">
                                Follow
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="white" className="btn-sm w-100">
                                Message
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};

export default ProfileCard4;
