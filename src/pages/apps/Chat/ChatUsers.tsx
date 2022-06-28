import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Dropdown } from 'react-bootstrap';
import classNames from 'classnames';

// components
import Scrollbar from '../../../components/Scrollbar';

// dummy data
import { USERS, ChatUserType } from './data';

// images
import profilePic from '../../../assets/images/users/avatar-2.jpg';

interface ChatUsersProps {
    onUserSelect: (value: ChatUserType) => void;
}

// ChatUsers
const ChatUsers = ({ onUserSelect }: ChatUsersProps) => {
    const [user, setUser] = useState<ChatUserType[]>([...USERS]);
    const [selectedUser, setSelectedUser] = useState<ChatUserType>(USERS[1]);

    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    /*
     * toggle apps-dropdown
     */
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    /**
     * Search the user
     * @param {*} text
     */
    const search = (text: string) => {
        setUser(text ? [...USERS].filter((u) => u.name!.toLowerCase().indexOf(text.toLowerCase()) >= 0) : [...USERS]);
    };

    /**
     * Activates the user
     * @param {*} user
     */
    const activateUser = (user: ChatUserType) => {
        setSelectedUser(user);
        if (onUserSelect) {
            onUserSelect(user);
        }
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <div className="d-flex pb-2 border-bottom align-items-center">
                        <img src={profilePic} className="me-2 rounded-circle" height="48" alt="" />
                        <div>
                            <h5 className="my-0 fs-14">Shreyu N</h5>
                        </div>

                        <div className="flex-grow-1">
                            <ul className="list-inline text-end mb-0">
                                <Dropdown
                                    show={dropdownOpen}
                                    as="li"
                                    onToggle={toggleDropdown}
                                    className="list-inline-item fs-18">
                                    <Dropdown.Toggle
                                        id="dropdown-apps"
                                        as="a"
                                        onClick={toggleDropdown}
                                        className={classNames('text-dark', 'cursor-pointer', { show: dropdownOpen })}>
                                        <i className="bi bi-three-dots-vertical"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-end">
                                        <Dropdown.Item href="#/">
                                            <i className="bi bi-people fs-16 me-2"></i>New Group
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/">
                                            <i className="bi bi-person-lines-fill fs-16 me-2"></i>
                                            Contacts
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/">
                                            <i className="bi bi-bookmark fs-16 me-2"></i>Saved Message
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/">
                                            <i className="bi bi-person-plus fs-16 me-2"></i>Invite Friends
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/">
                                            <i className="bi bi-question-circle fs-16 me-2"></i>Help
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/">
                                            <i className="bi bi-gear fs-16 me-2"></i>Setting
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <form className="chat-search">
                            <div className="chat-search-box">
                                <div className="input-group">
                                    <button className="btn input-group-text" type="submit">
                                        <i className="uil uil-search"></i>
                                    </button>
                                    <input
                                        type="search"
                                        className="form-control"
                                        placeholder="Search..."
                                        id="top-search"
                                        onKeyUp={(e: any) => search(e.target.value)}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="pe-2">
                        <Scrollbar style={{ height: '549px', width: '100%' }}>
                            {(user || []).map((user, index) => {
                                return (
                                    <Link
                                        to="#"
                                        key={index}
                                        className="text-body"
                                        onClick={(e: any) => {
                                            activateUser(user);
                                        }}>
                                        <div
                                            className={classNames('d-flex', 'align-items-start', 'p-2', {
                                                'bg-light': user.id === selectedUser.id,
                                            })}>
                                            <div className="position-relative">
                                                <span
                                                    className={classNames('user-status', {
                                                        'bg-success': user.userStatus === 'online',
                                                        'bg-danger': user.userStatus === 'busy',
                                                        'bg-warning': user.userStatus === 'away',
                                                    })}></span>
                                                <img
                                                    src={user.avatar}
                                                    className="me-2 rounded-circle"
                                                    height="48"
                                                    alt=""
                                                />
                                            </div>

                                            <div className="w-100 overflow-hidden">
                                                <h5 className="mt-0 mb-0 fs-14">
                                                    <span className="float-end text-muted fs-12">
                                                        {user.lastMessageOn}
                                                    </span>
                                                    {user.name}
                                                </h5>
                                                <p className="mt-1 mb-0 text-muted fs-14">
                                                    {user.totalUnread !== 0 && (
                                                        <span className="float-end badge bg-danger text-white">
                                                            {user.totalUnread}
                                                        </span>
                                                    )}
                                                    <span
                                                        className={classNames('w-75', {
                                                            'text-dark': user.totalUnread,
                                                        })}>
                                                        {user.lastMessage}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </Scrollbar>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default ChatUsers;
