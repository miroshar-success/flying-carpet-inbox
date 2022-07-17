import React, { useState, useEffect } from 'react';
import { Link,Redirect } from 'react-router-dom';
import { Row, Col, Dropdown, ButtonGroup, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

// Form Editor
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
// styles
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import classNames from 'classnames';


// components
import PageTitle from '../../../components/PageTitle';

import LeftBar from './LeftBar';

import {convertToRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html';

// dummy data
import { emails } from './data';

import axios from 'axios';

// images
import avatarImg from '../../../assets/images/users/avatar-2.jpg';
import avatarImg2 from '../../../assets/images/users/avatar-7.jpg';
import img1 from '../../../assets/images/attached-files/img-1.jpg';
import img2 from '../../../assets/images/attached-files/img-2.jpg';
import img3 from '../../../assets/images/attached-files/img-3.jpg';

interface EmailItems {
    avatar: string;
    subject: string;
    from_name: string;
    from_email: string;
    recieved_on: string;
    attachments: [
        { id: number; name: string; size: string; ext: string },
        { id: number; name: string; size: string; ext: string },
        { id: number; name: string; size: string; ext: string }
    ];
}

// EmailDetail
const EmailDetail = (props : any) => {
    const {userId, context,time} = props.match.params;

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let timedate = new Date(time*1000);
    let year = timedate.getFullYear();
    let monthnum = timedate.getMonth();
    let month = months[monthnum];
    let date = timedate.getDate();
    let hour = timedate.getHours();
    let min = timedate.getMinutes();
    let tmp = " AM";
    if (hour > 12) {
        hour -= 12;
        tmp = " PM";
    }
    let timespan = month +" "+ date + " "+ year + ","+hour+" : "+min+tmp; 
    // const [totalUnreadEmails] = useState<number>(emails.filter((e: any) => e.is_read === false).length);
    const [ucontext , setucontext] = useState<string>("");
    
    const [email] = useState<EmailItems>({
        avatar: avatarImg,
        subject: 'Your elite author Graphic Optimization reward is ready!',
        from_name: 'Steven Smith',
        from_email: 'jonathan@domain.com',
        recieved_on: 'Jul 24, 2019, 5:17 AM',
        attachments: [
            { id: 1, name: 'Hyper-admin-design.zip', size: '2.3MB', ext: '.zip' },
            { id: 2, name: 'Dashboard-design.jpg', size: '0.3MB', ext: '.jpg' },
            { id: 3, name: 'Admin-bug-report.mp4', size: '4.1MB', ext: '.mp4' },
        ],
    });

    const [editorState, setEditorState] = useState<any>();

    useEffect(() => {
        const html = ``;
        const contentBlock = htmlToDraft(html);
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            setEditorState(EditorState.createWithContent(contentState));
        }
    }, []);

    /**
     * On editor body change
     */
    const onEditorStateChange = (editorStates: any) => {
        setEditorState(editorStates);
    };


    const sendMessage = () => {
        
        const currentContent = editorState.getCurrentContent();
        const contentRaw = convertToRaw(currentContent);
        const Mvalue = currentContent.hasText() ? draftToHtml(contentRaw) : "";

        const tdpara = document.createElement("p");
        tdpara.innerHTML = Mvalue;
        const sendMes = tdpara.innerText;
        const fetchUrl = "https://api.chat-api.com/instance7827/sendMessage?token=3px6cypvje3xsjmc";
        const dData = {body : sendMes, phone : userId};
        
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
                props.history.push("/apps/email/inbox")
          })
          
    }

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Email', path: '/apps/email/details' },
                    { label: 'Email Detail', path: '/apps/email/details', active: true },
                ]}
                title={'Email Detail'}
            />

            <Row>
                <Col lg={12}>
                    <div className="email-container">
                        {/* <div className="inbox-leftbar">
                            <Link to="/apps/email/compose" className="btn btn-danger d-block">
                                Compose
                            </Link>
                            <LeftBar showChatDetails={false} totalUnreadEmails={totalUnreadEmails} />
                        </div> */}

                        <div className="inbox-rightbar p-4">
                            <ButtonGroup className="mb-2 me-1">
                                <OverlayTrigger placement="top" overlay={<Tooltip id="archived">Archived</Tooltip>}>
                                    {({ ref, ...triggerHandler }) => (
                                        <Button ref={ref} {...triggerHandler} variant="light">
                                            <i className="uil uil-archive-alt"></i>
                                        </Button>
                                    )}
                                </OverlayTrigger>
                                <Button variant="light">
                                    <OverlayTrigger placement="top" overlay={<Tooltip id="spam">Spam</Tooltip>}>
                                        <i className="uil uil-exclamation-octagon"></i>
                                    </OverlayTrigger>
                                </Button>
                                <OverlayTrigger placement="top" overlay={<Tooltip id="delete">Delete</Tooltip>}>
                                    <Button variant="light">
                                        <i className="uil uil-trash-alt"></i>
                                    </Button>
                                </OverlayTrigger>
                            </ButtonGroup>

                            <OverlayTrigger placement="bottom" overlay={<Tooltip id="folder">Folder</Tooltip>}>
                                <Dropdown className="btn-group mb-2 me-1">
                                    <Dropdown.Toggle className="cursor-pointer btn btn-light">
                                        <i className="uil uil-folder"></i> <i className="uil uil-angle-down"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Header>Move to :</Dropdown.Header>
                                        <Dropdown.Item>Social</Dropdown.Item>
                                        <Dropdown.Item>Promotions</Dropdown.Item>
                                        <Dropdown.Item>Updates</Dropdown.Item>
                                        <Dropdown.Item>Forums</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </OverlayTrigger>

                            <OverlayTrigger placement="top" overlay={<Tooltip id="labels">Labels</Tooltip>}>
                                <Dropdown className="btn-group mb-2 me-1">
                                    <Dropdown.Toggle className="btn btn-light cursor-pointer">
                                        <i className="uil uil-label"></i> <i className="uil uil-angle-down"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Header>Label as:</Dropdown.Header>
                                        <Dropdown.Item>Social</Dropdown.Item>
                                        <Dropdown.Item>Promotions</Dropdown.Item>
                                        <Dropdown.Item>Updates</Dropdown.Item>
                                        <Dropdown.Item>Forums</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </OverlayTrigger>

                            <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip id="more actions">More Actions</Tooltip>}>
                                <Dropdown className="btn-group mb-2">
                                    <Dropdown.Toggle className="cursor-pointer btn btn-light">
                                        <i className="uil uil-ellipsis-h fs-13"></i> More{' '}
                                        <i className="uil uil-angle-down"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Header>More Options :</Dropdown.Header>
                                        <Dropdown.Item>Mark as Unread</Dropdown.Item>
                                        <Dropdown.Item>Add to Tasks</Dropdown.Item>
                                        <Dropdown.Item>Add Star</Dropdown.Item>
                                        <Dropdown.Item>Mute</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </OverlayTrigger>

                            <div className="mt-2">
                                <h5>Hi Bro, How are you?</h5>

                                <hr />

                                <div className="d-sm-flex mb-4 mt-1">
                                <span
                                    className={classNames('star-toggle', 'uil', 'uil uil-user-plus', {
                                        'text-warning':"",
                                    })}    
                                ></span>
                                    <div className="flex-grow-1">
                                        <small className="float-end">{timespan}</small>
                                        <h6 className="m-0">{userId} @c.us</h6>
                                        {/* <small className="text-muted">From: {userId} @c.us</small> */}
                                    </div>
                                </div>

                                <p>
                                    <b>Hi Bro...</b>
                                </p>
                                <div className="text-muted">
                                    {context}
                                </div>

                                <hr />
                                

                                <div className="d-flex mb-0 mt-5">
                                    <img src={avatarImg2} className="me-3 rounded-circle avatar-sm" alt="" />
                                    <div className="flex-grow-1">
                                        <div className="mb-2">
                                            <Editor
                                                editorState={editorState}
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName mb-3 card"
                                                editorClassName="editorClassName px-2 pt-0"
                                                editorStyle={{ minHeight: '300px',outerHeight: "700px",overflow : "auto" }}
                                                onEditorStateChange={onEditorStateChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="text-end">
                                    <Button variant="primary" className="rounded-pill width-sm" onClick={sendMessage}>
                                        Send
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default EmailDetail;
