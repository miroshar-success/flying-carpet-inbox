import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import classNames from 'classnames';
import FeatherIcons from 'feather-icons-react';

const SearchDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    /*
     * toggle search-dropdown
     */
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
            <Dropdown.Toggle
                id="dropdown-apps"
                as="a"
                onClick={toggleDropdown}
                className={classNames('nav-link', 'cursor-pointer', {
                    show: dropdownOpen,
                })}>
                <FeatherIcons icon={'search'} />
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-animated dropdown-lg p-0">
                <form className="p-3">
                    <input type="text" className="form-control" placeholder="Search ..." />
                </form>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default SearchDropdown;
