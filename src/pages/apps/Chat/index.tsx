import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import { API_Key } from '../../../config/index';

// components
import PageTitle from '../../../components/PageTitle';

import ChatUsers from './ChatUsers';
import ChatArea from './ChatArea';
// dummy data
import { USERS, ChatUserType } from './data';

// ChatApp
const ChatApp = () => {
    const [selectedUser, setSelectedUser] = useState<ChatUserType>({});
    const [admin, setadmin] = useState<ChatUserType>({});
    const [USER, setUSER] = useState<ChatUserType[]>([]); // static users
    const [user, setUser] = useState<ChatUserType[]>([]); // dynamic users
    
    /**
     * On user change
     */
    const onUserChange = (user: ChatUserType) => {
        setSelectedUser(user);
    };

    useEffect(() => {
        getMe();
        getUsers();
    },[])

    useEffect(() => {
        setSelectedUser(user[0])

    },[user])

    const getMe = () => {
        const fetchemailurl = `https://api.chat-api.com/instance${API_Key.instance}/me?token=${API_Key.token}`;
        fetch(fetchemailurl)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                let user : ChatUserType = {
                    id : json.phone,
                    name : json.phone,
                    userStatus : "online",
                    avatar : json.photo
                }
                setadmin(user);
            })
    }

    const getUsers = () => {
        const fetchemailurl = `https://api.chat-api.com/instance${API_Key.instance}/messages?token=${API_Key.token}&limit=1000`;
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
                        lastMessageOn : hour + ":"+min +tmp
                    };
                    if (total[i]['fromMe'] == 1) {
                        user.name = total[i]['chatId'];
                    }
                    userdata.push(user)
                }
            }
            //set lastmess
            // for (let i = 0; i < userdata.length; i++) {
            //     const temp = [...total.filter((item) => item.fromMe != 1 && item.chatName == userdata[i]['id'])];
            //     if (temp.length > 0) {
            //         if (temp[0]['type'] != "chat") {
            //             userdata[i]['lastMessage'] = "Attached file";  
            //         }else{
            //             userdata[i]['lastMessage'] = temp[0].body;
            //         }
            //         const time = temp[0].time;
            //         console.log(temp[0]);
            //         const timedate = new Date(time*1000);
            //         let hour = timedate.getHours();
            //         let min = timedate.getMinutes();
            //         let tmp = " AM";
            //         if (hour > 12) {
            //             hour -= 12;
            //             tmp = " PM";
            //         }
            //         userdata[i]['lastMessageOn'] = hour + ":"+min +tmp;
            //     }
            // }

            setUSER(userdata);
            setUser(userdata);
        })
    }

    const search = (text: string) => {
        console.log(text);
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
                    <ChatArea selectedUser={selectedUser} setUser={setUser} user={user} admin={admin}/>
                </Col>
                <Col lg={5} xxl={3}>
                    <ChatUsers admin={admin} user={user} onUserSelect={onUserChange} onSearch = {search}/>
                </Col>
            </Row>
        </>
    );
};

export default ChatApp;
