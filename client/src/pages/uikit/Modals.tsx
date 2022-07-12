import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StandardModal = () => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <h5 className="fs-16 mb-3">Examples</h5>
            <div className="button-list">
                <Button variant="primary" onClick={handleShow}>
                    Standard modal
                </Button>
            </div>

            {/* standard modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header onHide={handleClose} closeButton>
                    <Modal.Title as="h5">Modal Heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Text in a modal</h6>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                    <hr />
                    <h6>Overflowing text to show scroll behavior</h6>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                        augue laoreet rutrum faucibus dolor auctor.
                    </p>
                    <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={handleClose}>
                        Close
                    </Button>{' '}
                    <Button variant="primary" onClick={handleClose}>
                        Save changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

const ModalSizes = () => {
    const [show, setShow] = useState<boolean>(false);
    const [size, setSize] = useState<'sm' | 'lg' | 'xl'>();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /**
     * Opens large modal
     */
    const openModalWithSize = (size: 'sm' | 'lg' | 'xl') => {
        setSize(size);
        handleShow();
    };

    return (
        <>
            <div className="mt-4 mt-xl-0">
                <h5 className="fs-16 mb-3">Modal sizes</h5>

                <div className="button-list">
                    <Button variant="secondary" onClick={() => openModalWithSize('xl')}>
                        Extra large modal
                    </Button>
                    <Button variant="success" onClick={() => openModalWithSize('lg')}>
                        Large modal
                    </Button>
                    <Button variant="info" onClick={() => openModalWithSize('sm')}>
                        Small Modal
                    </Button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size={size}>
                <Modal.Header onHide={handleClose} closeButton>
                    <Modal.Title as="h5">Modal Heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </>
    );
};

const OtherExmaples = () => {
    const [showCenteredModal, setShowCenteredModal] = useState<boolean>(false);
    const [showScrollableModal, setShowScrollableModal] = useState<boolean>(false);
    const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

    return (
        <>
            <div className="mt-4 mt-xl-0">
                <h5 className="fs-16 mb-3">Other exmaples</h5>

                <div className="button-list">
                    <Button variant="warning" onClick={() => setShowCenteredModal(true)}>
                        Center modal
                    </Button>
                    <Button variant="dark" onClick={() => setShowScrollableModal(true)}>
                        Scrollable
                    </Button>
                    <Button variant="danger" onClick={() => setShowErrorModal(true)}>
                        Error
                    </Button>
                </div>
            </div>

            {/* Centered Modal */}
            <Modal show={showCenteredModal} onHide={() => setShowCenteredModal(false)} centered>
                <Modal.Header onHide={() => setShowCenteredModal(false)} closeButton>
                    <Modal.Title as="h5">Center modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Overflowing text to show scroll behavior</h5>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    <p className="mb-0">
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                        augue laoreet rutrum faucibus dolor auctor.
                    </p>
                </Modal.Body>
            </Modal>

            {/* Scrollable Modal */}
            <Modal show={showScrollableModal} onHide={() => setShowScrollableModal(false)} scrollable>
                <Modal.Header onHide={() => setShowScrollableModal(false)} closeButton>
                    <Modal.Title as="h5">Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                        augue laoreet rutrum faucibus dolor auctor.
                    </p>
                    <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                    </p>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                        augue laoreet rutrum faucibus dolor auctor.
                    </p>
                    <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                    </p>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                        augue laoreet rutrum faucibus dolor auctor.
                    </p>
                    <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                    </p>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                        augue laoreet rutrum faucibus dolor auctor.
                    </p>
                    <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                    </p>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                        augue laoreet rutrum faucibus dolor auctor.
                    </p>
                    <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                    </p>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                        augue laoreet rutrum faucibus dolor auctor.
                    </p>
                    <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={() => setShowScrollableModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>

            {/* Error Modal */}
            <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)} centered>
                <Modal.Header onHide={() => setShowErrorModal(false)} closeButton>
                    <Modal.Title as="h5">Error modal</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <i className="uil-no-entry text-warning display-3"></i>
                    <h4 className="text-danger mt-4">Page not Found</h4>
                    <p className="w-75 mx-auto text-muted">
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    </p>
                    <div className="mt-4">
                        <Link
                            to="#"
                            className="btn btn-outline-primary rounded-pill width-md"
                            onClick={() => setShowErrorModal(false)}>
                            <i className="uil uil-arrow-left me-1"></i> Back
                        </Link>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

const Modals = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="mt-0 mb-1 header-title">Modals</h4>

                <p className="sub-header">A rendered modal with header, body, and set of actions in the footer.</p>

                <Row>
                    <Col xl={4}>
                        <StandardModal />
                    </Col>
                    <Col xl={4}>
                        <ModalSizes />
                    </Col>
                    <Col xl={4}>
                        <OtherExmaples />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Modals;
