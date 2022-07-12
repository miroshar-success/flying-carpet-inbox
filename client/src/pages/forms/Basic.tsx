import React from 'react';
import { Row, Col, Card, Form, FloatingLabel, InputGroup, Button } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';

const BasicInputElements = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0">Input Types</h4>
                <p className="sub-header">
                    Most common form control, text-based input fields. Includes support for all HTML5 types:{' '}
                    <code>text</code>, <code>password</code>, <code>datetime</code>, <code>datetime-local</code>,{' '}
                    <code>date</code>, <code>month</code>, <code>time</code>, <code>week</code>, <code>number</code>,{' '}
                    <code>email</code>, <code>url</code>, <code>search</code>, <code>tel</code>, and <code>color</code>.
                </p>

                <Form className="form-horizontal">
                    <Row>
                        <Col md={6}>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="simpleinput">
                                    Text
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" id="simpleinput" defaultValue="Some text value..." />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-email">
                                    Email
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control
                                        type="email"
                                        id="example-email"
                                        name="example-email"
                                        placeholder="Email"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-password">
                                    Password
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="password" id="example-password" defaultValue="password" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-placeholder">
                                    Placeholder
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" placeholder="placeholder" id="example-placeholder" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-textarea">
                                    Text area
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control as="textarea" rows={5} id="example-textarea" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Readonly
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" readOnly value="Readonly value" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Disabled
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" disabled value="Disabled value" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-static">
                                    Static control
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control
                                        type="text"
                                        readOnly
                                        plaintext
                                        id="example-static"
                                        value="email@example.com"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-helping">
                                    Helping text
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="text" id="example-helping" placeholder="Helping text" />
                                    <span className="help-block">
                                        <small>
                                            A block of help text that breaks onto a new line and may extend beyond one
                                            line.
                                        </small>
                                    </span>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Input Select
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-fileinput">
                                    Default file input
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="file" id="example-fileinput" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-date">
                                    Date
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control id="example-date" type="date" name="date" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-month">
                                    Month
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control id="example-month" type="month" name="month" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-time">
                                    Time
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control id="example-time" type="time" name="time" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-week">
                                    Week
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control id="example-week" type="week" name="week" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-number">
                                    Number
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control id="example-number" type="number" name="number" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    URL
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="url" name="url" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Search
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="search" name="search" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2}>
                                    Tel
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control type="tel" name="tel" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column lg={2} htmlFor="example-color">
                                    Color
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Control
                                        id="example-color"
                                        type="color"
                                        name="color"
                                        className="w-100"
                                        defaultValue="#5369f8"
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-0">
                                <Form.Label column lg={2} htmlFor="example-range">
                                    Range
                                </Form.Label>
                                <Col lg={10}>
                                    <Form.Range className="mt-1" name="range" />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

const FloatingLabels = () => {
    return (
        <>
            <h4 className="mb-3 header-title mt-0">Floating label</h4>

            <Row>
                <Col>
                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                </Col>
            </Row>
        </>
    );
};

const FloatingTextareaSelects = () => {
    return (
        <>
            <h4 className="mb-3 header-title mt-0">Floating Textarea</h4>
            <Row>
                <Col md>
                    <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Comments">
                        <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
                    </FloatingLabel>
                </Col>
            </Row>

            <h4 className="mb-3 header-title mt-0">Floating Selects</h4>
            <Row>
                <Col md>
                    <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
                        <Form.Select aria-label="Floating label select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
        </>
    );
};

const SelectInput = () => {
    return (
        <>
            <h4 className="header-title mt-0">Select menu</h4>
            <p className="sub-header">
                Custom <code>&lt;select&gt;</code> menus need only a custom class, <code>.form-select</code> to trigger
                the custom styles.
            </p>

            <Form.Select className="mb-2" aria-label="Default select example">
                <option defaultValue="0">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

            <Form.Select className="mb-2" size="lg" aria-label="large select example">
                <option defaultValue="0">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

            <Form.Select size="sm" aria-label="small select example">
                <option defaultValue="0">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </>
    );
};

const Switches = () => {
    return (
        <div className="mt-4">
            <h4 className="header-title">Switches</h4>
            <p className="sub-header">
                A switch has the markup of a custom checkbox but uses the <code>.form-switch</code> class to render a
                toggle switch. Switches also support the <code>disabled</code> attribute.
            </p>

            <Form.Check type="switch" id="custom-switch" className="mb-2" label="Toggle this switch element" />
            <Form.Check
                disabled
                type="switch"
                label="Disabled switch element"
                id="disabled-custom-switch"
                className="mt-1"
            />
        </div>
    );
};

