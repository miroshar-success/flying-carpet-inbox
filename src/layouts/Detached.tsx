import React, { Suspense, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

// actions
import { toggleSidebarUserInfo } from '../redux/actions';

// store
import { RootState, AppDispatch } from '../redux/store';

// constants
import { LayoutTypes, SideBarTypes } from '../constants';

// utils
import { changeBodyAttribute } from '../utils';

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import('./Topbar'));
const LeftSidebar = React.lazy(() => import('./LeftSidebar'));
const Footer = React.lazy(() => import('./Footer'));
const RightSidebar = React.lazy(() => import('./RightSidebar'));

const loading = () => <div className="text-center"></div>;

interface VerticalLayoutProps {
    children?: any;
}

const DetachedLayout = ({ children }: VerticalLayoutProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

    const {
        layoutWidth,
        menuPosition,
        leftSideBarTheme,
        leftSideBarType,
        topbarTheme,
        showSidebarUserInfo,
        isOpenRightSideBar,
    } = useSelector((state: RootState) => ({
        layoutWidth: state.Layout.layoutWidth,
        menuPosition: state.Layout.menuPosition,
        leftSideBarTheme: state.Layout.leftSideBarTheme,
        leftSideBarType: state.Layout.leftSideBarType,
        topbarTheme: state.Layout.topbarTheme,
        showSidebarUserInfo: state.Layout.showSidebarUserInfo,
        isOpenRightSideBar: state.Layout.isOpenRightSideBar,
    }));

    /*
    layout defaults
    */
    useEffect(() => {
        changeBodyAttribute('data-layout-mode', LayoutTypes.LAYOUT_DETACHED);
        dispatch(toggleSidebarUserInfo(true));
    }, [dispatch]);

    useEffect(() => {
        changeBodyAttribute('data-layout-width', layoutWidth);
    }, [dispatch, layoutWidth]);

    useEffect(() => {
        changeBodyAttribute('data-layout-menu-position', menuPosition);
    }, [menuPosition]);

    useEffect(() => {
        changeBodyAttribute('data-sidebar-color', leftSideBarTheme);
    }, [leftSideBarTheme]);

    useEffect(() => {
        changeBodyAttribute('data-sidebar-size', leftSideBarType);
    }, [leftSideBarType]);

    useEffect(() => {
        changeBodyAttribute('data-topbar-color', topbarTheme);
    }, [topbarTheme]);

    useEffect(() => {
        changeBodyAttribute('data-sidebar-showuser', showSidebarUserInfo);
    }, [showSidebarUserInfo]);

    /**
     * Open the menu when having mobile screen
     */
    const openMenu = () => {
        setIsMenuOpened((prevState) => !prevState);
        if (document.body) {
            if (isMenuOpened) {
                document.body.classList.add('sidebar-enable');
            } else {
                document.body.classList.remove('sidebar-enable');
            }
        }
    };

    const isCondensed = leftSideBarType === SideBarTypes.LEFT_SIDEBAR_TYPE_CONDENSED;

    return (
        <>
            <div id="wrapper">
                <Suspense fallback={loading()}>
                    <Topbar
                        openLeftMenuCallBack={openMenu}
                        navCssClasses="topnav-navbar topnav-navbar-dark"
                        topbarDark={true}
                    />
                </Suspense>
                <Suspense fallback={loading()}>
                    <LeftSidebar isCondensed={isCondensed} />
                </Suspense>

                <div className="content-page">
                    <div className="content">
                        <Container fluid>
                            <Suspense fallback={loading()}>{children}</Suspense>
                        </Container>
                    </div>

                    <Suspense fallback={loading()}>
                        <Footer />
                    </Suspense>
                </div>
            </div>
            {isOpenRightSideBar && (
                <Suspense fallback={loading()}>
                    <RightSidebar />
                </Suspense>
            )}
        </>
    );
};

export default DetachedLayout;
