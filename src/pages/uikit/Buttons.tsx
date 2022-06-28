import React from 'react';
import { Card, Button, Row, Col, ButtonGroup, Dropdown } from 'react-bootstrap';

interface ButtonsType {
    name: string;
    color: string;
}

const buttonVariants: ButtonsType[] = [
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
    {
        name: 'Danger',
        color: 'danger',
    },
    {
        name: 'Warning',
        color: 'warning',
    },
    {
        name: 'Info',
        color: 'info',
    },
    {
        name: 'Dark',
        color: 'dark',
    },
];

const DefaultButtons = () => {
    return (
        <div>
            <h5 className="header-title mb-1 mt-0">Buttons</h5>
            <p className="sub-header">
                Use the button classes on an <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, or{' '}
                <code>&lt;input&gt;</code> element.
            </p>

            <div className="button-list">
                {(buttonVariants || []).map((button, index) => {
                    return (
                        <Button key={index} variant={button.color} className="waves-effect waves-light">
                            {button.name}
                        </Button>
                    );
                })}
                <Button variant="light" className="waves-effect waves-light">
                    Light
                </Button>
                <Button variant="link">Link</Button>
            </div>
        </div>
    );
};

const OutlineButtons = () => {
    return (
        <div className="mt-4 pt-1">
            <h5 className="fs-16 mb-1">Outline buttons </h5>
            <p className="sub-header">
                Use a classes <code>.btn-outline-**</code> to quickly create a bordered buttons.
            </p>

            <div className="button-list">
                {(buttonVariants || []).map((button, index) => {
                    return (
                        <Button key={index} variant={'outline-' + button.color}>
                            {button.name}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
};

const SoftButtons = () => {
    return (
        <div className="mt-4 pt-1">
            <h4 className="fs-16 mb-1">Soft buttons</h4>
            <p className="sub-header">
                Use a classes <code>.btn-soft-**</code> to quickly create buttons with soft background.
            </p>

            <div className="button-list">
                {(buttonVariants || []).map((button, index) => {
                    return (
                        <Button key={index} variant={'soft-' + button.color}>
                            {button.name}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
};

const RoundedButtons = () => {
    return (
        <div className="mt-4 pt-1">
            <h4 className="fs-16 mb-1">Button-Rounded</h4>
            <p className="sub-header">
                Add <code>.rounded-pill</code> to default button to get rounded corners.
            </p>

            <div className="button-list">
                {(buttonVariants || []).map((button, index) => {
                    return (
                        <Button key={index} variant={button.color} className="rounded-pill">
                            {button.name}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
};

const ButtonWidths = () => {
    return (
        <div className="mt-4 mt-xl-0">
            <h5 className="fs-16 mb-1 mt-0">Button Width</h5>
            <p className="sub-header">
                Create buttons with minimum width by adding add
                <code>.width-xs</code>, <code>.width-sm</code>,<code>.width-md</code> or <code>.width-lg</code>.
            </p>

            <div className="button-list">
                <Button variant="primary" className="width-xs">
                    Xs
                </Button>
                <Button variant="success" className="width-sm">
                    Small
                </Button>
                <Button variant="info" className="width-md">
                    Middle
                </Button>
                <Button variant="warning" className="width-lg">
                    Large
                </Button>
            </div>
        </div>
    );
};

const ButtonSizes = () => {
    return (
        <div className="mt-4 pt-1">
            <h5 className="fs-16 mb-1">Button Sizes</h5>
            <p className="sub-header">
                Add <code>.btn-lg</code>, <code>.btn-sm</code> for additional sizes.
            </p>

            <div className="button-list">
                <Button variant="primary" className=" btn-lg">
                    Large button
                </Button>
                <Button variant="danger">Normal button</Button>
                <Button variant="success" className="btn-sm">
                    Small button
                </Button>
                <div className="d-grid">
                    <Button variant="primary" className="btn-md">
                        Block button
                    </Button>
                </div>
            </div>
        </div>
    );
};

const ButtonGroups = () => {
    return (
        <div className="mt-4 pt-1">
            <h5 className="fs-16 mb-1">Button Group</h5>
            <p className="sub-header">
                Wrap a series of buttons with <code>.btn</code> in <code>.btn-group</code>.
            </p>

            <Row>
                <Col md={6}>
                    <ButtonGroup className="mb-2">
                        <Button variant="info">Left</Button>
                        <Button variant="info">Middle</Button>
                        <Button variant="info">Right</Button>
                    </ButtonGroup>

                    <br />

                    <ButtonGroup className="mb-2 me-1">
                        <Button variant="primary">1</Button>
                        <Button variant="primary">2</Button>
                        <Button variant="primary">3</Button>
                        <Button variant="primary">4</Button>
                    </ButtonGroup>
                    <ButtonGroup className="mb-2 me-1">
                        <Button variant="danger">5</Button>
                        <Button variant="danger">6</Button>
                        <Button variant="danger">7</Button>
                    </ButtonGroup>
                    <ButtonGroup className="mb-2">
                        <Button variant="success">8</Button>
                    </ButtonGroup>

                    <br />

                    <ButtonGroup className="mb-2">
                        <Button variant="info">1</Button>
                        <Button variant="info">2</Button>
                        <Button variant="info">3</Button>
                        <Dropdown as={ButtonGroup}>
                            <Dropdown.Toggle variant="primary" className="cursor-pointer">
                                Dropdown <i className="uil uil-angle-down"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
                                <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ButtonGroup>
                </Col>
                <Col md={6}>
                    <Row>
                        <Col sm={3}>
                            <ButtonGroup vertical className="mb-2">
                                <Button variant="primary">Top</Button>
                                <Button variant="primary">Middle</Button>
                                <Button variant="primary">Bottom</Button>
                            </ButtonGroup>
                        </Col>
                        <Col sm={3}>
                            <ButtonGroup vertical className="mb-2">
                                <Button variant="info">Button 1</Button>
                                <Button variant="info">Button 2</Button>
                                <Dropdown>
                                    <Dropdown.Toggle variant="info" className="cursor-pointer rounded-0">
                                        Button 3 <i className="uil uil-angle-down"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
                                        <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

const Buttons = () => {
    return (
        <Row>
            <Col xl={6}>
                <Card>
                    <Card.Body>
                        <DefaultButtons />

                        <OutlineButtons />

                        <SoftButtons />

                        <RoundedButtons />
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={6}>
                <Card>
                    <Card.Body>
                        <ButtonWidths />

                        <ButtonSizes />

                        <ButtonGroups />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Buttons;
