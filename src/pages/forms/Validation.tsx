import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Card, Button, InputGroup, Form } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import PageTitle from '../../components/PageTitle';
import { FormInput, VerticalForm } from '../../components';

interface UserData {
    username: string;
    email: string;
    password: string;
    confirmpassword: string;
    checkbox: boolean;
}

interface UserData2 {
    webSite: string;
    email2: string;
    password2: string;
    confirmpassword2: string;
    horizontalCheck: boolean;
}

const NormalFormValidation = () => {
    const [validated, setValidated] = useState<boolean>(false);

    /*
     * handle form submission
     */
    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Bootstrap Validation - Normal</h4>
                    <p className="sub-header">
                        Provide valuable, actionable feedback to your users with HTML5 form validation–available in all
                        our supported browsers.
                    </p>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control required type="text" placeholder="First name" defaultValue="Mark" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustom03">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustom04">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustom05">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                id="validation-check"
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                            />
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

const FormValidationWithTooltip = () => {
    const [validated, setValidated] = useState<boolean>(false);

    /*
     * handle form submission
     */
    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title">Bootstrap Validation (Tooltips)</h4>
                    <p className="sub-header">
                        If your form layout allows it, you can swap the <code>.valid | invalid-feedback</code> classes
                        for <code>.valid | invalid-tooltip</code> classes to display validation feedback in a styled
                        tooltip.
                    </p>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="position-relative mb-3" controlId="validationTooltip01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control required type="text" placeholder="First name" defaultValue="Mark" />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="position-relative mb-3" controlId="validationTooltip02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="position-relative mb-3" controlId="validationCustonTooltipme">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="position-relative mb-3" controlId="validationTooltip03">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid" tooltip>
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="position-relative mb-3" controlId="validationTooltip04">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required />
                            <Form.Control.Feedback type="invalid" tooltip>
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="position-relative mb-3" controlId="validationTooltip05">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" required />
                            <Form.Control.Feedback type="invalid" tooltip>
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

const BasicForm = () => {
    /*
    form validation schema
    */
    const schemaResolver = yupResolver(
        yup.object().shape({
            username: yup.string().required('Please enter Username'),
            email: yup.string().required('Please enter Email address'),
            password: yup.string().required('Please enter Password'),
            confirmpassword: yup
                .string()
                .oneOf([yup.ref('password'), null], "Passwords don't match")
                .required('This value is required.'),
            checkbox: yup.bool().oneOf([true]),
        })
    );

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Basic Form</h4>
                <p className="sub-header">React validation with react-hook-form library.</p>
                <VerticalForm<UserData>
                    onSubmit={() => {}}
                    resolver={schemaResolver}
                    defaultValues={{ username: 'test' }}>
                    <FormInput
                        label={'Username'}
                        type="text"
                        name="username"
                        placeholder="Enter your name"
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={'Email address'}
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={'Password'}
                        type="password"
                        name="password"
                        placeholder="Password"
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={'Confirm Password'}
                        type="password"
                        name="confirmpassword"
                        placeholder="Password"
                        containerClass={'mb-3'}
                    />
                    <FormInput label={'Remember me'} type="checkbox" name="checkbox" containerClass={'mb-3'} />

                    <div className="text-md-end mb-0">
                        <Button variant="primary" className="me-1" type="submit">
                            Submit
                        </Button>
                        <Button variant="secondary" type="reset">
                            Cancel
                        </Button>
                    </div>
                </VerticalForm>
            </Card.Body>
        </Card>
    );
};

const HorizontalForm = () => {
    /*
    form validation schema
    */
    const schemaResolver2 = yupResolver(
        yup.object().shape({
            email2: yup.string().required('Please enter Email address'),
            password2: yup.string().required('Please enter Password'),
            confirmPassword2: yup
                .string()
                .oneOf([yup.ref('password'), null], "Passwords don't match")
                .required('This value is required.'),
            webSite: yup.string().required('Please enter URL'),
            horizontalCheck: yup.bool().oneOf([true]),
        })
    );

    const methods = useForm<UserData2>({
        defaultValues: { email2: 'shreyu@coderthemes.com' },
        resolver: schemaResolver2,
    });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Horizontal Form</h4>
                <p className="sub-header">React validation with react-hook-form library.</p>
                <form name="chat-form" id="chat-form" onSubmit={handleSubmit(() => {})}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column md={4}>
                            Email<span className="text-danger">*</span>
                        </Form.Label>
                        <Col md={7}>
                            <FormInput
                                type="email"
                                name="email2"
                                placeholder="Email"
                                register={register}
                                key="email2"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column md={4}>
                            Password<span className="text-danger">*</span>
                        </Form.Label>
                        <Col md={7}>
                            <FormInput
                                type="password"
                                name="password2"
                                placeholder="Password"
                                register={register}
                                key="password2"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column md={4}>
                            Confirm Password<span className="text-danger">*</span>
                        </Form.Label>
                        <Col md={7}>
                            <FormInput
                                type="password"
                                name="confirmPassword2"
                                placeholder="Password"
                                register={register}
                                key="confirmPassword2"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column md={4}>
                            Web Site<span className="text-danger">*</span>
                        </Form.Label>
                        <Col md={7}>
                            <FormInput
                                type="url"
                                name="webSite"
                                placeholder="URL"
                                register={register}
                                key="webSite"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="horizontalCheck">
                        <Col md={{ span: 8, offset: 4 }}>
                            <FormInput
                                label={'Remember me'}
                                type="checkbox"
                                name="horizontalCheck"
                                register={register}
                                key="horizontalCheck"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 8, offset: 4 }}>
                            <Button variant="primary" className="me-1" type="submit">
                                Submit
                            </Button>
                            <Button variant="secondary" type="reset">
                                Cancel
                            </Button>
                        </Col>
                    </Form.Group>
                </form>
            </Card.Body>
        </Card>
    );
};

const FormValidation = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Forms', path: '/forms/validation' },
                    { label: 'Validation', path: '/forms/validation', active: true },
                ]}
                title={'Validation'}
            />

            <Row>
                <Col lg={6}>
                    <NormalFormValidation />
                </Col>

                <Col lg={6}>
                    <FormValidationWithTooltip />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <BasicForm />
                </Col>
                <Col lg={6}>
                    <HorizontalForm />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FormValidation;
