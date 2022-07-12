import React from 'react';
import { Card, Col, Dropdown, Row, ButtonGroup, Button } from 'react-bootstrap';
import FeatherIcons from 'feather-icons-react';

const BasicDropdowns = () => {
    const colors = [
        {
            name: 'Primary',
            color: 'primary',
        },
        {
            name: 'Secondary',
            color: 'secondary',
        },
        {
            name: 'Success',
            color: 'success',
        },
    ];

    const colors2 = [
        {
            name: 'Info',
            color: 'info',
        },
        {
            name: 'Warning',
            color: 'warning',
        },
        {
            name: 'Danger',
            color: 'danger',
        },
    ];
    return (
        <Card>
            <Card.Body>
                <h5 className="header-title mb-1 mt-0">Dropdown Examples</h5>
                <p className="sub-header">The best part is you can do this with any button variant, too:</p>

                {(colors || []).map((item, index) => {
                    return (
                        <Dropdown key={index} as={ButtonGroup} className="mt-2 me-1">
                            <Dropdown.Toggle variant={item.color} className="cursor-pointer">
                                {item.name}
                                <i className="icon">
                                    <span>
                                        <FeatherIcons icon="chevron-down"></FeatherIcons>
                                    </span>
                                </i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    );
                })}

                {(colors2 || []).map((item, index) => {
                    return (
                        <Dropdown key={index} as={ButtonGroup} className="mt-2 me-1">
                            <Button variant={item.color}>{item.name}</Button>
                            <Dropdown.Toggle split variant={item.color} className="cursor-pointer">
                                <i className="icon">
                                    <span>
                                        <FeatherIcons icon="chevron-down"></FeatherIcons>
                                    </span>
                                </i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

const MoreExamples = () => {
    return (
        <Card>
            <Card.Body>
                <h5 className="header-title mb-1 mt-0">Dropdown - More Examples</h5>
                <p className="sub-header">
                    You can put a form or simple text within a dropdown menu or set the different position
                </p>

                <Dropdown as={ButtonGroup} className="mt-2 me-1">
                    <Dropdown.Toggle className="cursor-pointer">
                        Simple text{' '}
                        <i className="icon">
                            <span>
                                <FeatherIcons icon="chevron-down"></FeatherIcons>
                            </span>
                        </i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-lg p-3">
                        <div className="text-muted">
                            <p>Some example text that's free-flowing within the dropdown menu.</p>
                            <p className="mb-0">And this is more example text.</p>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown as={ButtonGroup} className="mt-2 me-1">
                    <Dropdown.Toggle variant="secondary" className="cursor-pointer">
                        Dropdown menu Forms{' '}
                        <i className="icon">
                            <span>
                                <FeatherIcons icon="chevron-down"></FeatherIcons>
                            </span>
                        </i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-lg p-3">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleDropdownFormEmail1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleDropdownFormEmail1"
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleDropdownFormPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleDropdownFormPassword1"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="mb-3">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                    <label className="form-check-label" htmlFor="dropdownCheck">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Sign in
                            </button>
                        </form>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown as={ButtonGroup} className="mt-2 me-1" align="end">
                    <Dropdown.Toggle variant="success" className="cursor-pointer">
                        Right Align{' '}
                        <i className="icon">
                            <span>
                                <FeatherIcons icon="chevron-down"></FeatherIcons>
                            </span>
                        </i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown as={ButtonGroup} className="mt-2 me-1" drop="end">
                    <Dropdown.Toggle variant="info" className="cursor-pointer">
                        Drop Right{' '}
                        <i className="icon">
                            <span>
                                <FeatherIcons icon="chevron-right"></FeatherIcons>
                            </span>
                        </i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown as={ButtonGroup} className="mt-2 me-1" drop="start">
                    <Dropdown.Toggle variant="danger" className="cursor-pointer">
                        <i className="icon">
                            <span>
                                <FeatherIcons icon="chevron-left"></FeatherIcons>
                            </span>
                        </i>{' '}
                        Drop Left
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Body>
        </Card>
    );
};

const Dropdowns = () => {
    return (
        <Row>
            <Col lg={6}>
                <BasicDropdowns />
            </Col>
            <Col lg={6}>
                <MoreExamples />
            </Col>
        </Row>
    );
};

export default Dropdowns;
