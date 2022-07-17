import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Button, Alert, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FeatherIcons from 'feather-icons-react';

import FileUploader from '../../components/FileUploader';

import {APICore,setAuthorization} from '../../helpers/api/apiCore';


import { Upload } from 'antd';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import ImgCrop from 'antd-img-crop';
import 'antd/dist/antd.css';

//actions
import { resetAuth, signupUser } from '../../redux/actions';

import { RootState, AppDispatch } from '../../redux/store';

// components
import { VerticalForm, FormInput } from '../../components/';

import AuthLayout from './AuthLayout';

// images
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

interface UserData {
    name: string;
    email: string;
    password1: string;
    password2: string;
}

/* bottom links */
const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <Row className="mt-3">
            <Col xs={12} className="text-center">
                <p className="text-muted">
                    {t('Already have account?')}{' '}
                    <Link to={'/auth/login'} className="text-primary fw-bold ms-1">
                        {t('Login')}
                    </Link>
                </p>
            </Col>
        </Row>
    );
};

const ProfileSetting = () => {
    const api = new APICore();
    const [fullname,setfullname] = useState<string>("");
    const [email,setemail] = useState<string>("");
    const [password1,setpassword1] = useState<string>("");
    const [password2,setpassword2] = useState<string>("");
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const [error ,seterror] = useState<string>("");
    const [flag, setflag] = useState<boolean>(false);
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj as RcFile);
            reader.onload = () => resolve(reader.result as string);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    

    const { loading, userSignUp } = useSelector((state: RootState) => ({
        loading: state.Auth.loading,
        userSignUp: state.Auth.userSignUp,
    }));

    useEffect(() => {
        dispatch(resetAuth());
    }, [dispatch]);

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            name: yup.string().required(t('Please enter Name')),
            email: yup.string().required('Please enter Email').email('Please enter valid Email'),
            password: yup.string().required(t('Please enter Password')),
            checkboxsignup: yup.bool().oneOf([true]),
        })
    );

    /*
     * handle form submission
     */
    const onSubmit = async (formData: UserData) => {
        const sendData = {fullname : formData['name'],email : formData['email'],password1 : formData['password1'],password2:formData['password2']};
        const result = await fetch("http://admin.fbmnow.com/users/resetprofile",
        {
            method : "POST",
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify(sendData) 
        }).then(res => res.json());
    };

    const getBase64 = async (file : any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const SendData = async () => {
        // console.log(fileList[0]);
        const filedata = fileList[0]['thumbUrl'];
        const sendData = {fullname ,email ,password1,password2,filedata};
        const result = await fetch("http://admin.fbmnow.com/api/users/resetprofile",
        {
            method : "POST",
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify(sendData) 
        }).then(res => res.json());
        if (result.message != "success") {
            api.setLoggedInUser(null);
            setflag(true)
            setAuthorization(null);
            seterror(result.message);
        }
    }

    

    return (
        <>
             {flag ? <Redirect to={'/auth/confirm'}></Redirect> : null}

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

                <h6 className="h5 mb-0 mt-3">{t('Change your profile')}</h6>
                <p className="text-muted mt-1 mb-4">{t('Change your profile')}</p>

                {error && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}

                <VerticalForm<UserData>
                    onSubmit={onSubmit}
                    resolver={schemaResolver}
                    defaultValues={{}}
                    formClass="authentication-form">
                    <ImgCrop rotate>
                        <Upload
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                        >
                            {fileList.length < 1 && '+ Upload'}
                        </Upload>
                    </ImgCrop>
                    {/* <FileUploader
                        onFileUpload={(files) => {
                            console.log('Uploaded files - ', files);
                        }}
                    /> */}
                    <FormInput
                        label={t('Email Address')}
                        type="email"
                        name="email"
                        startIcon={<FeatherIcons icon={'mail'} className="icon-dual" />}
                        placeholder={t('hello@coderthemes.com')}
                        containerClass={'mb-3'}
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />
                    <FormInput
                        label={t('Current Password')}
                        type="password"
                        name="password1"
                        startIcon={<FeatherIcons icon={'lock'} className="icon-dual" />}
                        placeholder={t('Enter your Password')}
                        containerClass={'mb-3'}
                        value={password1}
                        onChange={(e) => setpassword1(e.target.value)}
                    />

                    <FormInput
                        label={t('Name')}
                        type="text"
                        name="name"
                        startIcon={<FeatherIcons icon={'user'} className="icon-dual" />}
                        placeholder={t('Your full name')}
                        containerClass={'mb-3'}
                        value={fullname}
                        onChange={(e) => setfullname(e.target.value)}
                    />
                    
                    <FormInput
                        label={t('New Password')}
                        type="password"
                        name="password2"
                        startIcon={<FeatherIcons icon={'lock'} className="icon-dual" />}
                        placeholder={t('Enter your New Password')}
                        containerClass={'mb-3'}
                        value={password2}
                        onChange={(e) => setpassword2(e.target.value)}
                    />
                    <div className="mb-3 text-center d-grid">
                        <Button type="submit" onClick={SendData}>
                            {t('Change Profile')}
                        </Button>
                    </div>
                </VerticalForm>
            </AuthLayout>
        </>
    );
};

export default ProfileSetting;
