import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Row, Col, Card,Button } from 'react-bootstrap';

import FeatherIcon from 'feather-icons-react';

// components
import PageTitle from '../../../components/PageTitle';
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

const Advanced = () => {
    const [users , setusers] = useState<UserType[]>([]);

    const getusers = async () => {
       const allusers = await fetch("http://admin.fbmnow.com/api/users/users",{ method: 'POST'}).then(res => res.json());
       const total = convertUser(allusers);
        setusers(total);
    }

    const convertUser = (allusers : any) => {
        let totalusers : UserType[] = [];
        totalusers = allusers.map( (user : any,index : number) => {
            return {
                fullname : user.fullname,
                email : user.email,
                date:user.date,
                level:user.level,
                key : (index + 1),
                action : <>
                            <Button className='btn-sm' onClick={() => setLevel(user.email,"1")}> Admin</Button>
                            <Button className='btn-sm' onClick={() => setLevel(user.email,"2")}> User</Button>
                        </>
            } 
        })
        return totalusers;
    }

    const setLevel = async (email : string,level : string) => {
        const sendData = {email: email,level : level};
        const setLevel = await fetch("http://admin.fbmnow.com/api/users/level", {
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

    useEffect(() => {
        getusers()
    },[]);

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

                            <Table
                                columns={columns}
                                data={users}
                                pageSize={5}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                isSearchable={true}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    );
};

export default Advanced;
