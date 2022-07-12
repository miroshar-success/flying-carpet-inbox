import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

// images
import avatar from '../../../assets/images/users/avatar-7.jpg';

const ProfileCard1 = () => {
    return (
        <Card>
            <Card.Body className="pb-0">
                <div className="text-center mt-2">
                    <img src={avatar} alt="" className="avatar-xl rounded-circle" />
                    <h4 className="mt-2 mb-0">Shreyu N</h4>
                    <h6 className="text-muted fw-normal mt-2 mb-3">User Experience Specialist</h6>

                    <Button className="btn-sm me-1">Follow</Button>
                    <Button variant="" className="btn-white btn-sm">
                        Message
                    </Button>

                    <div className="mt-3 pt-3 border-top text-start">
                        <p className="text-muted mb-2">
                            Hi I'm Shreyu. I am user experience and user interface designer. I have been working on UI &
                            UX since last 10 years.
                        </p>

                        <p className="mb-2">
                            <Badge bg="" className="badge-soft-success me-1">
                                UI & UX
                            </Badge>
                            <Badge bg="" className="badge-soft-success">
                                Frontend Development
                            </Badge>
                        </p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProfileCard1;
