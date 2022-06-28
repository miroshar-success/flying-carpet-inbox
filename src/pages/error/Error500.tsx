import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

// images
import serverDown from '../../assets/images/server-down.png';

const ServerError = () => {
    return (
        <div className="account-pages mt-5 mb-5">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={4} lg={5} xs={8}>
                        <div className="text-center">
                            <div>
                                <img src={serverDown} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} className="text-center">
                        <h3 className="mt-3">Opps, something went wrong</h3>
                        <p className="text-muted mb-4">
                            Server Error 500. We apoligise and are fixing the problem.
                            <br /> Please try again at a later stage.
                        </p>
                        <Link to="/" className="btn btn-lg btn-primary">
                            Take me back to Home
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServerError;
