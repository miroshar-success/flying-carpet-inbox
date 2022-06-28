import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';

// actions
import { showRightSidebar, changeSidebarType } from '../redux/actions';

// store
import { RootState, AppDispatch } from '../redux/store';

//constants
import { LayoutTypes, SideBarTypes } from '../constants/layout';

// components
import TopbarSearch from '../components/TopbarSearch';
import MaximizeScreen from '../components/MaximizeScreen';
import AppsDropdown from '../components/AppsDropdown/';
import SearchDropdown from '../components/SearchDropdown';
import LanguageDropdown from '../components/LanguageDropdown';
import NotificationDropdown from '../components/NotificationDropdown';
import ProfileDropdown from '../components/ProfileDropdown';
import CreateNew from '../components/CreateNew';

// images
import profilePic from '../assets/images/users/avatar-1.jpg';
import avatar4 from '../assets/images/users/avatar-4.jpg';
import logoSm from '../assets/images/logo-sm.png';
import logoDark from '../assets/images/logo-dark.png';
import logoLight from '../assets/images/logo-light.png';

export interface NotificationItem {
    id: number;
    text: string;
    subText: string;
    icon?: string;
    avatar?: string;
    bgColor?: string;
}

// get the notifications
const Notifications: NotificationItem[] = [
    {
        id: 1,
        text: 'Cristina Pride',
        subText: 'Hi, How are you? What about our next meeting',
        avatar: profilePic,
    },
    {
        id: 2,
        text: 'Caleb Flakelar commented on Admin',
        subText: '1 min ago',
        icon: 'uil uil-comment-message',
        bgColor: 'primary',
    },
    {
        id: 3,
        text: 'Karen Robinson',
        subText: 'Wow ! this admin looks good and awesome design',
        avatar: avatar4,
    },
    {
        id: 4,
        text: 'New user registered.',
        subText: '5 hours ago',
        icon: 'uil uil-user-plus',
        bgColor: 'warning',
    },
    {
        id: 5,
        text: 'Caleb Flakelar commented on Admin',
        subText: '1 min ago',
        icon: 'uil uil-comment-message',
        bgColor: 'info',
    },
    {
        id: 6,
        text: 'Carlos Crouch liked Admin',
        subText: '13 days ago',
        icon: 'uil uil-heart',
        bgColor: 'secondary',
    },
];

// get the profilemenu
const ProfileMenus = [
    {
        label: 'My Account',
        icon: 'user',
        redirectTo: '/',
    },
    {
        label: 'Lock Screen',
        icon: 'lock',
        redirectTo: '/auth/lock-screen',
    },
    {
        label: 'Logout',
        icon: 'log-out',
        redirectTo: '/auth/logout',
    },
];

// dummy search results
const SearchResults = [
    {
        id: 1,
        title: 'Analytics Report',
        icon: 'uil-notes',
        redirectTo: '/',
    },
    {
        id: 2,
        title: 'How can I help you?',
        icon: 'uil-life-ring',
        redirectTo: '/',
    },
    {
        id: 3,
        icon: 'uil-cog',
        title: 'User profile settings',
        redirectTo: '/',
    },
];

const otherOptions = [
    {
        id: 1,
        label: 'New Projects',
        icon: 'uil uil-bag',
    },
    {
        id: 2,
        label: 'Create Users',
        icon: 'uil uil-user-plus',
    },
    {
        id: 3,
        label: 'Revenue Report',
        icon: 'uil uil-chart-pie',
    },
    {
        id: 4,
        label: 'Settings',
        icon: 'uil uil-cog',
    },
    {
        id: 4,
        label: 'Help & Support',
        icon: 'uil uil-question-circle',
    },
];

interface TopbarProps {
    hideLogo?: boolean;
    navCssClasses?: string;
    openLeftMenuCallBack?: () => void;
    topbarDark?: boolean;
}

