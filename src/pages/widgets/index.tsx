import React from 'react';
import { Col, Row } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';
import StatisticsChartWidget from '../../components/StatisticsChartWidget';
import MembersList from '../../components/MembersList';
import ChatList from '../../components/ChatList';
import Tasks from '../../components/Tasks';

import StatisticsWidget from './StatisticsWidget';
import StatisticsWidget2 from './StatisticsWidget2';
import StatisticsChartWidget2 from './StatisticsChartWidget2';
import ProfileCard1 from './UserProfile/ProfileCard1';
import ProfileCard2 from './UserProfile/ProfileCard2';
import ProfileCard3 from './UserProfile/ProfileCard3';
import ProfileCard4 from './UserProfile/ProfileCard4';
import OverView from './OverView';
import Activities from './Activities';
import Events from './Events';

// dummy data
import { topPerformers, chatMessages, tasks } from '../dashboard/Ecommerce/data';

import { calendarEvents, activities } from './data';

const Widgets = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Components', path: '/apps/widgets' },
                    { label: 'Widgets', path: '/apps/widgets', active: true },
                ]}
                title={'Widgets'}
            />

            <Row>
                <Col sm={6} xl={3}>
                    <StatisticsWidget variant="primary" title="Today Revenue" stats="$851" icon="shopping-bag" />
                </Col>
                <Col sm={6} xl={3}>
                    <StatisticsWidget variant="warning" title="Product Sold" stats="2541" icon="briefcase" />
                </Col>
                <Col sm={6} xl={3}>
                    <StatisticsWidget variant="success" title="New Customers" stats="654" icon="users" />
                </Col>
                <Col sm={6} xl={3}>
                    <StatisticsWidget variant="info" title="New Visitors" stats="854" icon="file-text" />
                </Col>
            </Row>

            <Row>
                <Col sm={6} xl={3}>
                    <StatisticsWidget2
                        variant="primary"
                        title="Today Revenue"
                        stats="$6512"
                        progress={32}
                        description="36% Avg"
                    />
                </Col>
                <Col sm={6} xl={3}>
                    <StatisticsWidget2
                        variant="warning"
                        title="Product Sold"
                        stats="352"
                        progress={60}
                        description="36 Daily Avg"
                    />
                </Col>
                <Col sm={6} xl={3}>
                    <StatisticsWidget2
                        variant="success"
                        title="New Customers"
                        stats="7580"
                        progress={60}
                        description="3 Daily Avg"
                    />
                </Col>
                <Col sm={6} xl={3}>
                    <StatisticsWidget2
                        variant="info"
                        title="New Visitors"
                        stats="6985"
                        progress={45}
                        description="300 Daily Avg"
                    />
                </Col>
            </Row>

            <Row>
                <Col sm={6} xl={3}>
                    <StatisticsChartWidget
                        title="Today Revenue"
                        stats="$2100"
                        trend={{
                            textClass: 'text-success',
                            icon: 'uil uil-arrow-up',
                            value: '10.21%',
                        }}
                        colors={['#727cf5']}
                    />
                </Col>

                <Col sm={6} xl={3}>
                    <StatisticsChartWidget
                        title="Product Sold"
                        stats="558"
                        trend={{
                            textClass: 'text-danger',
                            icon: 'uil uil-arrow-down',
                            value: '5.05%',
                        }}
                        colors={['#f77e53']}
                    />
                </Col>
                <Col sm={6} xl={3}>
                    <StatisticsChartWidget
                        title="New Customers"
                        stats="65"
                        trend={{
                            textClass: 'text-success',
                            icon: 'uil uil-arrow-up',
                            value: '21.16%',
                        }}
                        colors={['#43d39e']}
                    />
                </Col>

                <Col sm={6} xl={3}>
                    <StatisticsChartWidget
                        title="New Visitors"
                        stats="958"
                        trend={{
                            textClass: 'text-danger',
                            icon: 'uil uil-arrow-down',
                            value: '5.05%',
                        }}
                        colors={['#ffbe0b']}
                    />
                </Col>
            </Row>

            <Row>
                <Col md={6} xl={4}>
                    <StatisticsChartWidget2 title="21,000" subtitle="Visits" colors={['#5369f8']} />
                </Col>
                <Col md={6} xl={4}>
                    <StatisticsChartWidget2 title="1100" subtitle="Customers" colors={['#43d39e']} />
                </Col>
                <Col md={6} xl={4}>
                    <StatisticsChartWidget2 title="$201,200" subtitle="Revenue" colors={['#f77e53']} />
                </Col>
            </Row>

            <h4 className="mb-3 pb-1">Profile/User</h4>

            <Row>
                <Col md={6} xxl={3}>
                    <ProfileCard1 />
                </Col>
                <Col md={6} xxl={3}>
                    <ProfileCard2 />
                </Col>
                <Col md={6} xxl={3}>
                    <ProfileCard3 />
                </Col>
                <Col md={6} xxl={3}>
                    <ProfileCard4 />
                </Col>
            </Row>

            <h4 className="mb-3 pb-1">Team</h4>

            <Row>
                <Col xxl={3} md={5}>
                    <MembersList title={'Team Members'} members={topPerformers} />
                </Col>
                <Col xxl={4} md={7}>
                    <ChatList title="Team Chat" messages={chatMessages} />
                </Col>
                <Col xxl={5} md={8}>
                    <Events calendarEvents={calendarEvents} />
                </Col>

                <Col xxl={4} md={4}>
                    <OverView />
                </Col>
                <Col xxl={4} md={6}>
                    <Tasks tasks={tasks} />
                </Col>
                <Col xxl={4} md={6}>
                    <Activities activities={activities} />
                </Col>
            </Row>
        </>
    );
};

export default Widgets;
