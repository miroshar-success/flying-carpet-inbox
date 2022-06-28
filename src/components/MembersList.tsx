import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';

export interface MembersTypes {
    id: number;
    name: string;
    avatar: string;
    designation: string;
}

interface MembersListProps {
    title: string;
    members: MembersTypes[];
}

const MembersList = ({ title, members }: MembersListProps) => {
    return (
        <Card>
            <Card.Body>
                <h6 className="header-title mb-3">{title}</h6>

                {(members || []).map((item, index) => {
                    return (
                        <div key={index} className="d-flex mt-1 border-top pt-2">
                            <img src={item.avatar} className="avatar rounded me-3" alt="" />
                            <div className="flex-grow-1">
                                <h5 className="mt-1 mb-0 fs-15">{item.name}</h5>
                                <h6 className="text-muted fw-normal mt-1 mb-2">{item.designation}</h6>
                            </div>

                            <Dropdown className="align-self-center float-end" align="end">
                                <Dropdown.Toggle as="a" className="cursor-pointer arrow-none text-muted">
                                    <i className="uil uil-ellipsis-v"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <i className="uil uil-edit-alt me-2"></i>Edit
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <i className="uil uil-exit me-2"></i>Remove from Team
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item className="text-danger">
                                        <i className="uil uil-trash me-2"></i>Delete
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

export default MembersList;
