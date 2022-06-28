import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';

// components
import OverViewItem from '../../components/OverViewItem';

const OverView = () => {
    return (
        <Card>
            <Card.Body className="p-0">
                <div className="p-3">
                    <Dropdown className="float-end" align="end">
                        <Dropdown.Toggle as="a" className="cursor-pointer arrow-none text-muted">
                            <i className="uil uil-ellipsis-v"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <i className="uil uil-refresh me-2"></i>Refresh
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <i className="uil uil-user-plus me-2"></i>Add New
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="text-danger">
                                <i className="uil uil-exit me-2"></i>Exit
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <h5 className="card-title header-title mb-0">Overview</h5>
                </div>

                <OverViewItem stats={'121,000'} title={'Total Visitors'} icon={'users'} iconClass={'icon-lg'} />
                <OverViewItem stats={'21,000'} title={'Total Product Views'} icon={'image'} iconClass={'icon-lg'} />
                <OverViewItem
                    stats={'$21.5'}
                    title={'Revenue Per Visitor'}
                    icon={'shopping-bag'}
                    iconClass={'icon-lg'}
                />
                <OverViewItem stats={'8,547'} title={'Revenue Per Visitor'} icon={'aperture'} iconClass={'icon-lg'} />
            </Card.Body>
        </Card>
    );
};

export default OverView;
