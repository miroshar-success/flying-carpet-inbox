import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';

// helpers
import { findAllParent, findMenuItem } from '../../helpers/menu';

// constants
import { MenuItemTypes } from '../../constants/menu';

// custom hook
import { useViewport } from '../../hooks/useViewPort';

interface MenuItems {
    item: MenuItemTypes;
    tag?: string;
    linkClassName?: string;
    className?: string;
    subMenuClassNames?: string;
    activeMenuItems?: string[];
    toggleMenu?: (item: any, status: boolean) => void;
}

const MenuItemWithChildren = ({
    item,
    tag,
    linkClassName,
    className,
    subMenuClassNames,
    activeMenuItems,
    toggleMenu,
}: MenuItems) => {
    const Tag: any = tag;
    const { width } = useViewport();

    const [open, setOpen] = useState<boolean>(activeMenuItems!.includes(item.key));

    const showMenu = width <= 768 && open;

    useEffect(() => {
        setOpen(activeMenuItems!.includes(item.key));
    }, [activeMenuItems, item]);

    /**
     * toggles the menu
     */
    const toggleMenuItem = (e: any) => {
        e.preventDefault();
        const status = !open;
        setOpen(status);
        if (toggleMenu) toggleMenu(item, status);
        return false;
    };

    return (
        <Tag className={classNames('dropdown', className, activeMenuItems!.includes(item.key) ? 'active' : '')}>
            <Link
                to="/#"
                onClick={toggleMenuItem}
                data-menu-key={item.key}
                className={classNames('dropdown-toggle', 'arrow-none', linkClassName, {
                    active: activeMenuItems!.includes(item.key),
                })}
                id={item.key}
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={open}>
                {item.icon && <FeatherIcon icon={item.icon} className="hori-icon me-1" />}
                <span> {item.label} </span>
                <div className="arrow-down"></div>
            </Link>

            {item.children && (
                <div className={classNames(subMenuClassNames, { show: showMenu })} aria-labelledby={item.key}>
                    {(item.children || []).map((child, i) => {
                        return (
                            <React.Fragment key={i}>
                                {child.children ? (
                                    <>
                                        {/* parent */}
                                        <MenuItemWithChildren
                                            item={child}
                                            tag="div"
                                            linkClassName={classNames(
                                                'dropdown-item',
                                                activeMenuItems!.includes(child.key) ? 'active' : ''
                                            )}
                                            activeMenuItems={activeMenuItems}
                                            className=""
                                            subMenuClassNames="dropdown-menu"
                                            toggleMenu={toggleMenu}
                                        />
                                    </>
                                ) : (
                                    <>
                                        {/* child */}
                                        <MenuItemLink
                                            item={child}
                                            className={classNames('dropdown-item', {
                                                active: activeMenuItems!.includes(child.key),
                                            })}
                                        />
                                    </>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            )}
        </Tag>
    );
};

const MenuItem = ({ item, className, linkClassName }: MenuItems) => {
    return (
        <li className={classNames('nav-item', className)}>
            <MenuItemLink item={item} className={linkClassName} />
        </li>
    );
};

const MenuItemLink = ({ item, className }: MenuItems) => {
    return (
        <Link to={item.url!} target={item.target} className={classNames(className)} data-menu-key={item.key}>
            <span> {item.label} </span>
        </Link>
    );
};

/**
 * Renders the application menu
 */

interface AppMenuProps {
    menuItems: MenuItemTypes[];
}

const AppMenu = ({ menuItems }: AppMenuProps) => {
    let location = useLocation();
    const menuRef = useRef(null);

    const [topnavMenuItems] = useState<MenuItemTypes[]>(menuItems);
    const [activeMenuItems, setActiveMenuItems] = useState<string[]>([]);

    /*
     * toggle the menus
     */
    const toggleMenu = (menuItem: MenuItemTypes, show: boolean) => {
        if (show) setActiveMenuItems([menuItem['key'], ...findAllParent(topnavMenuItems, menuItem)]);
    };

    /**
     * activate the menuitems
     */
    const activeMenu = useCallback(() => {
        const div = document.getElementById('main-side-menu');
        let matchingMenuItem = null;

        if (div) {
            let items: any = div.getElementsByTagName('a');
            for (let i: number = 0; i < items.length; ++i) {
                if (location.pathname === items[i].pathname) {
                    matchingMenuItem = items[i];
                    break;
                }
            }

            if (matchingMenuItem) {
                const mid = matchingMenuItem.getAttribute('data-menu-key');
                const activeMt = findMenuItem(topnavMenuItems, mid);
                if (activeMt) {
                    setActiveMenuItems([activeMt['key'], ...findAllParent(topnavMenuItems, activeMt)]);
                }
            }
        }
    }, [location.pathname, topnavMenuItems]);

    useEffect(() => {
        if (topnavMenuItems && topnavMenuItems.length > 0) activeMenu();
    }, [activeMenu, topnavMenuItems]);

    return (
        <>
            <ul className="navbar-nav" ref={menuRef} id="main-side-menu">
                {(topnavMenuItems || []).map((item, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            {item.children ? (
                                <MenuItemWithChildren
                                    item={item}
                                    tag="li"
                                    className="nav-item"
                                    subMenuClassNames="dropdown-menu"
                                    activeMenuItems={activeMenuItems}
                                    linkClassName="nav-link"
                                    toggleMenu={toggleMenu}
                                />
                            ) : (
                                <MenuItem
                                    item={item}
                                    linkClassName={classNames('nav-link', 'dropdown-toggle', {
                                        active: activeMenuItems.includes(item.key),
                                    })}
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </ul>
        </>
    );
};

export default AppMenu;
