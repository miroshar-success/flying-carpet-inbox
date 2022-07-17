import React from 'react';
import {useSelector} from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';

import { Collapse } from 'react-bootstrap';
import classNames from 'classnames';

// helpers
import { getHorizontalMenuItems } from '../../helpers/menu';

// components
import AppMenu from './Menu';

interface NavbarProps {
    isMenuOpened?: boolean;
}

const Navbar = ({ isMenuOpened }: NavbarProps) => {

    const { user} = useSelector((state: RootState) => ({
        user: state.Auth.user,
    }));
    // change the inputTheme value to light for creative theme
    const inputTheme = 'light';
    let menus = getHorizontalMenuItems();
    if (user.role == "User") {
        menus = menus.filter(menu => menu.level == 2); 
    }
    return (
        <div className="topnav">
            <div className="container-fluid">
                <nav className={classNames('navbar', 'navbar-expand-lg', 'topnav-menu', 'navbar-' + inputTheme)}>
                    <Collapse in={isMenuOpened} className="navbar-collapse">
                        <div id="topnav-menu-content">
                            <AppMenu menuItems={menus} />
                        </div>
                    </Collapse>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
