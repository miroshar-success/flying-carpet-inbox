import React, { useCallback, useEffect, useState,useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Card, Dropdown, Row, Col, Modal } from 'react-bootstrap';
import classNames from 'classnames';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { API_Key } from '../../../config/index';
import FileUploader from '../../../components/FileUploader';
import { APICore } from "../../../helpers/api/apiCore";


// components
import { FormInput } from '../../../components/';
import Scrollbar from '../../../components/Scrollbar';
import Loader from '../../../components/Loader';

import ProfileModal from './ProfileModal';
import VideocallModal from './VideocallModal';
import VoicecallModal from './VoicecallModal';

// default data
import { CHATHISTORY, ChatUserType, ChatMessage, MessageItem,ApiType } from './data';

// images
import avatar1 from '../../../assets/images/users/avatar-2.jpg';
import { format } from 'path';

interface ChatHeaderProps {
    selectedUser: ChatUserType;
}

const ChatHeader = ({ selectedUser }: ChatHeaderProps) => {

    const apicore = new APICore;
    const user = apicore.getLoggedInUser();

    // handle profile modal
    const [showProfileModal, setShowProfileModal] = useState<boolean>(false);

    const handleProfileModalClose = () => setShowProfileModal(false);
    const handleProfileModalShow = () => setShowProfileModal(true);

    // handle video modal
    const [showVideocallModal, setShowVideocallModal] = useState<boolean>(false);

    const handleVideocallModalClose = () => setShowVideocallModal(false);
    const handleVideocallModalShow = () => setShowVideocallModal(true);

    // handle voice modal
    const [showVoicelModal, setShowVoicelModal] = useState<boolean>(false);

    const handleVoicelModalClose = () => setShowVoicelModal(false);
    const handleVoicelModalShow = () => setShowVoicelModal(true);

    return (
        <>
            <div className="d-flex pb-2 border-bottom align-items-center" dir='rtl'>
                {selectedUser && selectedUser.avatar ? (
                    <img
                        src={selectedUser.avatar}
                        alt=""
                        className="me-2 rounded-circle"
                        height="48"
                    />
                ) : (
                    <div className="avatar-sm fw-bold d-inline-block">
                        <span
                            className={`avatar-title rounded-circle bg-soft-success text-sucess`}>
                        </span>
                    </div>
                )}
                <img src={selectedUser == undefined ? "" : selectedUser.avatar} className="me-2 rounded-circle" height="48" alt="" />
                <div>
                    <h5 className="mt-0 mb-0 fs-14" dir="ltr">{selectedUser == undefined ? "" : selectedUser.name}</h5>
                    <p className="mb-0">{selectedUser == undefined ? "" : selectedUser.userStatus}</p>
                </div>
                <div className="flex-grow-1" dir='ltr'>
                    <ul className="list-inline mb-0" >
                        {/* {
                            user.role == "Admin" ? <Dropdown as="li" className="list-inline-item fs-18 me-3">
                                <Dropdown.Toggle id="dropdown-apps" as="a" className="cursor-pointer text-dark">
                                    <i className="bi bi-telephone-plus" onClick={() => handleVoicelModalShow()}></i>
                                </Dropdown.Toggle>
                            </Dropdown> : ""
                        } */}
                        
                        {/* <Dropdown as="li" className="list-inline-item fs-18 me-3">
                                <Dropdown.Toggle id="dropdown-apps" as="a" className="cursor-pointer text-dark">
                                    <i className="bi bi-telephone-plus" onClick={() => handleVoicelModalShow()}></i>
                                </Dropdown.Toggle>
                            </Dropdown> */}
                        {/* <Dropdown as="li" className="list-inline-item fs-18 me-3">
                            <Dropdown.Toggle id="dropdown-apps" as="a" className="cursor-pointer text-dark">
                                <i className="bi bi-camera-video" onClick={() => handleVideocallModalShow()}></i>
                            </Dropdown.Toggle>
                        </Dropdown> */}

                        {/* <Dropdown as="li" className="list-inline-item fs-18">
                            <Dropdown.Toggle id="dropdown-apps" as="a" className="cursor-pointer text-dark">
                                <i className="bi bi-three-dots-vertical"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-menu-end">
                                <Dropdown.Item href="#/" onClick={() => handleProfileModalShow()}>
                                    {' '}
                                    <i className="bi bi-person-circle fs-18 me-2"></i>View Profile
                                </Dropdown.Item>
                                <Dropdown.Item href="#/">
                                    <i className="bi bi-music-note-list fs-18 me-2"></i>Media, Links and Docs
                                </Dropdown.Item>
                                <Dropdown.Item href="#/">
                                    <i className="bi bi-search fs-18 me-2"></i>Search
                                </Dropdown.Item>
                                <Dropdown.Item href="#/">
                                    <i className="bi bi-image fs-18 me-2"></i>Wallpaper
                                </Dropdown.Item>
                                <Dropdown.Item href="#/">
                                    <i className="bi bi-arrow-right-circle fs-18 me-2"></i>More
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}
                    </ul>
                </div>
            </div>

            {/* Profile Modal */}
            <ProfileModal show={showProfileModal} handleClose={handleProfileModalClose} />

            {/* video call Modal */}
            <VideocallModal show={showVideocallModal} handleClose={handleVideocallModalClose} />

            {/* Voice call Modal */}
            <VoicecallModal show={showVoicelModal} handleClose={handleVoicelModalClose} />
        </>
    );
};

