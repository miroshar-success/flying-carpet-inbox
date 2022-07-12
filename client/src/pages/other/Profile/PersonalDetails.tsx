import React from 'react';
import { Card, ProgressBar, Button } from 'react-bootstrap';

// types
import { UserInfoTypes } from './data';

interface PersonalDetailsProps {
    userInfo: UserInfoTypes;
}

const PersonalDetails = ({ userInfo }: PersonalDetailsProps) => {
    return (
        <Card>
            <Card.Body>
                <div className="text-center mt-2">
                    <img src={userInfo.avatar} alt="" className="avatar-lg rounded-circle" />
                    <h4 className="mt-2 mb-0">{userInfo.userName}</h4>
                    <h6 className="text-muted fw-normal mt-2 mb-0">{userInfo.designation}</h6>
                    <h6 className="text-muted fw-normal mt-1 mb-3">{userInfo.location}</h6>

                    <ProgressBar
                        variant="success"
                        now={userInfo.profileProgress}
                        label={
                            <span className="fs-12 fw-bold">
                                Your Profile is <span className="fs-11">{userInfo.profileProgress}%</span> completed
                            </span>
                        }
                        className="mb-3"
                        style={{ height: '14px' }}
                    />

                    <Button variant="primary" className="btn-sm me-1">
                        Follow
                    </Button>
                    <Button variant="white" className="btn-sm">
                        Message
                    </Button>
                </div>

                {/* profile */}
                <div className="mt-4 pt-2 border-top">
                    <h4 className="mb-3 fs-15">About</h4>
                    <p className="text-muted mb-3">{userInfo.about}</p>
                </div>
                <div className="mt-3 pt-2 border-top">
                    <h4 className="mb-2 fs-15">Contact Information</h4>
                    <div className="table-responsive">
                        <table className="table table-borderless mb-0 text-muted">
                            <tbody>
                                <tr>
                                    <th scope="row">Email</th>
                                    <td>{userInfo.email}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Phone</th>
                                    <td>{userInfo.phone}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Address</th>
                                    <td>{userInfo.address}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-2 pt-2 border-top">
                    <h4 className="mb-3 fs-15">Skills</h4>
                    {(userInfo.skills || []).map((skill, index) => {
                        return (
                            <label key={index} className="badge badge-soft-primary me-1">
                                {' '}
                                {skill}
                            </label>
                        );
                    })}
                </div>
            </Card.Body>
        </Card>
    );
};

export default PersonalDetails;
