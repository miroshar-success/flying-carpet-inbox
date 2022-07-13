import React, { useEffect, useState,useRef } from 'react';
import { Row, Col } from 'react-bootstrap';

import { API_Key } from '../../../config/index';

// components
import PageTitle from '../../../components/PageTitle';

import ChatUsers from './ChatUsers';
import ChatArea from './ChatArea';
// dummy data
import { USERS, ChatUserType,ApiType } from './data';
import { useCallback } from 'react';


// ChatApp
const ChatApp = () => {
    const [selectedUser, setSelectedUser] = useState<ChatUserType>({});
    // const [admin,setadmin] = useState<ChatUserType>({});
    const [USER,setUSER] = useState<ChatUserType[]>([]);
    const [user, setUser] = useState<ChatUserType[]>([]);
    const [API, setAPI] = useState<ApiType[]>([]);
    const [currentAPI,setCurrentAPI] = useState<ApiType>({});

    const [flag,setflag] = useState<boolean>(false);
    

    const scrollref =  useRef<any>(); 
    
    /**
     * On user change
     */
    const onUserChange = (user: ChatUserType) => {
        setSelectedUser(user);
    };

    useEffect(() => {
        getAPIS();
    },[])

    useEffect(() => {
        getUsers();
    },[currentAPI])

    useEffect(() => {
        setSelectedUser(user[0])

    },[user])


    const getUsers = () => {
        if (API.length == 0) return;
        console.log(currentAPI);
        const instance = currentAPI.instance;
        const token = currentAPI.token;
        const fetchemailurl = `https://api.chat-api.com/instance${instance}/messages?limit=0&token=${token}`;
        fetch(fetchemailurl)
        .then((res)=> res.json())
        .then((json)=>{
            const total = [...json.messages];
            console.log(total);
            let userdata : ChatUserType[] = [];
            let tempdata = [];
            total.sort((a : any, b : any) => b.time - a.time);
            for (let i = 0; i < total.length; i++) {
                if (tempdata.indexOf(total[i]['chatId']) == -1) {
                    tempdata.push(total[i]['chatId']);
                    let lastMessage;
                    if (total[i]['type'] != "chat") {
                        lastMessage = "Attached file";  
                    }else{
                        lastMessage = total[i].body.slice(0,20);
                    }
                    const time = total[i].time;
                    const timedate = new Date(time*1000);
                    let hour = timedate.getHours();
                    let min = timedate.getMinutes();
                    let tmp = " AM";
                    if (hour > 12) {
                        hour -= 12;
                        tmp = " PM";
                    }
                    
                    let user : ChatUserType = {
                        id : total[i]['chatName'],
                        avatar : "",
                        name : total[i]['senderName'],
                        userStatus : "online",
                        lastMessage : lastMessage,
                        lastMessageOn : hour + ":"+ (min < 10 ? "0" + min : min) +tmp
                    };
                    if (total[i]['fromMe'] == 1) {
                        user.name = total[i]['chatId'];
                    }
                    userdata.push(user)
                }
            }

            setUSER(userdata);
            setUser(userdata);
        })
        .catch(err=>{

        })
    }

    const getAPIS = () => {
        fetch("http://localhost:5000/api/apis/getAPI")
            .then(res => res.json())
            .then((json) => {
                let total : ApiType[] = [];
                for (let i = 0; i < json.length; i++) {
                    let temp  = {id : json[i].id, token : json[i].token, instance : json[i].instance,phone : json[i].phone};
                    total.push(temp)
                }
                setAPI(total);
                setCurrentAPI(total[0]);
            })
    }

    const search = (text: string) => {
        setUser(text ? [...USER].filter((u) => u.name!.toLowerCase().indexOf(text.toLowerCase()) >= 0) : [...USER]);
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    // { label: 'Apps', path: '/apps/chat' },
                    // { label: 'Chat', path: '/apps/chat', active: true },
                ]}
                title={'Chat'}
            />

            <Row>
                <Col lg={7} xxl={9}>
                    <ChatArea selectedUser={selectedUser} setUser={setUser} user={user}  scrollref={scrollref} currentAPI={currentAPI}/>
                </Col>
                <Col lg={5} xxl={3}>
                    <ChatUsers  user={user} onUserSelect={onUserChange} onSearch = {search}  currentAPI={currentAPI} setCurrentAPI={setCurrentAPI} API = {API} />
                </Col>
            </Row>
        </>
    );
};

export default ChatApp;