interface UserMessageProps {
    message: MessageItem;
    toUser: ChatUserType;
}
// user messages
const UserMessage = ({ message, toUser }: UserMessageProps) => {

    const  validURL = (str : string) => {
        let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
      }

      const download = async (imageSrc : any) => {
        const image = await fetch(imageSrc)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)

        const link = document.createElement('a')
        link.href = imageURL
        link.download = 'image file name here'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <>
            {(message.messages || []).map((item, index) => {
                return (
                    <li
                        key={index}
                        className={classNames('clearfix', {
                            odd: message.from.id === toUser.id,
                            'mb-1': message.messages.length > 1 && index !== message.messages.length - 1,
                        })}>
                        <div className="conversation-text ms-0">
                            <div
                                className={classNames('d-flex', {
                                    'justify-content-end': message.from.id === toUser.id,
                                })}>
                                {/* {message.from.id === toUser.id && (
                                    <Dropdown className="conversation-actions">
                                        <Dropdown.Toggle as="a" className="cursor-pointer text-dark pe-1">
                                            <i className="bi bi-three-dots-vertical fs-14"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu align="end">
                                            <Dropdown.Item>
                                                <i className="bi bi-reply fs-18 me-2"></i>Reply
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <i className="bi bi-star fs-18 me-2"></i>Reply
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <i className="bi bi-trash fs-18 me-2"></i>Delete
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <i className="bi bi-files fs-18 me-2"></i>Copy
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                )} */}

                                {item.type === 'text' && (
                                    <div className="ctext-wrap" dir="rtl">
                                        {
                                            validURL(item.value) == true ? <a href={"http://"+item.value}>{item.value}</a> : item.value
                                        }
                                        
                                    </div>
                                )}

                                {item.type === 'file' && (
                                    <Card className="mb-1 shadow-none border text-start">
                                        <div className="p-2">
                                            <Row className="align-items-center">
                                                <Col className="col-auto">
                                                    <div className="avatar-sm bg-primary text-white">
                                                        <span className="avatar-title rounded">.File</span>
                                                    </div>
                                                </Col>
                                                <Col className="ps-0">
                                                    <a href={item.value} className="text-muted fw-bold">
                                                        {item.value}
                                                    </a>
                                                    <p className="mb-0">{item.value.size}</p>
                                                </Col>
                                                <Col className="col-auto">
                                                    <div className="ps-3 fs-24" onClick={() => download(item.value)}>
                                                        <i className="bi bi-arrow-down-square"></i>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>
                                )}

                                {/* {message.from.id !== toUser.id && (
                                    <Dropdown className="conversation-actions">
                                        <Dropdown.Toggle as="a" className="cursor-pointer text-dark ps-1">
                                            <i className="bi bi-three-dots-vertical fs-14"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu align="start">
                                            <Dropdown.Item>
                                                <i className="bi bi-reply fs-18 me-2"></i>Reply
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <i className="bi bi-star fs-18 me-2"></i>Reply
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <i className="bi bi-trash fs-18 me-2"></i>Delete
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <i className="bi bi-files fs-18 me-2"></i>Copy
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                )} */}
                            </div>
                            {index === message.messages.length - 1 && (
                                <p className="text-muted fs-12 mb-0 mt-1">
                                    {message.sendOn}
                                    {message.from.id === toUser.id && (
                                        <i className="bi bi-check2-all ms-1 text-success"></i>
                                    )}
                                </p>
                            )}
                        </div>
                    </li>
                );
            })}
        </>
    );
};

