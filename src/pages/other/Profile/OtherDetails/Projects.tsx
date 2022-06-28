import React from 'react';
import { Badge, Card, Col, OverlayTrigger, ProgressBar, Row, Tooltip } from 'react-bootstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// types
import { ProjectTypes } from '../../../apps/Projects/data';

interface ProjectsProps {
    projects: ProjectTypes[];
}

const Projects = ({ projects }: ProjectsProps) => {
    return (
        <>
            <h4 className="mt-1 fs-15 fw-bold text-uppercase">Projects</h4>

            <Row className="mt-3">
                {(projects || []).map((project, index) => {
                    const variant = project.state === 'Completed' ? 'success' : 'warning';
                    // team members to display
                    const displayCount = 3;
                    let modifiedTeamMembers;

                    if (project.teamMembers.length <= displayCount || project.teamMembers.length - displayCount === 1) {
                        modifiedTeamMembers = project.teamMembers;
                    } else {
                        modifiedTeamMembers = project.teamMembers.filter((m, index) => index < displayCount);
                    }

                    return (
                        <Col key={index} xxl={4} md={6}>
                            <Card className="border">
                                <Card.Body>
                                    <Badge bg={variant} className="float-end">
                                        {project.state}
                                    </Badge>
                                    <p className={classNames('text-' + variant, 'text-uppercase', 'fs-12', 'mb-2')}>
                                        {project.technology}
                                    </p>

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
                                                        <img
                                                            src={member.image}
                                                            className="avatar-sm m-1 rounded-circle"
                                                            alt=""
                                                        />
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
                                    <div>
                                        <div>
                                            <ul className="list-inline">
                                                <li className="list-inline-item pe-2">
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={<Tooltip id="due-date">Due date</Tooltip>}>
                                                        <Link to="#" className="text-muted d-inline-block">
                                                            <i className="uil uil-calender me-1"></i>
                                                            {project.endDate}
                                                        </Link>
                                                    </OverlayTrigger>
                                                </li>
                                                <li className="list-inline-item pe-2">
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={<Tooltip id="tasks">Tasks</Tooltip>}>
                                                        <Link to="#" className="text-muted d-inline-block">
                                                            <i className="uil uil-bars me-1"></i>
                                                            {project.totalTasks}
                                                        </Link>
                                                    </OverlayTrigger>
                                                </li>
                                                <li className="list-inline-item">
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={<Tooltip id="comments">Comments</Tooltip>}>
                                                        <Link to="#" className="text-muted d-inline-block">
                                                            <i className="uil uil-comments-alt me-1"></i>
                                                            {project.totalComments}
                                                        </Link>
                                                    </OverlayTrigger>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="pt-2">
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={
                                                    <Tooltip id="progress-tooltip">
                                                        {project.progress}% completed
                                                    </Tooltip>
                                                }>
                                                <ProgressBar
                                                    now={project.progress}
                                                    variant={variant}
                                                    className="mt-4 mt-sm-0"
                                                    style={{ height: '5px' }}
                                                />
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

export default Projects;
