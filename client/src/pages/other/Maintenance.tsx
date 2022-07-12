import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import classNames from 'classnames';

// images
import maintenance from '../../assets/images/maintenance.svg';

// dummy
import { maintenanceQuery } from './data';

const Maintenance = () => {
    return (
        <div className="account-pages my-5">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={4} lg={5} xs={8}>
                        <div className="text-center">
                            <div>
                                <img src={maintenance} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} className="text-center">
                        <h3 className="mt-5">We are currently performing maintenance</h3>
                        <p className="text-muted">
                            We're making the system more awesome. <br /> We'll be back shortly.
                        </p>
                    </Col>
                </Row>

                <Row className="pt-5">
                    {(maintenanceQuery || []).map((item, index) => {
                        return (
                            <Col key={index} lg={4}>
                                <Card>
                                    <Card.Body>
                                        <div className="d-flex">
                                            <div className="avatar-sm rounded-circle bg-soft-primary me-3 flex-shrink-0">
                                                <i
                                                    className={classNames(
                                                        'fs-20',
                                                        'avatar-title',
                                                        'text-primary',
                                                        item.icon
                                                    )}></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="fs-16 mt-0">{item.title}</h5>
                                                <p className="text-muted mb-0">{item.desc}</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default Maintenance;