interface ChatAreaProps {
    selectedUser: ChatUserType;
    // admin : ChatUserType;
    setUser : (value: ChatUserType[]) => void;
    user : ChatUserType[];
    scrollref : any,
    currentAPI : ApiType
}

// ChatArea
const ChatArea = ({ selectedUser,setUser,user,scrollref,currentAPI }: ChatAreaProps) => {
    const [loading, setLoading] = useState<boolean>(false);//show loading
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);//messages
    const [real,setreal] = useState<any[]>([]);//total messages
    const [files,setfiles] = useState<any[]>([]);//store files
    const scrollreflocal =  useRef<any>(); //scroll component

    const [showModal, setModal] = useState<boolean>(false);//modal controller

    const [flag,setflag] = useState<boolean>(false);
    

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    console.log(currentAPI);
    /**
     * Auto scroll to Bottom
     */
    const scrollBottom = () => {
        if (scrollreflocal.current !== null) {
            scrollreflocal.current.scrollIntoView();
        }
    }

    /**
     * 2 July 2022 format date 
     */
    const getDateStr = (timedate : any) => {
        const year = timedate.getFullYear();
        const monthnum = timedate.getMonth();
        const month = months[monthnum];
        const date = timedate.getDate();

        const timespan = month +" "+ date + " "+ year;
        return timespan;
    }

    const toUser = {
        id : currentAPI.phone,
        name : currentAPI.phone
    }

    useEffect(() => {
        fetchData();
    },[currentAPI]);

    /**
     * Fetch messages in real time
     */
    useEffect(() => {
        const timer = setTimeout(async () => {
           await fetchData();
        },500)
        return () => {

            clearTimeout(timer);
        };
        
    },[chatHistory]);
    
    useEffect(() => {
        scrollBottom();
    },[flag])
    /**
     * Body of get message data
     * @returns 
     */
    const fetchData = async () => {
        console.log(currentAPI,"123");
        // if (selectedUser == undefined) return;
        let chatId;
        let fetchemailurl;
        if (selectedUser != undefined) {
            chatId = selectedUser['id'];
            
             fetchemailurl = `https://api.chat-api.com/instance${currentAPI.instance}/messages?chatId=${chatId}@c.us&token=${currentAPI.token}&limit=0`;
            //  console.log(chatId);
        }else{
            
             fetchemailurl = `https://api.chat-api.com/instance${currentAPI.instance}/messages?limit=0&token=${currentAPI.token}`;
        }
        
        await fetch(fetchemailurl)
        .then((res)=> res.json())
        .then((json)=>{
            const total = [...json.messages];
            // console.log(total);
            let from : ChatUserType;
            let to : ChatUserType;
            let messages : MessageItem[] = [];
            let dates : string[] = [];
            total.sort((a : any,b : any) => a.time - b.time);
            for (let i = 0; i < total.length; i++) {
                const time = total[i].time;

                const timedate = new Date(time*1000);
                const nowdate = new Date();
                
                let timespan = getDateStr(timedate);
                let hour = timedate.getHours();
                let min = String(timedate.getMinutes());
                let tmp = " AM";
                let hourtxt = String(hour);
                if (hour > 12) {
                    hour -= 12;
                    tmp = " PM";
                }
                if (min.length == 1) {
                    min = "0" + min;
                }

                if (getDateStr(timedate) == getDateStr(nowdate)) {
                    timespan = "Today";
                }

                if (dates.indexOf(timespan) == -1) {
                    dates.push(timespan);  
                }
                // create message
                let user : ChatUserType = {
                    id : total[i]['chatName'],
                    name : total[i]['senderName'],
                    userStatus : "online"
                }
                let admin : ChatUserType = {
                    id : currentAPI.phone,
                    name : currentAPI.phone,
                    userStatus : "online"
                }
                if(total[i]['fromMe'] == 1){

                    from = admin;
                    to = user;
                }else{
                    from = user;
                    to = admin;
                }
                let mes : MessageItem = {
                    id : i,
                    from : from,
                    to : to,
                    sendOn : hourtxt + " : " + min + tmp,
                    messages  : [{
                        type : total[i].type == 'chat' ? 'text' : 'file',
                        value : total[i].body,
                    }],
                    sendDate : timespan
                }
                messages.push(mes);
            }
            let chatmessages : ChatMessage[] = [];
            for (let i = 0; i < dates.length; i++) {
                let dateMessage : MessageItem[] = [];
                dateMessage = messages.filter((mes) => (mes.sendDate == dates[i]));
                chatmessages.push({
                    id : i,
                    day : dates[i],
                    messages : dateMessage
                });
            }
            
            const tmp = [...chatHistory];
            if (chatHistory.length == 0) {
                setflag(true);
            }else{
                if (chatmessages[chatmessages.length - 1].messages.length != tmp[tmp.length - 1].messages.length) {
                    setflag(true);
                }else{
                    setflag(false)
                }
            }
            setChatHistory(chatmessages);
        })
        .catch(err => {
             fetchData()
        })
    }
    
    const onFileUpload = (files : any) => {
        setfiles(files);
    }

    /*
     *  Fetches the messages for selected user
     */
    // const getMessagesForUser = useCallback(() => {
    //     if (selectedUser) {
    //         setTimeout(() => {
    //             fetchData();
    //             // const modifiedChatHistory = [...chatHistory].map((record) => {
    //             //     const test = {
    //             //         id: record.id,
    //             //         day: record.day,
    //             //         messages: [...record.messages].filter(
    //             //             (m) =>
    //             //                 (m.to.id === admin.id && m.from.id === selectedUser.id) ||
    //             //                 (admin.id === m.from.id && m.to.id === selectedUser.id)
    //             //         ),
    //             //     };
    //             //     return test;
    //             // });
    //             // modifiedChatHistory.filter((mes) => mes.messages.length);
    //             // setChatHistory([...modifiedChatHistory]);
    //             // fetchData(selectedUser.id);
    //             setLoading(false);
    //         }, 750);
    //     }
    // }, [selectedUser]);

    // useEffect(() => {
    //     getMessagesForUser();
    // }, [getMessagesForUser]);

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            newMessage: yup.string().required('אנא רשום את הודעתך'),
        })
    );

    

    /*
     * form methods
     */
    const methods = useForm({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
        reset,
    } = methods;

    /**
     * sends the chat message
     */
    const sendChatMessage = (values: { newMessage: string }) => {
        const now = new Date();
        const nowstr = getDateStr(now);

        const fetchUrl = `https://api.chat-api.com/instance${API_Key.instance}/sendMessage?token=${API_Key.token}`;
        const dData = {body : values['newMessage'], phone : selectedUser.id};

        fetch(fetchUrl, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(dData) // body data type must match "Content-Type" header
          })
          .then(res => {
                // props.history.push("/apps/email/inbox")
                console.log(res);
          })

        // let newUserMessages = [...chatHistory[chatHistory.length - 1].messages];
        // newUserMessages.push({
        //     id: chatHistory[chatHistory.length - 1].messages.length + 1,
        //     from: toUser,
        //     to: selectedUser,
        //     messages: [{ type: 'text', value: values['newMessage'] }],
        //     sendOn: new Date().getHours() + ':' + new Date().getMinutes(),
        // });
        // let modifiedChatHistory = [...chatHistory].map((record, index) => {
        //     const test = {
        //         id: record.id,
        //         day: record.day,
        //         messages: index === chatHistory.length - 1 ? newUserMessages : record.messages,
        //     };
        //     return test;
        // });

        // let check = [...chatHistory].filter((m) => m.day == nowstr);
        // if (check.length == 0) {
        //     newUserMessages = [];
        //     newUserMessages.push({
        //         id: 1,
        //         from: toUser,
        //         to: selectedUser,
        //         messages: [{ type: 'text', value: values['newMessage'] }],
        //         sendOn: new Date().getHours() + ':' + new Date().getMinutes(),
        //     });
        //     modifiedChatHistory = [...chatHistory];
        //     modifiedChatHistory.push({
        //         id : chatHistory.length,
        //         day : nowstr,
        //         messages : newUserMessages
        //     });
        // }

        
        // setChatHistory([...modifiedChatHistory]);
        reset();
    };

    const sendfile = async () => {
        
        for (let i = 0; i < files.length; i++) {
            const dData = {body : files[i],filename : files[i]['name'], phone : selectedUser.id};
            const formData = new FormData();
            dData['body'] = await getBase64(files[i]);
            send(dData);
        }
        setModal(false)
        
    }

    const send = async (senddata : any) => {
        const fetchUrl = `https://api.chat-api.com/instance${API_Key.instance}/sendFile?token=${API_Key.token}`;

        const result = await fetch(fetchUrl, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
            //   'Content-Type': 'application/x-www-form-urlencoded',
            //   'Content-Type': 'multipart/form-data',

            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(senddata)  // body data type must match "Content-Type" header
          });
          console.log(result);
            
    }

    const getBase64 = async (file : any) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
      }

    return (
        <>
            <Card>
                <Card.Body>
                    {loading && <Loader />}
                    <ChatHeader selectedUser={selectedUser} />

                    <div className="mt-1">
                        <Scrollbar style={{ height: '509px', width: '100%' }}>
                            <ul className="conversation-list px-0 h-100">
                                {(chatHistory || []).map((item, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <li className="position-relative">
                                                <hr />
                                                <h4>
                                                    <span className="badge bg-light text-dark position-absolute top-0 start-50 translate-middle">
                                                        {item.day}
                                                    </span>
                                                </h4>
                                            </li>
                                            {(item.messages || []).map((message, index) => {
                                                // console.log(message);
                                                return <UserMessage key={index} message={message} toUser={toUser} />;
                                            })}
                                        </React.Fragment>
                                    );
                                })}
                            </ul>
                            <div ref={scrollreflocal}></div>
                        </Scrollbar>
                        {/* handle submited message */}
                        <div className="mt-2 bg-light p-3 rounded">
                            <form noValidate name="chat-form" id="chat-form" onSubmit={handleSubmit(sendChatMessage)}>
                                <div className="row">
                                    <div className="col-sm-auto" >
                                        <div className="btn-group">
                                            {/* <Link to="#" className="btn btn-light">
                                                <i className="bi bi-camera fs-18"></i>
                                            </Link> */}
                                            <button type="submit" className="btn btn-success chat-send">
                                                <i className="uil uil-message"></i>
                                            </button>
                                            {/* <Link to="#" className="btn btn-light">
                                                <i className="bi bi-emoji-smile fs-18"></i>
                                            </Link> */}
                                            <div className="btn btn-light" onClick={() => setModal(true)}>
                                                <i className="bi bi-paperclip fs-18"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-2 mb-sm-0">
                                        <FormInput
                                            type="text"
                                            name="newMessage"
                                            className="border-0"
                                            placeholder="אנא רשום את הודעתך"
                                            register={register}
                                            key="newMessage"
                                            errors={errors}
                                            control={control}
                                            dir="rtl"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Modal show={showModal} onHide={() => setModal(false)} centered>
                <Modal.Header onHide={() => setModal(false)} closeButton>
                    <Modal.Title as="h5">Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <FileUploader
                        onFileUpload={(files) => onFileUpload(files)}
                    />
                    <div className="mt-4">
                        <Link
                            to="#"
                            className="btn btn-outline-primary rounded-pill width-md"
                            onClick={() => sendfile()}>
                            <i className="uil uil-arrow-right me-1"></i> Submit
                        </Link>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ChatArea;