const CheckboxesRadios = () => {
    return (
        <>
            <h4 className="header-title mt-0">Checkboxes</h4>
            <div className="mt-3">
                <Form.Check
                    type="checkbox"
                    className="mb-1"
                    id="default-checkbox1"
                    label="Check this custom checkbox"
                    defaultChecked
                />
                <Form.Check type="checkbox" id="default-checkbox2" label="Check this custom checkbox" />
            </div>

            <h4 className="header-title mt-4">Radios</h4>
            <div>
                <Form.Check
                    type="radio"
                    className="mb-1"
                    id="default-radio1"
                    name="customRadio"
                    label="Toggle this custom radio"
                />
                <Form.Check
                    type="radio"
                    id="default-radio2"
                    name="customRadio"
                    label="Or toggle this other custom radio"
                    defaultChecked
                />
            </div>

            <h4 className="header-title mt-4">Disabled</h4>
            <div>
                <Form.Check
                    type="checkbox"
                    className="mb-1"
                    id="customCheckDisabled1"
                    label="Check this custom checkbox"
                    disabled
                />
                <Form.Check
                    type="radio"
                    id="customRadioDisabled2"
                    name="customRadioDisabled2"
                    label="Toggle this custom radio"
                    disabled
                />
            </div>
        </>
    );
};

const DefaultForm = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="mb-3 header-title mt-0">Basic Example</h4>

                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="exampleEmail2">Email address</Form.Label>
                        <Form.Control type="email" name="email" id="exampleEmail2" placeholder="Enter email" />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="examplePassword2">Password</Form.Label>
                        <Form.Control type="password" name="password" id="examplePassword2" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" id="checkmeout" label="Check me out !" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

const HorizontalForm = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="mb-3 header-title mt-0">Horizontal Form</h4>

                <Form className="form-horizontal">
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label htmlFor="exampleEmail3" column sm={3}>
                            Email
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="email" name="email" id="exampleEmail3" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label htmlFor="examplePassword3" column sm={3}>
                            Password
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="password"
                                name="password"
                                id="examplePassword3"
                                placeholder="Password"
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label htmlFor="examplePassword4" column sm={3}>
                            Re Password
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="password"
                                name="password"
                                id="examplePassword4"
                                placeholder="Retype Password"
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="justify-content-end mb-3" controlId="formHorizontalCheck">
                        <Col sm={9}>
                            <Form.Check label="Check me out !" id="checkmeout2" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="justify-content-end mb-0" controlId="formHorizontalCheck">
                        <Col sm={9}>
                            <Button variant="info" type="submit">
                                Sign in
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
};

const InlineForm = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="mb-1 header-title mt-0">Inline Form</h4>

                <p className="sub-header">
                    Use the grid and utilities to display a series of labels, form controls, and buttons on a single
                    horizontal row. Form controls within inline forms vary slightly from their default states. Controls
                    only appear inline in viewports that are at least 576px wide to account for narrow viewports on
                    mobile devices.
                </p>

                <Row>
                    <Col md={'auto'} className="mb-3">
                        <Form.Group>
                            <Form.Control
                                readOnly
                                type="email"
                                name="email"
                                id="exampleEmail4"
                                bsPrefix="form-control-plaintext"
                                placeholder="email@example.com"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={'auto'} className="mb-3">
                        <Form.Group>
                            <Form.Control
                                type="password"
                                name="password"
                                id="examplePassword5"
                                placeholder="Password"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={'auto'} className="mb-3">
                        <Button color="primary" type="submit">
                            Confirm identity
                        </Button>
                    </Col>
                </Row>

                <h6 className="fw-semibold">Auto-sizing</h6>

                <Row className="align-items-center">
                    <Col md={'auto'} className="mb-3">
                        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                            Name
                        </Form.Label>
                        <Form.Control id="inlineFormInput" placeholder="Jane Doe" />
                    </Col>
                    <Col md={'auto'} className="mb-3">
                        <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                            Username
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Text>@</InputGroup.Text>
                            <Form.Control id="inlineFormInputGroup" placeholder="Username" />
                        </InputGroup>
                    </Col>
                    <Col md={'auto'} className="mb-3">
                        <Form.Check type="checkbox" id="autoSizingCheck" label="Remember me" />
                    </Col>
                    <Col md={'auto'} className="mb-3">
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

const BasicForms = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Forms', path: '/forms/basic' },
                    { label: 'Basic Elements', path: '/forms/basic', active: true },
                ]}
                title={'Basic Elements'}
            />

            <Row>
                <Col xs={12}>
                    <BasicInputElements />
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <SelectInput />
                            <Switches />
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <CheckboxesRadios />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <FloatingLabels />
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <FloatingTextareaSelects />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <DefaultForm />
                </Col>

                <Col md={6}>
                    <HorizontalForm />
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <InlineForm />
                </Col>
            </Row>
        </React.Fragment>
    );
};
export default BasicForms;
