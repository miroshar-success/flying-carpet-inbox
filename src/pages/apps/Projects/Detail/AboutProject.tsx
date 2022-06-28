import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

// components
import TeamMembers from './TeamMembers';

// types
import { ProjectTypes } from '../data';

interface AboutProjectProps {
    project: ProjectTypes;
}

const AboutProject = ({ project }: AboutProjectProps) => {
    return (
        <Card>
            <Card.Body>
                <h6 className="mt-0 header-title">About Project</h6>

                <div className="text-muted mt-3">
                    <p>
                        To an English person, it will seem like simplified English, as a skeptical Cambridge friend of
                        mine told me what Occidental is. The European languages are members of the same family. Their
                        separate existence is a myth.
                    </p>
                    <p>
                        Everyone realizes why a new common language would be desirable: one could refuse to pay
                        expensive translators. To achieve this, it would be necessary to have uniform grammar,
                        pronunciation and more common words. If several languages coalesce, the grammar of the resulting
                        language is more simple and regular than that of the individual languages.
                    </p>
                    <ul className="ps-4 mb-4">
                        <li>Quis autem vel eum iure</li>
                        <li>Ut enim ad minima veniam</li>
                        <li>Et harum quidem rerum</li>
                        <li>Nam libero cum soluta</li>
                    </ul>

                    <div className="tags">
                        <h6 className="fw-bold">Tags</h6>
                        <div className="text-uppercase">
                            <Link to="#" className="badge badge-soft-primary me-2">
                                Html
                            </Link>
                            <Link to="#" className="badge badge-soft-primary me-2">
                                Css
                            </Link>
                            <Link to="#" className="badge badge-soft-primary me-2">
                                Bootstrap
                            </Link>
                            <Link to="#" className="badge badge-soft-primary me-2">
                                JQuery
                            </Link>
                        </div>
                    </div>

                    <Row>
                        <Col lg={3} md={6}>
                            <div className="mt-4">
                                <p className="mb-2 text-uppercase fs-13 fw-bold">
                                    <i className="uil-calender text-danger"></i> Start Date
                                </p>
                                <h5 className="fs-16">{project.startDate}</h5>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="mt-4">
                                <p className="mb-2 text-uppercase fs-13 fw-bold">
                                    <i className="uil-calendar-slash text-danger"></i> Due Date
                                </p>
                                <h5 className="fs-16">{project.endDate}</h5>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="mt-4">
                                <p className="mb-2 text-uppercase fs-13 fw-bold">
                                    <i className="uil-dollar-alt text-danger"></i> Budget
                                </p>
                                <h5 className="fs-16">{project.totalBudget}</h5>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="mt-4">
                                <p className="mb-2 text-uppercase fs-13 fw-bold">
                                    <i className="uil-user text-danger"></i> Owner
                                </p>
                                <h5 className="fs-16">{project.owner}</h5>
                            </div>
                        </Col>
                    </Row>

                    <div className="assign team mt-4">
                        <TeamMembers teamMembers={project.teamMembers} />
                    </div>

                    <div className="mt-4">
                        <h6 className="fw-bold">Attached Files</h6>

                        <Row>
                            <Col xl={4} md={6}>
                                <div className="p-2 border rounded mb-2">
                                    <div className="d-flex">
                                        <div className="avatar-sm fw-bold me-3 flex-shrink-0">
                                            <span className="avatar-title rounded bg-soft-primary text-primary">
                                                <i className="uil-file-plus-alt fs-18"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link to="#" className="d-inline-block mt-2">
                                                Landing 1.psd
                                            </Link>
                                        </div>
                                        <div className="float-end mt-1">
                                            <Link to="#" className="p-2">
                                                <i className="uil-download-alt fs-18"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} md={6}>
                                <div className="p-2 border rounded mb-2">
                                    <div className="d-flex">
                                        <div className="avatar-sm fw-bold me-3 flex-shrink-0">
                                            <span className="avatar-title rounded bg-soft-primary text-primary">
                                                <i className="uil-file-plus-alt fs-18"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link to="#" className="d-inline-block mt-2">
                                                Landing 2.psd
                                            </Link>
                                        </div>
                                        <div className="float-end mt-1">
                                            <Link to="#" className="p-2">
                                                <i className="uil-download-alt fs-18"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default AboutProject;
