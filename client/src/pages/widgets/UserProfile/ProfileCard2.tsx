import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';

// images
import coverImg from '../../../assets/images/covers/2.jpg';
import avatar from '../../../assets/images/users/avatar-7.jpg';

const ProfileCard2 = () => {
    return (
        <Card className="profile-widget">
            <img src={coverImg} alt="Shreyu" className="card-img-top" />
            <Dropdown className="card-action float-end" align="end">
                <Dropdown.Toggle as="a" className="cursor-pointer arrow-none">
                    <i className="uil uil-ellipsis-v fs-16 text-white"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <i className="uil uil-edit-alt me-2"></i>Edit
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <i className="uil uil-refresh me-2"></i>Refresh
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="text-danger">
                        <i className="uil uil-trash me-2"></i>Delete
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Card.Body className="text-center p-0">
                <div className="profile-info pb-3">
                    <img src={avatar} alt="" className="img-thumbnail avatar-xl rounded-circle" />
                    <h4 className="mt-2 mb-0">Shreyu N</h4>
                    <h6 className="text-muted fw-normal mt-2 mb-3">User Experience Specialist</h6>
                    <button type="button" className="btn btn-primary btn-sm me-1">
                        Follow
                    </button>
                    <button type="button" className="btn btn-white btn-sm">
                        Message
                    </button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProfileCard2;
