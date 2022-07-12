import React from 'react';
import { Row, Col, Card, Button, ButtonGroup, Badge, ProgressBar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import FeatherIcons from 'feather-icons-react';

// dummy data
import { projects, ProjectTypes } from './data';

// single project
const SingleProject = (props: { project: ProjectTypes }) => {
    const project = props.project || {};
    const variant = project.state === 'Completed' ? 'success' : 'warning';
    const displayCount = 3;

    let modifiedTeamMembers;

    if (project.teamMembers.length <= displayCount || project.teamMembers.length - displayCount === 1) {
        modifiedTeamMembers = project.teamMembers;
    } else {
        modifiedTeamMembers = project.teamMembers.filter((m, index) => index < displayCount);
    }

    return (
        <Card>
            <Card.Body>
                <Badge bg={variant} className="float-end">
                    {project.state}
                </Badge>
                <p className={classNames('text-' + variant, 'text-uppercase', 'fs-12', 'mb-2')}>{project.technology}</p>
                <h5>
                    <Link to="#" className="text-dark">
                        {project.title}
                    </Link>
                </h5>
                <p className="text-muted mb-4">{project.shortDesc}</p>

                <div>
                    {(modifiedTeamMembers || []).map((member, index) => {
                        return (
                            <Link key={index} to="#">
                                {member.image && (
                                    <img src={member.image} className="avatar-sm m-1 rounded-circle" alt="" />
                                )}
                                {member.variant && (
                                    <div className="avatar-sm fw-bold d-inline-block m-1">
                                        <span
                                            className={classNames(
                                                'avatar-title',
                                                'rounded-circle',
                                                'bg-soft-' + member.variant,
                                                'text-' + member.variant
                                            )}>
                                            {member.name[0]}
                                        </span>
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                    {project.teamMembers.length > modifiedTeamMembers.length && (
                        <Link to="#">
                            <div className="avatar-sm fw-bold d-inline-block m-1">
                                <span className="avatar-title rounded-circle bg-soft-warning text-warning">
                                    {project.teamMembers.length - displayCount}+
                                </span>
                            </div>
                        </Link>
                    )}
                </div>
            </Card.Body>
            <Card.Body className="border-top">
                <Row className="align-items-center">
                    <Col sm="auto">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item pe-2">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip id="button-tooltip">Due date</Tooltip>}>
                                    <Link to="#" className="text-muted d-inline-block">
                                        {' '}
                                        <i className="uil uil-calender me-1"></i> {project.endDate}{' '}
                                    </Link>
                                </OverlayTrigger>
                            </li>
                            <li className="list-inline-item pe-2">
                                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip">Tasks</Tooltip>}>
                                    <Link to="#" className="text-muted d-inline-block">
                                        {' '}
                                        <i className="uil uil-bars me-1"></i> {project.totalTasks}{' '}
                                    </Link>
                                </OverlayTrigger>
                            </li>
                            <li className="list-inline-item">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip id="button-tooltip">Comments</Tooltip>}>
                                    <Link to="#" className="text-muted d-inline-block">
                                        {' '}
                                        <i className="uil uil-comments-alt me-1"></i> {project.totalComments}{' '}
                                    </Link>
                                </OverlayTrigger>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={{ offset: 1 }}>
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id="button-tooltip">{project.progress}% completed</Tooltip>}>
                            <ProgressBar
                                now={project.progress}
                                variant={variant}
                                className="mt-4 mt-sm-0"
                                style={{ height: '5px' }}
                            />
                        </OverlayTrigger>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

const Projects = () => {
    return (
        <>
            <Row>
                <Col xs={12}>
                    <div className="page-title-box">
                        <h4 className="page-title">Projects List</h4>
                        <div className="page-title-right">
                            <div className="mt-2 mt-md-0">
                                <Button variant="danger" className="me-4 mb-2 mb-sm-0">
                                    <i className="uil-plus me-1"></i> Create Project
                                </Button>
                                <ButtonGroup>
                                    <Button variant="primary" className="mb-2 mb-sm-0">
                                        All
                                    </Button>
                                </ButtonGroup>
                                <ButtonGroup className="ms-md-1">
                                    <Button variant="white" className="mb-2 mb-sm-0">
                                        Ongoing
                                    </Button>
                                    <Button variant="white" className="mb-2 mb-sm-0">
                                        Finished
                                    </Button>
                                </ButtonGroup>
                                <ButtonGroup className="ms-2 d-none d-sm-inline-block me-1">
                                    <Button>
                                        <i className="uil uil-apps"></i>
                                    </Button>
                                </ButtonGroup>
                                <ButtonGroup className="d-none d-sm-inline-block">
                                    <Button variant="white">
                                        <i className="uil uil-align-left-justify"></i>
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                {(projects || []).map((project, i) => {
                    return (
                        <Col xl={4} md={6} key={'proj-' + project.id}>
                            <SingleProject project={project} />
                        </Col>
                    );
                })}
            </Row>

            <Row className="mb-3 mt-2">
                <Col xs={12}>
                    <div className="text-center">
                        <Button variant="white">
                            <FeatherIcons icon="loader" className="icon-dual icon-xs me-2" />
                            Load more
                        </Button>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Projects;
