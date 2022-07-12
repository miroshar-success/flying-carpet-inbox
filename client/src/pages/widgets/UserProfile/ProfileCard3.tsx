import React from 'react';
import { Card, Dropdown, Row, Col, Button } from 'react-bootstrap';

// images
import avatar from '../../../assets/images/users/avatar-7.jpg';
import img1 from '../../../assets/images/small/img-4.jpg';
import img2 from '../../../assets/images/small/img-5.jpg';
import img3 from '../../../assets/images/small/img-6.jpg';

const ProfileCard3 = () => {
    return (
        <Card>
            <Card.Body>
                <div className="d-flex">
                    <img src={avatar} className="avatar-lg rounded-circle me-2" alt="" />
                    <div className="flex-grow-1">
                        <h4 className="mt-2 mb-0">Shreyu N</h4>
                        <h6 className="text-muted fw-normal mt-1 mb-4">New York, USA</h6>
                    </div>

                    <Dropdown className="float-end" align="end">
                        <Dropdown.Toggle as="a" className="cursor-pointer arrow-none text-muted">
                            <i className="uil uil-ellipsis-v"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <i className="uil uil-edit-alt me-2"></i>Edit
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <i className="uil uil-refresh me-2"></i>Refresh
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="text-danger">
                                <i className="uil uil-trash me-2"></i>Delete
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <Row className="my-2 justify-content-between">
                    <Col sm={5}>
                        <span className="fs-15">
                            <i className="uil uil-calendar-alt me-1"></i>40 Days Ago
                        </span>
                    </Col>
                    <Col sm className="mt-2 mt-sm-0">
                        <span className="fs-15">
                            <i className="uil uil-users-alt me-1"></i>12,001
                        </span>
                    </Col>
                    <Col sm className="mt-2 mt-sm-0 text-sm-end">
                        <span className="fs-15">
                            <i className="uil uil-calendar-alt me-1"></i>1200
                        </span>
                    </Col>
                </Row>

                <div className="mt-1 pt-2 border-top text-start">
                    <p className="text-muted mb-2">Hi I'm Shreyu. I am foodie and love to eat different cuisine!</p>
                </div>

                <Row className="mt-3">
                    <Col>
                        <img src={img1} alt="" className="img-fluid rounded shadow" />
                    </Col>
                    <Col>
                        <img src={img2} alt="" className="img-fluid rounded shadow" />
                    </Col>
                    <Col>
                        <img src={img3} alt="" className="img-fluid rounded shadow" />
                    </Col>
                </Row>

                <Row className="mt-4 text-center">
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
    );
};

export default ProfileCard3;
