import React, { useState } from 'react';
import { Card, Toast } from 'react-bootstrap';

// images
import logo from '../../assets/images/logo-sm.png';

const Toasts = () => {
    const [show, setShow] = useState<boolean>(true);
    const [show2, setShow2] = useState<boolean>(true);
    const [show3, setShow3] = useState<boolean>(true);
    const [show4, setShow4] = useState<boolean>(true);

    return (
        <Card>
            <Card.Body>
                <div>
                    <h5 className="header-title mb-1 mt-0">Toasts</h5>
                    <p className="sub-header">
                        Push notifications to your visitors with a toast, a lightweight and easily customizable alert
                        message
                    </p>

                    <div>
                        <Toast className="mb-2" onClose={() => setShow(false)} show={show} autohide>
                            <Toast.Header>
                                <img src={logo} alt="brand-logo" height="18" className="me-1" />
                                <strong className="me-auto">Shreyu</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        </Toast>

                        <Toast className="mb-2" onClose={() => setShow2(false)} show={show2} autohide>
                            <Toast.Header>
                                <img src={logo} alt="brand-logo" height="18" className="me-1" />
                                <strong className="me-auto">Shreyu</strong>
                                <small>12 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        </Toast>

                        <Toast className="mb-2" onClose={() => setShow3(false)} show={show3} autohide>
                            <Toast.Header>
                                <img src={logo} alt="brand-logo" height="18" className="me-1" />
                                <strong className="me-auto">Shreyu</strong>
                                <small>15 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        </Toast>

                        <Toast onClose={() => setShow4(false)} show={show4} autohide>
                            <Toast.Header>
                                <img src={logo} alt="brand-logo" height="18" className="me-1" />
                                <strong className="me-auto">Shreyu</strong>
                                <small>21 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        </Toast>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Toasts;
