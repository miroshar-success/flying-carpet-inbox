import React, { Suspense, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

// store
import { RootState, AppDispatch } from '../../redux/store';

// constants
import { LayoutTypes, SideBarTheme } from '../../constants/layout';

// utils
import { changeBodyAttribute } from '../../utils';

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import('../Topbar'));
const Navbar = React.lazy(() => import('./Navbar'));
const Footer = React.lazy(() => import('../Footer'));
const RightSidebar = React.lazy(() => import('../RightSidebar'));

const loading = () => <div className="text-center"></div>;

interface HorizontalLayoutProps {
    children?: any;
}

const HorizontalLayout = ({ children }: HorizontalLayoutProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

    const { layoutWidth, menuPosition, topbarTheme, isOpenRightSideBar } = useSelector((state: RootState) => ({
        layoutWidth: state.Layout.layoutWidth,
        menuPosition: state.Layout.menuPosition,
        topbarTheme: state.Layout.topbarTheme,
        isOpenRightSideBar: state.Layout.isOpenRightSideBar,
    }));

    /*
    layout defaults
    */
    useEffect(() => {
        changeBodyAttribute('data-layout-mode', LayoutTypes.LAYOUT_HORIZONTAL);
    }, [dispatch]);

    useEffect(() => {
        changeBodyAttribute('data-layout-width', layoutWidth);
    }, [layoutWidth]);

    useEffect(() => {
        changeBodyAttribute('data-layout-menu-position', menuPosition);
    }, [menuPosition]);

    useEffect(() => {
        changeBodyAttribute('data-sidebar-color', SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT);
    }, []);

    useEffect(() => {
        changeBodyAttribute('data-topbar-color', topbarTheme);
    }, [topbarTheme]);

    /**
     * Open the menu when having mobile screen
     */
    const openMenu = () => {
        setIsMenuOpened(!isMenuOpened);
        if (document.body) {
            if (isMenuOpened) {
                document.body.classList.remove('sidebar-enable');
            } else {
                document.body.classList.add('sidebar-enable');
            }
        }
    };

    return (
        <>
            <div id="wrapper">
                <Suspense fallback={loading()}>
                    <Topbar openLeftMenuCallBack={openMenu} topbarDark={false} />
                </Suspense>

                <Suspense fallback={loading()}>
                    <Navbar isMenuOpened={isMenuOpened} />
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

                    {isOpenRightSideBar && (
                        <Suspense fallback={loading()}>
                            <RightSidebar />
                        </Suspense>
                    )}
                </div>
            </div>
        </>
    );
};

export default HorizontalLayout;
