import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import StatisticsChartWidget from '../../../components/StatisticsChartWidget';

const Statistics = () => {
    return (
        <div>
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
        </div>
    );
};

export default Statistics;
