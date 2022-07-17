import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Dropdown } from 'react-bootstrap';
import classNames, { Value } from 'classnames';
import FeatherIcons from 'feather-icons-react';

import { API_Key } from '../../../config/index';

// components
import Scrollbar from '../../../components/Scrollbar';

// dummy data
import { USERS, ChatUserType,ApiType } from './data';

// images
import profilePic from '../../../assets/images/users/avatar-2.jpg';

interface ChatUsersProps {
    onUserSelect: (value: ChatUserType) => void;
    // admin : ChatUserType;
    user : ChatUserType[];
    onSearch : (value : string) => void,
    currentAPI : ApiType,
    setCurrentAPI : (Value : ApiType) => void,
    API : ApiType[]
}

// ChatUsers
const ChatUsers = ({ onUserSelect, user, onSearch,currentAPI,setCurrentAPI,API }: ChatUsersProps) => {
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
    // const search = (text: string) => {
    //     setUser(text ? [...USERS].filter((u) => u.name!.toLowerCase().indexOf(text.toLowerCase()) >= 0) : [...USERS]);
    // };

    /**
     * Activates the user
     * @param {*} user
     */
    const activateUser = (user: ChatUserType) => {
        if (onUserSelect) {
            onUserSelect(user);
        }
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <div className="d-flex pb-2 border-bottom align-items-center" dir="rtl">
                        <Dropdown  className="mt-2 me-1">
                                <Dropdown.Toggle  className="cursor-pointer">
                                    {(currentAPI == undefined) ? "" : currentAPI.name}
                                    <i className="icon">
                                        {/* <span>
                                            {admin.avatar ? (
                                                <img
                                                    src={admin.avatar}
                                                    alt=""
                                                    className="avatar-sm rounded-circle admin-avatar"
                                                />
                                            ) : (
                                                <div className="avatar-sm fw-bold d-inline-block admin-avatar">
                                                    <span className={`avatar-title rounded-circle bg-soft-success text-sucess`}>
                                                    </span>
                                                </div>
                                            )}
                                        </span> */}
                                        <FeatherIcons icon="chevron-down"></FeatherIcons>
                                        
                                    </i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                        API.map(api => <Dropdown.Item onClick={() => setCurrentAPI(api)}>{api.name}</Dropdown.Item>)
                                    }
                                    {/* <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#">Separated link</Dropdown.Item> */}
                                </Dropdown.Menu>
                            </Dropdown>
                        
                        {/* <div>
                            <h5 className="my-0 fs-14" dir="ltr">{(admin == undefined) ? "" : admin.name}</h5>
                        </div> */}

                        <div className="flex-grow-1">
                            {/* <ul className="list-inline text-end mb-0">
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
                            </ul> */}
                        </div>
                    </div>

                    <div>
                        <form className="chat-search">
                            <div className="chat-search-box">
                                <div className="input-group">
                                    <input
                                        type="search"
                                        className="form-control"
                                        dir="rtl"
                                        placeholder="Search..."
                                        id="top-search"
                                        onKeyUp={(e: any) => onSearch(e.target.value)}
                                    />
                                    <button className="btn input-group-text" type="submit">
                                        <i className="uil uil-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div>
                        <Scrollbar style={{ height: '549px', width: '100%' }}>
                            {(user || []).map((user, index) => {
                                // console.log(user);
                                return (
                                    <Link
                                        to="#"
                                        key={index}
                                        className="text-body"
                                        onClick={(e: any) => {
                                            activateUser(user);
                                        }}>
                                        <div className={classNames('d-flex', 'align-items-start', 'p-2')} dir="ltr">
                                            <div className="w-100 overflow-hidden">
                                                <h5 className="mt-0 mb-0 fs-14" dir="rtl">
                                                    <span className="float-start text-muted fs-12" dir="ltr">
                                                        {user.lastMessageOn}
                                                    </span>
                                                    <span dir="ltr">{user.name}</span>
                                                </h5>
                                                <p className="mt-1 mb-0 text-muted fs-14" dir="rtl">
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
                                            <div className="position-relative avatar-area">
                                                <span
                                                    className={classNames('user-status', {
                                                        'bg-success': user.userStatus === 'online',
                                                        'bg-danger': user.userStatus === 'busy',
                                                        'bg-warning': user.userStatus === 'away',
                                                    })}></span>
                                                    {user.avatar ? (
                                                        <img
                                                            src={user.avatar}
                                                            alt=""
                                                            className="avatar-sm rounded-circle"
                                                        />
                                                    ) : (
                                                        <div className="avatar-sm fw-bold d-inline-block">
                                                            <span
                                                                className={`avatar-title rounded-circle bg-soft-success text-sucess`}>
                                                                {/* {user.name} */}
                                                            </span>
                                                        </div>
                                                    )}
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
