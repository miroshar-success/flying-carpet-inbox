import React,{useState} from 'react';
import { Modal } from 'react-bootstrap';
import { Row, Col, Card, Form, FloatingLabel, InputGroup, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { APICore } from "../../../helpers/api/apiCore";

// images
import img1 from '../../../assets/images/users/avatar-2.jpg';

interface VoicecallModalProps {
    show: boolean;
    handleClose: () => void;
}

const VoicecallModal = ({ show, handleClose }: VoicecallModalProps) => {
    const apicore = new APICore;
    const user = apicore.getLoggedInUser();

    const [instance, setInstance] = useState<String>("");
    const [token,setToken] = useState<String>("");
    const [flag, setflag] = useState<boolean>(false);
    const [mes , setmes] = useState<String>("");

    const insertToken = () => {
        const data = {instance : instance, token : token};
        fetch("http://admin.fbmnow.com/api/apis/insertAPI", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          })
          .then(res => res.json())
          .then(json => {
            setflag(true);
            setmes(json.message);
          })
    }

    return (
        <Modal centered size="sm" show={show} onHide={handleClose} contentClassName="voice-call">
            <Modal.Header className=" justify-content-center">
                <div className="voice-call-head">
                    <p>Please Input Token</p>
                </div>
            </Modal.Header>
            <Modal.Body className="pt-0 text-left">
                {
                    flag == true ? <Alert>{mes}</Alert> : ""
                }
                
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="instance">Instance</Form.Label>
                    <Form.Control type="text" name="instance" id="instance" placeholder="Enter instance"  onChange={e => setInstance(e.target.value)}/>
                    {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="token">Token(API Key)</Form.Label>
                    <Form.Control type="text" name="token" id="instance" placeholder="Enter token"  onChange={e => setToken(e.target.value)} />
                    {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
                </Form.Group>
                
                <div className="voice-call-action pb-2 text-center">
                    <ul className="list-inline">
                        {/* <li className="list-inline-item avatar-sm fw-bold me-2">
                            <Link to="#" className="avatar-title rounded-circle bg-soft-secondary text-dark fs-16">
                                <i className="bi bi-mic-mute"></i>
                            </Link>
                        </li> */}
                        <li className="list-inline-item avatar fw-bold me-2" data-bs-dismiss="modal">
                            <Button  className="rounded-pill" onClick={insertToken}>
                                <i className="bi-plus-circle-dotted"></i>
                            </Button>
                        </li>
                        {/* <li className="list-inline-item avatar-sm fw-bold">
                            <Link to="#" className="avatar-title rounded-circle bg-soft-secondary text-dark fs-16">
                                <i className="bi bi-volume-up"></i>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default VoicecallModal;
