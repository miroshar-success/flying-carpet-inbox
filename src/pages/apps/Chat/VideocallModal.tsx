import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import img1 from '../../../assets/images/users/avatar-2.jpg';

interface VideocallModalProps {
    show: boolean;
    handleClose: () => void;
}

const VideocallModal = ({ show, handleClose }: VideocallModalProps) => {
    return (
        <Modal centered size="sm" show={show} onHide={handleClose} contentClassName="video-call">
            <Modal.Header className="mb-5 justify-content-end">
                <div className="video-call-head">
                    <img src={img1} className="rounded" alt="Rhonda D" />
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="video-call-action text-center pt-4 pb-2">
                    <ul className="list-inline">
                        <li className="list-inline-item avatar-sm fw-bold me-2">
                            <Link to="#" className="avatar-title rounded-circle bg-soft-light text-white fs-16">
                                <i className="bi bi-mic-mute"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item avatar fw-bold me-2">
                            <Link to="#" className="avatar-title rounded-circle bg-danger text-white fs-18">
                                <i className="bi bi-telephone" data-bs-dismiss="modal"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item avatar-sm fw-bold">
                            <Link to="#" className="avatar-title rounded-circle bg-soft-light text-white fs-16">
                                <i className="bi bi-camera-video"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default VideocallModal;