const Topbar = ({ hideLogo, navCssClasses, openLeftMenuCallBack, topbarDark }: TopbarProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const [isopen, setIsopen] = useState<boolean>(false);

    const navbarCssClasses: string = navCssClasses || '';
    const containerCssClasses: string = !hideLogo ? 'container-fluid' : '';

    const { layoutType, leftSideBarType } = useSelector((state: RootState) => ({
        layoutType: state.Layout.layoutType,
        leftSideBarType: state.Layout.leftSideBarType,
    }));

    /**
     * Toggle the leftmenu when having mobile screen
     */
    const handleLeftMenuCallBack = () => {
        setIsopen(!isopen);
        if (openLeftMenuCallBack) openLeftMenuCallBack();
    };

    /**
     * Toggles the right sidebar
     */
    const handleRightSideBar = () => {
        dispatch(showRightSidebar());
    };

    /**
     * Toggles the left sidebar width
     */
    const toggleLeftSidebarWidth = () => {
        if (leftSideBarType === 'default' || leftSideBarType === 'compact')
            dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_CONDENSED));
        if (leftSideBarType === 'condensed') dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_DEFAULT));
    };

    return (
        <React.Fragment>
            <div className={`navbar-custom ${navbarCssClasses}`}>
                <div className={containerCssClasses}>
                    {!hideLogo && (
                        <div className="logo-box">
                            <Link to="/" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src={logoSm} alt="" height="24" />
                                </span>
                                <span className="logo-lg">
                                    <img src={logoDark} alt="" height="24" />
                                </span>
                            </Link>
                            <Link to="/" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src={logoSm} alt="" height="24" />
                                </span>
                                <span className="logo-lg">
                                    <img src={logoLight} alt="" height="24" />
                                </span>
                            </Link>
                        </div>
                    )}

                    <ul className="list-unstyled topnav-menu float-end mb-0">
                        <li className="d-none d-lg-block">
                            <TopbarSearch items={SearchResults} />
                        </li>

                        <li className="dropdown d-inline-block d-lg-none">
                            <SearchDropdown />
                        </li>
                        <li className="dropdown d-none d-lg-inline-block">
                            <MaximizeScreen />
                        </li>
                        <li className="dropdown d-none d-lg-inline-block topbar-dropdown">
                            <AppsDropdown />
                        </li>
                        <li className="dropdown d-none d-lg-inline-block topbar-dropdown">
                            <LanguageDropdown />
                        </li>
                        <li className="dropdown notification-list topbar-dropdown">
                            <NotificationDropdown notifications={Notifications} />
                        </li>
                        <li className="dropdown notification-list topbar-dropdown">
                            <ProfileDropdown profilePic={profilePic} menuItems={ProfileMenus} username={'Nik Patel'} />
                        </li>
                        <li className="dropdown notification-list">
                            <button
                                className="nav-link right-bar-toggle arrow-none btn btn-link shadow-none"
                                onClick={handleRightSideBar}>
                                <FeatherIcon icon="settings" />
                            </button>
                        </li>
                    </ul>

                    <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
                        {layoutType !== LayoutTypes.LAYOUT_HORIZONTAL && (
                            <li>
                                <button
                                    className="button-menu-mobile d-none d-lg-block"
                                    onClick={toggleLeftSidebarWidth}>
                                    <FeatherIcon icon="menu" />
                                    <i className="fe-menu"></i>
                                </button>
                            </li>
                        )}

                        <li>
                            <button className="button-menu-mobile d-lg-none d-bolck" onClick={handleLeftMenuCallBack}>
                                <FeatherIcon icon="menu" />
                            </button>
                        </li>

                        {/* Mobile menu toggle (Horizontal Layout) */}
                        <li>
                            <Link
                                to="#"
                                className={classNames('navbar-toggle nav-link', {
                                    open: isopen,
                                })}
                                onClick={handleLeftMenuCallBack}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </li>

                        <li className="dropdown d-none d-xl-block">
                            <CreateNew otherOptions={otherOptions} />
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Topbar;
