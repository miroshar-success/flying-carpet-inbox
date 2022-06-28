import React from 'react';
import { Tab, Row, Col, Card, Nav } from 'react-bootstrap';

// components
import AllRecentFiles from './AllRecentFiles';

// dummy data
import { RecentFileTypes } from './data';

interface RecentProps {
    recentFiles: RecentFileTypes[];
}

const Recent = ({ recentFiles }: RecentProps) => {
    return (
        <Row>
            <Col xs={12}>
                <h6 className="fs-18">Recent</h6>

                <Card className="border-0">
                    <Card.Body>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="all">
                            <Nav as="ul" variant="tabs">
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="all">
                                        <span className="d-block d-sm-none">
                                            <i className="uil-home-alt"></i>
                                        </span>
                                        <span className="d-none d-sm-block">All</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link>
                                        <span className="d-block d-sm-none">
                                            <i className="bi bi-file-earmark"></i>
                                        </span>
                                        <span className="d-none d-sm-block">Document</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link>
                                        <span className="d-block d-sm-none">
                                            <i className="bi bi-file-earmark-music"></i>
                                        </span>
                                        <span className="d-none d-sm-block">Music</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link>
                                        <span className="d-block d-sm-none">
                                            <i className="bi bi-card-image"></i>
                                        </span>
                                        <span className="d-none d-sm-block">Picture</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link>
                                        <span className="d-block d-sm-none">
                                            <i className="bi bi-card-list"></i>
                                        </span>
                                        <span className="d-none d-sm-block">Other</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content className="text-muted pt-2">
                                <Tab.Pane eventKey="all">
                                    <AllRecentFiles recentFiles={recentFiles} />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Recent;
