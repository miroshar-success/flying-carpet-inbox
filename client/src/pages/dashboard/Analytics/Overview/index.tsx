import React from 'react';
import { Card, Dropdown, Row, Col, Tab, Nav } from 'react-bootstrap';

// components
import SubscribersChart from './SubscribersChart';
import ViewsChart from './ViewsChart';
import BounceRateChart from './BounceRateChart';

const Overview = () => {
    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle as="a" className="cursor-pointer arrow-none p-0 text-dark">
                        <i className="uil uil-ellipsis-v fs-13"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <i className="uil uil-refresh me-2"></i>Refresh Report
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <i className="uil uil-export me-2"></i>Export Report
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h4 className="card-title header-title">Overviews</h4>

                <Tab.Container id="left-tabs-example" defaultActiveKey="total-views">
                    <Row>
                        <Col>
                            <Nav as="ul" variant="tabs" className="d-block d-sm-flex">
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="subscribers">
                                        <h6 className="text-muted fs-14">Subscribers</h6>
                                        <h3>786</h3>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="total-views">
                                        <h6 className="text-muted fs-14">Total views</h6>
                                        <h3>1.356</h3>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="bounce-rate">
                                        <h6 className="text-muted fs-14">Bounce rate</h6>
                                        <h3>87%</h3>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Tab.Content>
                                <Tab.Pane eventKey="subscribers">
                                    <div dir="ltr">
                                        <SubscribersChart />
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="total-views">
                                    <div dir="ltr">
                                        <ViewsChart />
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="bounce-rate">
                                    <BounceRateChart />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Card.Body>
        </Card>
    );
};

export default Overview;
