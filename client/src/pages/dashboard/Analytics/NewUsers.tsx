import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';

// components
import StatisticsChartWidget2 from '../../../components/StatisticsChartWidget2';

const NewUsers = () => {
    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle as="a" className="cursor-pointer arrow-none p-0 text-dark">
                        <i className="uil uil-ellipsis-v fs-13"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <i className="uil uil-refresh me-2"></i>Refresh Report
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <i className="uil uil-export me-2"></i>Export Report
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h4 className="card-title header-title">New Users</h4>

                <StatisticsChartWidget2
                    title="New users this week"
                    stats="18 324"
                    containerClass="border-bottom justify-content-between align-items-end pt-2 pb-3"
                    trend={{
                        textClass: 'text-success',
                        value: '+17.98%',
                    }}
                    colors={['#43d39e']}
                    data={[25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]}
                />

                <StatisticsChartWidget2
                    title="New users this month"
                    stats="182 578"
                    containerClass="border-bottom justify-content-between align-items-end py-3"
                    trend={{
                        textClass: 'text-success',
                        value: '+24.98%',
                    }}
                    type="line"
                    colors={['#ff5c75']}
                    data={[25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]}
                />

                <StatisticsChartWidget2
                    title="New users this year"
                    stats="24 182 579"
                    containerClass="border-bottom justify-content-between align-items-end py-3"
                    trend={{
                        textClass: 'text-success',
                        value: '+39.52%',
                    }}
                    colors={['#43d39e']}
                    data={[25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]}
                />

                <StatisticsChartWidget2
                    title="Returning users"
                    stats="82 578"
                    containerClass="justify-content-between align-items-end  pb-1 pt-3"
                    trend={{
                        textClass: 'text-danger',
                        value: '-26.47%',
                    }}
                    type="line"
                    colors={['#ff5c75']}
                    data={[25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]}
                />
            </Card.Body>
        </Card>
    );
};

export default NewUsers;
