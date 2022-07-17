import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Row, Col, Card,Button,Modal,Form } from 'react-bootstrap';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import FeatherIcons from 'feather-icons-react';
import { useTranslation } from 'react-i18next';



import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


import FeatherIcon from 'feather-icons-react';

// components
import PageTitle from '../../../components/PageTitle';
import { VerticalForm, FormInput } from '../../../components/';

import Table from '../../../components/Table';

//dummy data
import { records as data, expandableRecords } from './data';

const columns = [
    {
        Header: 'ID',
        accessor: 'key',
        sort: true,
    },
    {
        Header: 'Name',
        accessor: 'fullname',
        sort: true,
    },
    {
        Header: 'Email',
        accessor: 'email',
        sort: false,
    },
    {
        Header: 'Create Date',
        accessor: 'date',
        sort: true,
    },
    {
        Header: 'Level',
        accessor: 'level',
        sort: false,
    },
    {
        Header : "Action",
        accessor : "action"
    },
    {
        Header : "Instance",
        accessor : "instance"
    }
];

const sizePerPageList = [
    {
        text: '5',
        value: 5,
    },
    {
        text: '10',
        value: 10,
    },
    {
        text: '25',
        value: 25,
    },
    {
        text: 'All',
        value: data.length,
    },
];

interface UserType  {
    fullname : String;
    email : String;
    date : Date;
    level : String;
}
interface OptionTypes {
    value: string;
    label: string;
}

interface UserData {
    email: string;
    password: string;
}

const Advanced = () => {
    const [users , setusers] = useState<UserType[]>([]);
    const [instances, setInstances] = useState<any>([]);

    const [show, setShow] = useState<boolean>(false);
    const [size, setSize] = useState<'sm' | 'lg' | 'xl'>();

    const [useremail,setuseremail] = useState<string>("");
    const [password,setpassword] = useState<string>("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const openModal = () => {
        handleShow();

    };

    const { user, userLoggedIn, loading, error } = useSelector((state: RootState) => ({
        user: state.Auth.user,
        loading: state.Auth.loading,
        error: state.Auth.error,
        userLoggedIn: state.Auth.userLoggedIn,
    }));

    const getusers = async () => {
        console.log(user.email);
       const allusers = await fetch("http://localhost:5000/api/users/users",{ method: 'POST'}).then(res => res.json());
       const total = convertUser(allusers);
        setusers(total);
        

    }

    const getinstances = async () => {
       const allapis = await fetch("http://localhost:5000/api/apis/getAllAPI").then(res => res.json());
        const total = allapis.map((api : any,index : number) => {
            return {
                value : api.instance,
                label : api.instance
            }
        });
        console.log(total);
        setInstances(total)
    }

    const deleteusers = async (email : string) => {
        const sendData = {email};
        const result = await fetch("http://localhost:5000/api/users/deleteusers",{method : "POST",headers : {'Content-Type': 'application/json'},body : JSON.stringify(sendData)}).then(res => res.json());
        const total = convertUser(result);
        setusers(total);
    }

    const convertUser = (allusers : any) => {
        let totalusers : UserType[] = [];
        totalusers = allusers.map( (user : any,index : number) => {
            let defaultvalue = user.instances.map( (instance : any) => {
                console.log(instance);
                return {
                    'value' : instance, 
                    'label' : instance
                }
            });
            return {
                fullname : user.fullname,
                email : user.email,
                date:user.date,
                level:user.level,
                key : (index + 1),
                action : <>
                            <Button className='btn-sm' onClick={() => setLevel(user.email,"1")}> Admin</Button>
                            <Button className='btn-sm' onClick={() => setLevel(user.email,"2")}> User</Button>
                            <Button className='btn-sm' onClick={() => deleteusers(user.email)}> Remove</Button>
                        </>,
                instance : <Select
                                isMulti={true}
                                options={[...instances]}
                                defaultValue={defaultvalue}
                                onChange={(newValue : any) => onChangeMultipleSelection(newValue,user.email)}
                                className="react-select react-select-container"
                                classNamePrefix="react-select"/>
            } 
        })
        return totalusers;
    }

    const onChangeMultipleSelection = async (newValue: any,email : string) => {
        const sendData = {instances : newValue,email : email};
        const updateinstances = await fetch("http://localhost:5000/api/users/updateinstances", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
          })
          .then(res => res.json());
          const total = convertUser(updateinstances);
          setusers(total);
    };


    const setLevel = async (email : string,level : string) => {
        const sendData = {email: email,level : level};
        const setLevel = await fetch("http://localhost:5000/api/users/level", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
          })
          .then(res => res.json());
          const total = convertUser(setLevel);
          setusers(total);
    }

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            email: yup.string().required('Please enter Email').email('Please enter valid Email'),
            password: yup.string().required(('Please enter Password'))
        })
    );

    const onSubmit = async () => {
        console.log(useremail,password);
        const newuser = await fetch("http://localhost:5000/api/users/adduser", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email : useremail,password : password})
          })
          .then(res => res.json());
          const total = convertUser(newuser);
          setusers(total);
          handleClose()
    };

    useEffect(() => {
        getinstances();
    },[]);

    useEffect(() => {
        getusers()
    },[instances])
    

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Users', path: '' },
                    {
                        label: 'User Management',
                        path: '',
                        active: true,
                    },
                ]}
                title={'User Management'}
            />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Row style={{float : "right"}}>
                                <Col md={6}>
                                    <Button className='primary' onClick={openModal}> Add</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Table
                                    columns={columns}
                                    data={users}
                                    pageSize={5}
                                    sizePerPageList={sizePerPageList}
                                    isSortable={true}
                                    pagination={true}
                                    isSearchable={true}
                                />
                            </Row>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose} size="sm">
                <Modal.Header onHide={handleClose} closeButton>
                    <Modal.Title as="h5">Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <VerticalForm<UserData>
                    onSubmit={onSubmit}
                    resolver={schemaResolver}
                    defaultValues={{}}
                    formClass="authentication-form">
                    <FormInput
                        label={('Email Address')}
                        type="email"
                        name="email"
                        startIcon={<FeatherIcons icon={'mail'} className="icon-dual" />}
                        placeholder={('hello@coderthemes.com')}
                        containerClass={'mb-3'}
                        value={useremail}
                        onChange={(e) => setuseremail(e.target.value)}
                    />
                    <FormInput
                        label={('Password')}
                        type="password"
                        name="password"
                        startIcon={<FeatherIcons icon={'lock'} className="icon-dual" />}
                        placeholder={('Enter your Password')}
                        containerClass={'mb-3'}
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />

                    <div className="mb-3 text-center d-grid">
                        <Button type="submit" disabled={loading}>
                            {('ADD USER')}
                        </Button>
                    </div>
                </VerticalForm>
                </Modal.Body>
            </Modal>
        </>

    );
};

export default Advanced;
