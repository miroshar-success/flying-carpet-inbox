import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import img1 from '../../../assets/images/users/avatar-2.jpg';

interface VoicecallModalProps {
    show: boolean;
    handleClose: () => void;
}

const VoicecallModal = ({ show, handleClose }: VoicecallModalProps) => {
    return (
        <Modal centered size="sm" show={show} onHide={handleClose} contentClassName="voice-call">
            <Modal.Header className="mt-5 justify-content-center">
                <div className="voice-call-head">
                    <img src={img1} className="rounded-circle" alt="" />
                </div>
            </Modal.Header>
            <Modal.Body className="pt-0 text-center">
                <p className="mb-5">Calling...</p>

                <div className="voice-call-action pt-4 pb-2">
                    <ul className="list-inline">
                        <li className="list-inline-item avatar-sm fw-bold me-2">
                            <Link to="#" className="avatar-title rounded-circle bg-soft-secondary text-dark fs-16">
                                <i className="bi bi-mic-mute"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item avatar fw-bold me-2" data-bs-dismiss="modal">
                            <Link to="#" className="avatar-title rounded-circle bg-danger text-white fs-18">
                                <i className="bi bi-telephone"></i>
                            </Link>
                        </li>
                        <li className="list-inline-item avatar-sm fw-bold">
                            <Link to="#" className="avatar-title rounded-circle bg-soft-secondary text-dark fs-16">
                                <i className="bi bi-volume-up"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default VoicecallModal;
