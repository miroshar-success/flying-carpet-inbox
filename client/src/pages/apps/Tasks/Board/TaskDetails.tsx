import React from 'react';
import { Card, Col, Dropdown, Row, Button } from 'react-bootstrap';
import FeatherIcons from 'feather-icons-react';

interface TaskDetailsProps {
    newTask: (status: string, queue: string) => void;
}

const TaskDetails = ({ newTask }: TaskDetailsProps) => {
    return (
        <Row>
            <Col xs={12}>
                <Card>
                    <Card.Body>
                        <Row className="align-items-center">
                            <Col sm={'auto'}>
                                <label className="fw-bold d-inline-flex me-2">
                                    <FeatherIcons icon="hard-drive" className="icon-dual icon-xs me-2" />
                                    Project :
                                </label>

                                <Dropdown className="d-inline-flex">
                                    <Dropdown.Toggle as="a" href="#" className="cursor-pointer fw-bold">
                                        Shreyu Design
                                        <i className="uil uil-angle-down fs-16 align-middle"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>
                                            <FeatherIcons
                                                className="icon-dual icon-xs me-2"
                                                icon="hard-drive"></FeatherIcons>
                                            Shreyu Design
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <FeatherIcons
                                                className="icon-dual icon-xs me-2"
                                                icon="briefcase"></FeatherIcons>
                                            Development
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item>
                                            <FeatherIcons
                                                className="icon-dual icon-xs me-2"
                                                icon="folder-plus"></FeatherIcons>
                                            Shreyu Angular
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <FeatherIcons
                                                className="icon-dual icon-xs me-2"
                                                icon="folder-plus"></FeatherIcons>
                                            Shreyu React
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col className="text-sm-end mt-sm-0 mt-2">
                                <Button onClick={() => newTask('Pending', 'todoTasks')}>
                                    <i className="uil-plus me-1"></i>Add New
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default TaskDetails;
