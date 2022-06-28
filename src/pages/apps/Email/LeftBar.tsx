import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import Scrollbar from '../../../components/Scrollbar';

// images
import img1 from '../../../assets/images/users/avatar-1.jpg';
import img2 from '../../../assets/images/users/avatar-2.jpg';
import img3 from '../../../assets/images/users/avatar-6.jpg';

// types
import { ChatUserTypes } from './data';

const ChatBox = () => {
    const handleClose = () => {
        const elem = document.getElementById('chatbox');
        elem!.style.opacity = '0';
    };
    return (
        <div className="chatbox overflow-hidden" id="chatbox">
            <div className="bg-primary p-2">
                <div className="d-flex">
                    <img src={img2} alt="" className="avatar-sm rounded ms-1 me-2" />
                    <div className="flex-grow-1">
                        <h5 className="fs-13 text-white m-0">Johnny</h5>
                        <small className="text-white-50">
                            <i className="uil uil-circle fs-11 text-success me-1"></i>Active Now
                        </small>
                    </div>
                    <div className="float-end fs-18 mt-1">
                        <Link to="" className="text-white me-2">
                            <i className="uil uil-comment-alt-notes fs-16"></i>
                        </Link>
                        <Link to="#" className="chat-close text-white" onClick={handleClose}>
                            <i className="uil uil-multiply fs-14"></i>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="chat-conversation p-2">
                <Scrollbar style={{ maxHeight: '220px' }}>
                    <ul className="conversation-list">
                        <li className="text-center">
                            <span className="badge text-secondary">Today</span>
                        </li>
                        <li className="clearfix even">
                            <div className="chat-avatar">
                                <img src={img2} alt="male" />
                                <small>10: 00</small>
                            </div>
                            <div className="conversation-text">
                                <div className="ctext-wrap">
                                    <div className="fw-medium">Johnny</div>
                                    <p>Hello!</p>
                                </div>
                            </div>
                        </li>
                        <li className="clearfix odd">
                            <div className="conversation-text">
                                <div className="ctext-wrap">
                                    <div className="fw-medium">Nik P</div>
                                    <p>Hi, How are you? What about our next meeting?</p>
                                </div>
                            </div>
                        </li>
                        <li className="clearfix">
                            <div className="chat-avatar">
                                <img src={img3} alt="male" />
                                <small>10: 01</small>
                            </div>
                            <div className="conversation-text">
                                <div className="ctext-wrap">
                                    <div className="fw-medium">Johnny</div>
                                    <p>Yeah everything is fine</p>
                                </div>
                            </div>
                        </li>
                        <li className="clearfix odd">
                            <div className="conversation-text">
                                <div className="ctext-wrap">
                                    <div className="fw-medium">Nik P</div>
                                    <p>Wow that's great...</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Scrollbar>
                <div className="position-relative chat-input mt-2">
                    <input type="text" className="form-control" placeholder="Type your message..." />
                    <div className="chat-link">
                        <Link to="#" className="p-1">
                            <i className="uil-image"></i>
                        </Link>
                        <Link to="#" className="p-1">
                            <i className="uil-navigator"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface LeftBarProps {
    totalUnreadEmails?: number;
    chatUsers?: ChatUserTypes[];
    showChatDetails?: boolean;
}

// left side panel
const LeftBar = ({ totalUnreadEmails, chatUsers, showChatDetails }: LeftBarProps) => {
    const showChat = showChatDetails === undefined && true;

    return (
        <>
            <div className="mail-list mt-4">
                <Link to="#" className="list-group-item border-0 text-danger fw-bold">
                    <i className="uil uil-envelope-alt fs-15 me-1"></i>Inbox
                    <span className="badge bg-danger float-end ms-2 mt-1">{totalUnreadEmails}</span>
                </Link>
                <Link to="#" className="list-group-item border-0">
                    <i className="uil uil-envelope-star fs-15 me-1"></i>Starred
                </Link>
                <Link to="#" className="list-group-item border-0">
                    <i className="uil uil-envelope-edit fs-15 me-1"></i>Draft
                    <span className="badge bg-info float-end ms-2 mt-1">32</span>
                </Link>
                <Link to="#" className="list-group-item border-0">
                    <i className="uil uil-envelope-send fs-15 me-1"></i>Sent Mail
                </Link>
                <Link to="#" className="list-group-item border-0">
                    <i className="uil uil-trash fs-15 me-1"></i>Trash
                </Link>
            </div>

            <h6 className="mt-4">Labels</h6>

            <div className="list-group border-0 mail-list">
                <Link to="#" className="list-group-item border-0">
                    <span className="uil uil-circle text-primary fs-12 me-1"></span>Web App
                </Link>
                <Link to="#" className="list-group-item border-0">
                    <span className="uil uil-circle text-info fs-12 me-1"></span>Recharge
                </Link>
                <Link to="#" className="list-group-item border-0">
                    <span className="uil uil-circle text-success fs-12 me-1"></span>Wallet Balance
                </Link>
                <Link to="#" className="list-group-item border-0">
                    <span className="uil uil-circle text-warning fs-12 me-1"></span>
                    Friends
                </Link>
                <Link to="#" className="list-group-item border-0">
                    <span className="uil uil-circle text-secondary fs-12 me-1"></span>
                    Family
                </Link>
            </div>

            {showChat && (
                <>
                    <div className="mt-4">
                        <div className="d-flex">
                            <div className="me-2 flex-shrink-0">
                                <img src={img1} alt="" className="avatar-sm rounded-circle" />
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                                <h5 className="fs-14 m-0">Nik Patel</h5>
                                <small className="text-muted">
                                    <i className="uil uil-circle fs-11 text-success"></i> Active Now
                                </small>
                            </div>

                            <Dropdown className="float-end mt-1" align="end">
                                <Dropdown.Toggle as="a" className="cursor-pointer arrow-none">
                                    <i className="uil uil-ellipsis-v text-muted fs-12"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end">
                                    <Dropdown.Item>Edit</Dropdown.Item>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    <hr className="mb-1" />

                    <ul className="list-unstyled">
                        {(chatUsers || []).map((user, index) => {
                            return (
                                <li key={index} className="py-2">
                                    <Link to="#" className="chat">
                                        <div className="d-flex">
                                            <div className="me-2 flex-shrink-0">
                                                {user.avatar ? (
                                                    <img
                                                        src={user.avatar}
                                                        alt=""
                                                        className="avatar-sm rounded-circle"
                                                    />
                                                ) : (
                                                    <div className="avatar-sm fw-bold d-inline-block">
                                                        <span
                                                            className={`avatar-title rounded-circle bg-soft-${user.variant} text-${user.variant}`}>
                                                            {user.name[0]}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-grow-1 ps-1 overflow-hidden">
                                                <h5 className="fs-14 m-0">{user.name}</h5>
                                                <p className="text-muted fs-13 text-truncate mb-0">{user.message}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <ChatBox />
                </>
            )}
        </>
    );
};

export default LeftBar;
