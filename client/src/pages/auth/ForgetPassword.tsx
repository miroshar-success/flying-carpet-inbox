import React, { useEffect } from 'react';
import { Button, Alert, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import FeatherIcons from 'feather-icons-react';

//actions
import { resetAuth, forgotPassword } from '../../redux/actions';
import { RootState, AppDispatch } from '../../redux/store';

// components
import { VerticalForm, FormInput } from '../../components/';

import AuthLayout from './AuthLayout';

// images
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

interface UserData {
    email: string;
}

/* bottom link */
const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <Row className="mt-3">
            <Col xs={12} className="text-center">
                <p className="text-muted">
                    {t('Back to')}{' '}
                    <Link to={'/auth/login'} className="text-primary fw-bold ms-1">
                        {t('Login')}
                    </Link>
                </p>
            </Col>
        </Row>
    );
};

const ForgetPassword = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(resetAuth());
    }, [dispatch]);

    const { loading, passwordReset, resetPasswordSuccess, error } = useSelector((state: RootState) => ({
        loading: state.Auth.loading,
        user: state.Auth.user,
        error: state.Auth.error,
        passwordReset: state.Auth.passwordReset,
        resetPasswordSuccess: state.Auth.resetPasswordSuccess,
    }));

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            email: yup.string().required(t('Please enter Email')),
        })
    );

    /*
     * handle form submission
     */
    const onSubmit = (formData: UserData) => {
        dispatch(forgotPassword(formData['email']));
    };

    return (
        <>
            <AuthLayout bottomLinks={<BottomLink />}>
                <div className="auth-logo mx-auto">
                    <Link to="/" className="logo logo-dark text-center">
                        <span className="logo-lg">
                            <img src={logoDark} alt="" height="24" />
                        </span>
                    </Link>

                    <Link to="/" className="logo logo-light text-center">
                        <span className="logo-lg">
                            <img src={logoLight} alt="" height="24" />
                        </span>
                    </Link>
                </div>

                <h6 className="h5 mb-0 mt-3">{t('Reset Password')}</h6>
                <p className="text-muted mt-1 mb-4">
                    {t(
                        "Enter your email address and we'll send you an email with instructions to reset your password."
                    )}
                </p>

                {resetPasswordSuccess && <Alert variant="success">{resetPasswordSuccess.message}</Alert>}

                {error && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}

                {!passwordReset && (
                    <VerticalForm<UserData>
                        onSubmit={onSubmit}
                        resolver={schemaResolver}
                        defaultValues={{}}
                        formClass="authentication-form">
                        <FormInput
                            label={t('Email Address')}
                            type="email"
                            name="email"
                            startIcon={<FeatherIcons icon={'mail'} className="icon-dual" />}
                            placeholder={t('hello@coderthemes.com')}
                            containerClass={'mb-3'}
                        />

                        <div className="mb-0 text-center">
                            <Button className="w-100" type="submit" disabled={loading}>
                                {t('Submit')}
                            </Button>
                        </div>
                    </VerticalForm>
                )}
            </AuthLayout>
        </>
    );
};

export default ForgetPassword;
