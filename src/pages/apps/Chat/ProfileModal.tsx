import React, { useState } from 'react';
import { Card, Col, Collapse, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import img1 from '../../../assets/images/users/avatar-5.jpg';

interface ProfileModalProps {
    show: boolean;
    handleClose: () => void;
}

const ProfileModal = ({ show, handleClose }: ProfileModalProps) => {
    const [showAbout, setShowAbout] = useState<boolean>(false);
    const [showOtherInfo, setShowOtherInfo] = useState<boolean>(false);

    return (
        <Modal centered show={show} onHide={handleClose}>
            <div className=" m-2">
                <Modal.Header closeButton></Modal.Header>
                <div className="text-center mb-3">
                    <img src={img1} className="rounded-circle avatar-lg" height="48" alt="Rhonda D" />
                </div>
                <div className="text-center mb-3">
                    <h5 className="mt-0 mb-0 fs-18">Rhonda D</h5>
                </div>
                <div className="text-center mb-3">
                    <div
                        className="avatar-sm fw-bold d-inline-block me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#voicecall"
                        data-bs-dismiss="modal">
                        <Link to="$" className="avatar-title rounded-circle border border-secondary text-dark">
                            <i className="bi bi-telephone"></i>
                        </Link>
                    </div>
                    <div
                        className="avatar-sm fw-bold d-inline-block me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#videocall"
                        data-bs-dismiss="modal">
                        <Link to="$" className="avatar-title rounded-circle border border-secondary text-dark">
                            <i className="bi bi-camera-video"></i>
                        </Link>
                    </div>
                    <div className="avatar-sm fw-bold d-inline-block me-2" data-bs-dismiss="modal" aria-label="Close">
                        <Link to="$" className="avatar-title rounded-circle border border-secondary text-dark">
                            <i className="bi bi-chat-left-dots"></i>
                        </Link>
                    </div>
                </div>

                <Modal.Body>
                    <div className="accordion custom-accordionwitharrow">
                        <Card className="mb-1 shadow-none border-0">
                            <Link to="#" onClick={() => setShowAbout(!showAbout)} className="text-dark">
                                <Card.Header className="border-0">
                                    <h5 className="m-0 fs-16">
                                        About
                                        <i className="uil uil-angle-down float-end accordion-arrow"></i>
                                    </h5>
                                </Card.Header>
                            </Link>

                            <Collapse in={showAbout}>
                                <div>
                                    <Card.Body className="pt-0 text-muted">
                                        <Row>
                                            <Col xs={4} className="p-2">
                                                <i className="bi bi-telephone fs-18 me-2"></i>Phone
                                            </Col>
                                            <Col xs={8} className="p-2 border-bottom">
                                                (415) 281 - 1649
                                            </Col>
                                            <Col xs={4} className="p-2">
                                                <i className="bi bi-envelope fs-18 me-2"></i>Email
                                            </Col>
                                            <Col xs={8} className="p-2 border-bottom">
                                                shreyu.abc@gmail.com
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </div>
                            </Collapse>
                        </Card>

                        <Card className="mb-1 shadow-none border-0">
                            <Link to="#" onClick={() => setShowOtherInfo(!showOtherInfo)} className="text-dark">
                                <Card.Header className="border-0">
                                    <h5 className="m-0 fs-16">
                                        Media, Links and Docs
                                        <i className="uil uil-angle-down float-end accordion-arrow"></i>
                                    </h5>
                                </Card.Header>
                            </Link>

                            <Collapse in={showOtherInfo}>
                                <div>
                                    <Card.Body className="pt-0 text-muted">
                                        <div className="d-inline-block me-2">
                                            <i className="bi bi-file-earmark-pdf h2"></i>
                                        </div>
                                        <div className="d-inline-block me-2">
                                            <i className="bi bi-file-earmark-word h2"></i>
                                        </div>
                                        <div className="d-inline-block me-2">
                                            <i className="bi bi-images h2"></i>
                                        </div>
                                        <div className="d-inline-block me-2">
                                            <i className="bi bi-file-earmark-ppt h2"></i>
                                        </div>
                                    </Card.Body>
                                </div>
                            </Collapse>
                        </Card>
                    </div>
                </Modal.Body>
            </div>
        </Modal>
    );
};

export default ProfileModal;
