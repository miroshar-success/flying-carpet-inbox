import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FeatherIcons from 'feather-icons-react';

// components
import { VerticalForm, FormInput } from '../../components/';

import AuthLayout from './AuthLayout';

// images
import userImg from '../../assets/images/users/avatar-7.jpg';
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

interface UserData {
    password: string;
}

/* bottom link */
const BottomLink = () => {
    const { t } = useTranslation();
    return (
        <Row className="mt-3">
            <Col xs={12} className="text-center">
                <p className="text-muted">
                    {t('Not you? return')}{' '}
                    <Link to={'/auth/login'} className="text-primary fw-bold ms-1">
                        {t('Sign Up')}
                    </Link>
                </p>
            </Col>
        </Row>
    );
};

const LockScreen = () => {
    const { t } = useTranslation();

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            password: yup.string().required(t('Please enter Password')),
        })
    );

    return (
        <>
            <AuthLayout bottomLinks={<BottomLink />}>
                <div className="text-center">
                    <div className="auth-logo mx-auto mb-4">
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

                    <img src={userImg} alt="" height="88" className="avatar-lg rounded-circle shadow" />
                    <h4 className="h4 mb-0 mt-3">{t('Hi ! Nik')}</h4>
                    <p className="text-muted mt-1 mb-4">{t('Enter your password to access the admin.')}</p>
                </div>
                <VerticalForm<UserData>
                    onSubmit={() => {}}
                    resolver={schemaResolver}
                    defaultValues={{}}
                    formClass="authentication-form">
                    <FormInput
                        label={t('Password')}
                        type="password"
                        name="password"
                        startIcon={<FeatherIcons icon={'lock'} className="icon-dual" />}
                        placeholder={t('Enter your password')}
                        containerClass={'mb-3'}
                    />

                    <div className="d-grid text-center">
                        <Button type="submit">{t('Log In')}</Button>
                    </div>
                </VerticalForm>
            </AuthLayout>
        </>
    );
};

export default LockScreen;
