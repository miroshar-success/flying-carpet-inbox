import React from 'react';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const SocialMediaChart = () => {
    const apexBarChartOpts: ApexOptions = {
        chart: {
            height: 410,
            type: 'bar',
            stacked: true,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%',
            },
        },
        tooltip: {
            enabled: true,
            shared: true,
            intersect: false,
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        },
        colors: ['#5369f8', '#43d39e', '#f3f4f7'],
        fill: {
            opacity: 1,
        },
        legend: {
            position: 'bottom',
            offsetX: 0,
            offsetY: 0,
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2,
            },
            borderColor: '#f1f3fa',
            padding: {
                bottom: 5,
            },
        },
    };

    const apexBarChartData = [
        {
            name: 'Facebook',
            data: [40, 80, 20, 50, 40, 20, 20, 60, 10, 40],
        },
        {
            name: 'Instagram',
            data: [0, 0, 0, 15, 0, 0, 5, 10, 0, 0],
        },
        {
            name: 'Twitter',
            data: [10, 10, 5, 60, 50, 100, 80, 70, 20, 110],
        },
    ];

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
                <h4 className="card-title header-title">Social Media Traffic</h4>

                <Row>
                    <Col md={8}>
                        <div dir="ltr">
                            <Chart
                                options={apexBarChartOpts}
                                series={apexBarChartData}
                                type="bar"
                                className="apex-charts"
                                height={410}
                            />
                        </div>
                    </Col>
                    <Col md={3} xs={{ offset: 1 }} className="my-3">
                        <div className="border-bottom">
                            <div className="my-2 py-2">
                                <h6 className="fs-14 text-muted">Twitter</h6>
                                <h3>2250k</h3>
                            </div>
                        </div>
                        <div className="border-bottom">
                            <div className="my-2 py-2">
                                <h6 className="fs-14 text-muted">Instagram</h6>
                                <h3>1501k</h3>
                            </div>
                        </div>
                        <div className="">
                            <div className="my-2 py-2">
                                <h6 className="fs-14 text-muted">Facebook</h6>
                                <h3>750k</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default SocialMediaChart;
