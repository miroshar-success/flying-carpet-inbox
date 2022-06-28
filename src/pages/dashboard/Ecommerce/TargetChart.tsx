import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const TargetChart = () => {
    const apexBarChartOpts: ApexOptions = {
        chart: {
            height: 349,
            type: 'bar',
            stacked: true,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '45%',
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            axisBorder: {
                show: false,
            },
        },
        legend: {
            show: false,
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2,
            },
            borderColor: '#f3f4f7',
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: false,
            },
            y: {
                formatter: function (val) {
                    return '$ ' + val + ' thousands';
                },
            },
        },
    };

    const apexBarChartData = [
        {
            name: 'Net Profit',
            data: [35, 44, 55, 57, 56, 61],
        },
        {
            name: 'Revenue',
            data: [52, 76, 85, 101, 98, 87],
        },
    ];

    return (
        <Card>
            <Card.Body className="pb-0">
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

                <h5 className="card-title header-title">Targets</h5>

                <Chart
                    options={apexBarChartOpts}
                    series={apexBarChartData}
                    type="bar"
                    className="apex-charts mt-3"
                    height={349}
                    dir="ltr"
                />
            </Card.Body>
        </Card>
    );
};

export default TargetChart;
