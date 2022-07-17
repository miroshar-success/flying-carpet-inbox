import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Row, Col, Card,Button,Modal,Form,Alert } from 'react-bootstrap';

import FeatherIcon from 'feather-icons-react';

// components
import PageTitle from '../../../components/PageTitle';
import Table from '../../../components/Table';

//dummy data

const columns = [
    {
        Header: 'ID',
        accessor: 'id',
        sort: true,
    },
    {
        Header: 'Instance',
        accessor: 'instance',
        sort: true,
    },
    {
        Header: 'Token',
        accessor: 'token',
        sort: false,
    },
    {
        Header : "Name",
        accessor : "name"
    },
    {
        Header : 'Action',
        accessor : 'action',
    },
    
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
    }
];

interface apiType  {
    id : Number;
    token : String;
    instance : String;
    name : String;
}

const Advanced = () => {
    const [apis , setapis] = useState<apiType[]>([]);

    const [show, setShow] = useState<boolean>(false);
    const [size, setSize] = useState<'sm' | 'lg' | 'xl'>();

    const [flag, setflag] = useState<boolean>(false);
    const [mes , setmes] = useState<string>("");

    const [instance, setInstance] = useState<string>("");
    const [token,setToken] = useState<string>("");
    const [instancename , setInstancename] = useState<string>("");

    const [currentAPI,setCurrentAPi] = useState<number>(0);

    const [editType, setEditType] = useState<Number>(0);
    //0 : insert 1: update

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const openModal = (type : Number,api :any = []) => {
        setflag(false);
        setmes("");
        setInstance(api.instance);
        setToken(api.token);
        setInstancename(api.name);
        setCurrentAPi(api.id);
        setEditType(type);
        handleShow();

    };

    const getapis = async () => {
       const allapis = await fetch("http://admin.fbmnow.com/api/apis/getAllAPI").then(res => res.json());
       const total = convertUser(allapis);
       setapis(total);
    }

    const convertUser = (allapis : any) => {
        let totalapis : apiType[] = [];
        totalapis = allapis.map( (api : any,index : number) => {
            return {
                id : api.id,
                token : api.token,
                instance : api.instance,
                name : api.name,
                action : <>
                            <Button className='btn-sm' onClick={() => openModal(1,api)}> Update</Button>
                            <Button className='btn-sm' onClick={() => deleteInstance(api.id)}> Delete</Button>
                        </>
            } 
        })
        return totalapis;
    }

    const editToken = () => {
        switch (editType) {
            case 0:
                insertInstance();
                break;
            case 1:
                updateInstance();
                break;
            default:
                break;
        }
    }

    const updateInstance = async () => {
        const sendData = {_Id : currentAPI,token : token,instance : instance,name : instancename};
        const result = await fetch("http://admin.fbmnow.com/api/apis/updateAPI", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
          })
          .then(res => res.json());
          setflag(true);
          if (result.message == undefined || result.message == "") {
            const total = convertUser(result);
            setapis(total);
          }else{
            setmes(result.message)
          }
        
    }

    const deleteInstance = async ( _Id : Number) => {
        const sendData = {_Id : _Id};
        console.log(sendData);
        const result = await fetch("http://admin.fbmnow.com/api/apis/deleteAPI", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
          })
          .then(res => res.json());
          console.log(result);
        const total = convertUser(result);
        setapis(total);
    }

    const insertInstance = async () => {
        const sendData = {token : token,instance : instance,name : instancename};
        const result = await fetch("http://admin.fbmnow.com/api/apis/insertAPI", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
          })
          .then(res => res.json());
          setflag(true);
          if (result.message == undefined || result.message == "") {
            const total = convertUser(result);
            console.log(total);
            setmes("Success!")
            setapis(total);
          }else{
            setmes(result.message)
          }
    }
    
    useEffect(() => {
        getapis()
    },[]);

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Instances', path: '' },
                    {
                        label: 'Instance Management',
                        path: '',
                        active: true,
                    },
                ]}
                title={'Instance Management'}
            />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            
                            <Table
                                columns={columns}
                                data={apis}
                                pageSize={5}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                isSearchable={true}
                            />
                            <Button style={{float : "right"}} className="btn-sm" onClick={() => openModal(0)}>Insert Instance</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose} size="sm">
                <Modal.Header onHide={handleClose} closeButton>
                    <Modal.Title as="h5">Modal Heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {
                    flag == true ? <Alert>{mes}</Alert> : ""
                }
                
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="instance">Instance</Form.Label>
                    <Form.Control type="text" name="instance" id="instance" placeholder="Enter instance" value={instance}  onChange={e => setInstance(e.target.value)}/>
                    {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="token">Token(API Key)</Form.Label>
                    <Form.Control type="text" name="token" id="instance" placeholder="Enter token"  value={token} onChange={e => setToken(e.target.value)} />
                    {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control type="text" name="name" id="name" placeholder="Enter Name"  value={instancename} onChange={e => setInstancename(e.target.value)} />
                    {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
                </Form.Group>
                
                <div className="voice-call-action pb-2 text-center">
                    <ul className="list-inline">
                        
                        <li className="list-inline-item avatar fw-bold me-2" data-bs-dismiss="modal">
                            <Button  className="rounded-pill" onClick={editToken}>
                                <i className="bi-plus-circle-dotted"></i>
                            </Button>
                        </li>
                    </ul>
                </div>
                </Modal.Body>
            </Modal>

        </>
    );
};

export default Advanced;
