import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Card, Dropdown, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import { FormInput } from '../../../components/';
import Scrollbar from '../../../components/Scrollbar';
import Loader from '../../../components/Loader';

import ProfileModal from './ProfileModal';
import VideocallModal from './VideocallModal';
import VoicecallModal from './VoicecallModal';

// default data
import { CHATHISTORY, ChatUserType, ChatMessage, MessageItem } from './data';

// images
import avatar1 from '../../../assets/images/users/avatar-2.jpg';

interface ChatHeaderProps {
    selectedUser: ChatUserType;
}

const ChatHeader = ({ selectedUser }: ChatHeaderProps) => {
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
            <div className="d-flex pb-2 border-bottom align-items-center">
                <img src={selectedUser.avatar} className="me-2 rounded-circle" height="48" alt="" />
                <div>
                    <h5 className="mt-0 mb-0 fs-14">{selectedUser.name}</h5>
                    <p className="mb-0">Online</p>
                </div>
                <div className="flex-grow-1">
                    <ul className="list-inline float-end mb-0">
                        <Dropdown as="li" className="list-inline-item fs-18 me-3">
                            <Dropdown.Toggle id="dropdown-apps" as="a" className="cursor-pointer text-dark">
                                <i className="bi bi-telephone-plus" onClick={() => handleVoicelModalShow()}></i>
                            </Dropdown.Toggle>
                        </Dropdown>

                        <Dropdown as="li" className="list-inline-item fs-18 me-3">
                            <Dropdown.Toggle id="dropdown-apps" as="a" className="cursor-pointer text-dark">
                                <i className="bi bi-camera-video" onClick={() => handleVideocallModalShow()}></i>
                            </Dropdown.Toggle>
                        </Dropdown>

                        <Dropdown as="li" className="list-inline-item fs-18">
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
                        </Dropdown>
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
                                {message.from.id === toUser.id && (
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
                                )}

                                {item.type === 'text' && (
                                    <div className="ctext-wrap">
                                        <p>{item.value}</p>
                                    </div>
                                )}

                                {item.type === 'file' && (
                                    <Card className="mb-1 shadow-none border text-start">
                                        <div className="p-2">
                                            <Row className="align-items-center">
                                                <Col className="col-auto">
                                                    <div className="avatar-sm bg-primary text-white">
                                                        <span className="avatar-title rounded">.ZIP</span>
                                                    </div>
                                                </Col>
                                                <Col className="ps-0">
                                                    <Link to="#" className="text-muted fw-bold">
                                                        {item.value.file}
                                                    </Link>
                                                    <p className="mb-0">{item.value.size}</p>
                                                </Col>
                                                <Col className="col-auto">
                                                    <Link to="#" className="ps-3 fs-24">
                                                        <i className="bi bi-arrow-down-square"></i>
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>
                                )}

                                {message.from.id !== toUser.id && (
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
                                )}
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
}

// ChatArea
const ChatArea = ({ selectedUser }: ChatAreaProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [toUser] = useState<ChatUserType>({
        id: 9,
        name: 'Shreyu N',
        avatar: avatar1,
    });

    /*
     *  Fetches the messages for selected user
     */
    const getMessagesForUser = useCallback(() => {
        if (selectedUser) {
            setLoading(true);
            setTimeout(() => {
                const modifiedChatHistory = [...CHATHISTORY].map((record) => {
                    const test = {
                        id: record.id,
                        day: record.day,
                        messages: [...record.messages].filter(
                            (m) =>
                                (m.to.id === toUser.id && m.from.id === selectedUser.id) ||
                                (toUser.id === m.from.id && m.to.id === selectedUser.id)
                        ),
                    };
                    return test;
                });
                setChatHistory([...modifiedChatHistory]);
                setLoading(false);
            }, 750);
        }
    }, [selectedUser, toUser.id]);

    useEffect(() => {
        getMessagesForUser();
    }, [getMessagesForUser]);

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            newMessage: yup.string().required('Please enter your messsage'),
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
        let newUserMessages = [...chatHistory[chatHistory.length - 1].messages];
        newUserMessages.push({
            id: chatHistory[chatHistory.length - 1].messages.length + 1,
            from: toUser,
            to: selectedUser,
            messages: [{ type: 'text', value: values['newMessage'] }],
            sendOn: new Date().getHours() + ':' + new Date().getMinutes(),
        });

        const modifiedChatHistory = [...chatHistory].map((record, index) => {
            const test = {
                id: record.id,
                day: record.day,
                messages: index === chatHistory.length - 1 ? newUserMessages : record.messages,
            };
            return test;
        });
        setChatHistory([...modifiedChatHistory]);
        reset();
    };

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
                                                return <UserMessage key={index} message={message} toUser={toUser} />;
                                            })}
                                        </React.Fragment>
                                    );
                                })}
                            </ul>
                        </Scrollbar>

                        <div className="mt-2 bg-light p-3 rounded">
                            <form noValidate name="chat-form" id="chat-form" onSubmit={handleSubmit(sendChatMessage)}>
                                <div className="row">
                                    <div className="col mb-2 mb-sm-0">
                                        <FormInput
                                            type="text"
                                            name="newMessage"
                                            className="border-0"
                                            placeholder="Enter your text"
                                            register={register}
                                            key="newMessage"
                                            errors={errors}
                                            control={control}
                                        />
                                    </div>
                                    <div className="col-sm-auto">
                                        <div className="btn-group">
                                            <Link to="#" className="btn btn-light">
                                                <i className="bi bi-emoji-smile fs-18"></i>
                                            </Link>
                                            <Link to="#" className="btn btn-light">
                                                <i className="bi bi-paperclip fs-18"></i>
                                            </Link>
                                            <Link to="#" className="btn btn-light">
                                                <i className="bi bi-camera fs-18"></i>
                                            </Link>
                                            <button type="submit" className="btn btn-success chat-send">
                                                <i className="uil uil-message"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default ChatArea;
