import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const SalesChart = () => {
    const apexBarChartOpts: ApexOptions = {
        plotOptions: {
            pie: {
                donut: {
                    size: '70%',
                    labels: {
                        show: false,
                        name: {
                            show: true,
                            fontSize: '22px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 600,
                            color: undefined,
                            offsetY: -10,
                            formatter: function (val) {
                                return val;
                            },
                        },
                    },
                },
                expandOnClick: false,
            },
        },
        chart: {
            height: 291,
            type: 'donut',
        },
        legend: {
            show: true,
            position: 'right',
            horizontalAlign: 'left',
            itemMargin: {
                horizontal: 6,
                vertical: 3,
            },
        },
        labels: ['Clothes 44k', 'Smartphons 55k', 'Electronics 41k', 'Other 17k'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
        tooltip: {
            y: {
                formatter: (value: number) => {
                    return value + 'k';
                },
            },
        },
    };

    const apexBarChartData = [44, 55, 41, 17];

    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle as="a" className="arrow-none text-muted cursor-pointer">
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

                <h5 className="card-title mt-0 mb-0 header-title">Sales By Category</h5>

                <Chart
                    options={apexBarChartOpts}
                    series={apexBarChartData}
                    type="donut"
                    className="apex-charts mb-0 mt-4"
                    height={291}
                    dir="ltr"
                />
            </Card.Body>
        </Card>
    );
};

export default SalesChart;
