import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';

// types
import { NotificationItem } from '../layouts/Topbar';

// components
import Scrollbar from './Scrollbar';

// notifiaction continer styles
const notificationContainerStyle = {
    maxHeight: '230px',
    display: 'none',
};

const notificationShowContainerStyle = {
    maxHeight: '230px',
};

interface NotificationDropdownProps {
    notifications: Array<NotificationItem>;
}

interface NotificationContainerStyle {
    maxHeight?: string;
    display?: string;
}

const NotificationDropdown = (props: NotificationDropdownProps) => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [notificationContentStyle, setNotificationContentStyles] =
        useState<NotificationContainerStyle>(notificationContainerStyle);

    /*
     * toggle notification-dropdown
     */
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        setNotificationContentStyles(
            notificationContentStyle === notificationContainerStyle
                ? notificationShowContainerStyle
                : notificationContainerStyle
        );
    };

    /*
     * get redirect url for notification items
     */
    const getRedirectUrl = (item: NotificationItem) => {
        return `/notification/${item.id}`;
    };

    return (
        <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
            <Dropdown.Toggle
                id="dropdown-notification"
                as="a"
                onClick={toggleDropdown}
                className={classNames('nav-link', 'position-relative', 'cursor-pointer', {
                    show: dropdownOpen,
                })}>
                <FeatherIcon icon="bell" />
                <span className="badge bg-danger rounded-circle noti-icon-badge">6</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end dropdown-lg">
                <div onClick={toggleDropdown}>
                    <div className="dropdown-item noti-title">
                        <h5 className="m-0">
                            <span className="float-end">
                                <Link to="#" className="text-dark">
                                    <small>Clear All</small>
                                </Link>
                            </span>
                            Notification
                        </h5>
                    </div>
                    <Scrollbar className="noti-scroll" style={notificationContentStyle}>
                        {(props.notifications || []).map((item, i) => {
                            return (
                                <Link
                                    to={getRedirectUrl(item)}
                                    className="dropdown-item notify-item border-bottom"
                                    key={i + '-noti'}>
                                    {item.avatar ? (
                                        <>
                                            <div className="notify-icon">
                                                <img src={item.avatar} alt="" className="img-fluid rounded-circle" />
                                            </div>
                                            <p className="notify-details">{item.text}</p>
                                            <p className="text-muted mb-0 user-msg">
                                                <small>{item.subText}</small>
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <div className={`notify-icon bg-${item.bgColor}`}>
                                                <i className={item.icon}></i>
                                            </div>
                                            <p className="notify-details">
                                                {item.text} <small className="text-muted">{item.subText}</small>
                                            </p>
                                        </>
                                    )}
                                </Link>
                            );
                        })}
                    </Scrollbar>

                    <Link to="/" className="dropdown-item text-center text-primary notify-item notify-all">
                        View All <i className="fe-arrow-right"></i>
                    </Link>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default NotificationDropdown;
