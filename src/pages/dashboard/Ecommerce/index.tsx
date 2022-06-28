import React, { useState } from 'react';
import { Row, Col, Dropdown, ButtonGroup } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// components
import ShreyuDatepicker from '../../../components/Datepicker';
import MembersList from '../../../components/MembersList';
import Tasks from '../../../components/Tasks';
import ChatList from '../../../components/ChatList';

import Statistics from './Statistics';
import OverView from './OverView';
import RevenueChart from './RevenueChart';
import TargetChart from './TargetChart';
import SalesChart from './SalesChart';
import Orders from './Orders';

// dummy data
import { orderDetails, topPerformers, tasks, chatMessages } from './data';

const EcommerceDashboard = () => {
    const [dateRange, setDateRange] = useState<any>([new Date(), new Date().setDate(new Date().getDate() + 7)]);
    const [startDate, endDate] = dateRange;

    /*
     * handle date change
     */
    const onDateChange = (date: Date) => {
        if (date) {
            setDateRange(date);
        }
    };

    return (
        <>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <h4 className="page-title">Dashboard</h4>
                        <div className="page-title-right">
                            <form className="float-md-end mt-3 mt-md-0">
                                <Row className="g-2">
                                    <Col md={'auto'}>
                                        <div className="mb-1 mb-sm-0">
                                            <ShreyuDatepicker
                                                selectsRange
                                                startDate={startDate}
                                                endDate={endDate}
                                                hideAddon={true}
                                                dateFormat={'yyyy/MM/dd'}
                                                onChange={(date) => {
                                                    onDateChange(date);
                                                }}
                                            />
                                        </div>
                                    </Col>
                                    <Col md={'auto'}>
                                        <Dropdown as={ButtonGroup} align="end">
                                            <Dropdown.Toggle
                                                variant="primary"
                                                id="dropdown-basic"
                                                className="cursor-pointer">
                                                <i className="uil uil-file-alt me-1"></i>Download
                                                <i className="icon">
                                                    <FeatherIcon icon="chevron-down" />
                                                </i>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item className="notify-item" href="#/">
                                                    <FeatherIcon icon="mail" className="icon-dual icon-xs me-2" />
                                                    <span>Email</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item className="notify-item" href="#/">
                                                    <FeatherIcon icon="printer" className="icon-dual icon-xs me-2" />
                                                    <span>Print</span>
                                                </Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item className="notify-item" href="#/">
                                                    <FeatherIcon icon="file" className="icon-dual icon-xs me-2" />
                                                    <span>Re-Generate</span>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>

            <Statistics />

            <Row>
                <Col xl={3}>
                    <OverView />
                </Col>
                <Col xl={6}>
                    <RevenueChart />
                </Col>
                <Col xl={3}>
                    <TargetChart />
                </Col>
            </Row>

            <Row>
                <Col xl={5}>
                    <SalesChart />
                </Col>
                <Col xl={7}>
                    <Orders orderDetails={orderDetails} />
                </Col>
            </Row>

            <Row>
                <Col xl={4}>
                    <MembersList title={'Top Performers'} members={topPerformers} />
                </Col>
                <Col xl={4}>
                    <Tasks tasks={tasks} />
                </Col>
                <Col xl={4}>
                    <ChatList title="Recent Conversation" messages={chatMessages} />
                </Col>
            </Row>
        </>
    );
};

export default EcommerceDashboard;
