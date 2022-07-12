import React, { useState } from 'react';
import { Row, Col, Card, Badge, ButtonGroup, Button, Nav, Tab } from 'react-bootstrap';

// components
import Statistics from './Statistics';
import AboutProject from './AboutProject';
import Comments from './Comments';
import Attachments from './Attachments';
import Activities from './Activities';

// images
import avatar1 from '../../../../assets/images/users/avatar-9.jpg';
import avatar2 from '../../../../assets/images/users/avatar-10.jpg';
import avatar3 from '../../../../assets/images/users/avatar-1.jpg';
import avatar4 from '../../../../assets/images/users/avatar-3.jpg';

// dummy data
import { activity, ProjectTypes } from '../data';

const ProjectDetail = () => {
    const project: ProjectTypes = {
        id: 3,
        title: 'Landing page Design',
        state: 'Completed',
        technology: 'Web Design',
        shortDesc: "You need to be sure there isn't anything embarrassing hidden in the middle of text",
        endDate: '21 Nov, 2020',
        totalTasks: 42,
        totalComments: 65,
        teamMembers: [
            {
                image: avatar1,
                name: 'Mat Helme',
            },
            {
                image: avatar2,
                name: 'Michael Zenaty',
            },
            {
                image: avatar3,
                name: 'James Anderson',
            },
            {
                image: avatar4,
                name: 'Mat Helme',
            },
        ],
        progress: 100,
        startDate: '15 July, 2019',
        totalBudget: '$13,250',
        owner: 'Rick Perry',
    };
    const [activeTab, setactiveTab] = useState<string>('comments');

    //handles tab activation
    const handleSelect = (eventKey: string | null) => {
        setactiveTab(eventKey!);
    };

    return (
        <>
            <Row>
                <Col xs={12}>
                    <div className="page-title-box">
                        <h4 className="page-title">
                            Project: {project.title}{' '}
                            <Badge bg="success" className="fs-13 fw-normal me-1">
                                {project.state}
                            </Badge>
                            <Badge bg="" className="badge-soft-primary fs-13 fw-normal">
                                {project.technology}
                            </Badge>
                        </h4>
                        <div className="page-title-right">
                            <ButtonGroup className="ms-2 d-none d-sm-inline-block me-1">
                                <Button variant="soft-primary" className="btn btn-soft-primary btn-sm">
                                    <i className="uil uil-edit me-1"></i>Edit
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup className="d-none d-sm-inline-block">
                                <Button className="btn btn-soft-danger btn-sm">
                                    <i className="uil uil-trash-alt me-1"></i>Delete
                                </Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body className="p-0">
                            <h6 className="card-title border-bottom p-3 mb-0 header-title">Project Overview</h6>
                            <Row className="py-1">
                                <Col md={6} xl={3}>
                                    <Statistics icon="grid" stats="210" description="Total Tasks" />
                                </Col>
                                <Col sm={6} xl={3}>
                                    <Statistics icon="check-square" stats="121" description="Total Tasks Completed" />
                                </Col>
                                <Col sm={6} xl={3}>
                                    <Statistics icon="users" stats="12" description="Total Team Size" />
                                </Col>
                                <Col sm={6} xl={3}>
                                    <Statistics icon="clock" stats="2500" description="Total Hours Spent" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={8}>
                    <AboutProject project={project} />

                    <Card>
                        <Card.Body>
                            <div className="">
                                <Nav
                                    as="ul"
                                    variant="pills"
                                    activeKey={activeTab}
                                    className="navtab-bg p-1"
                                    onSelect={handleSelect}>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="comments">Discussions</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="attac-file">Files/Resources</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="comments" id="comments" active={activeTab === 'comments'}>
                                        <Comments />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="attac-file" id="attac-file" active={activeTab === 'attac-file'}>
                                        <Attachments />
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={4}>
                    <Activities activity={activity} />
                </Col>
            </Row>
        </>
    );
};

export default ProjectDetail;
