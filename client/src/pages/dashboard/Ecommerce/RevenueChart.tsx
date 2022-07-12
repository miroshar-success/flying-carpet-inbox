import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const RevenueChart = () => {
    function getDaysInMonth(month: any, year: any) {
        var date = new Date(year, month, 1);
        var days = [];
        var idx = 0;
        while (date.getMonth() === month && idx < 15) {
            var d = new Date(date);
            days.push(d.getDate() + ' ' + d.toLocaleString('en-us', { month: 'short' }));
            date.setDate(date.getDate() + 1);
            idx += 1;
        }
        return days;
    }

    const now = new Date();
    const labels = getDaysInMonth(now.getMonth(), now.getFullYear());

    const apexBarChartOpts: ApexOptions = {
        chart: {
            height: 329,
            type: 'area',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: false,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 4,
        },
        series: [
            {
                name: 'Revenue',
                data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35],
            },
        ],
        legend: {
            show: false,
        },
        colors: ['#43d39e'],
        xaxis: {
            type: 'category',
            categories: labels,
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {},
        },
        yaxis: {
            labels: {
                formatter: (val: number) => {
                    return val + 'k';
                },
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: 'vertical',
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [45, 100],
            },
        },
    };

    const apexBarChartData = [
        {
            name: 'Revenue',
            data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle as="a" className="arrow-none text-muted cursor-pointer">
                        <i className="uil uil-ellipsis-v"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Today</Dropdown.Item>
                        <Dropdown.Item>7 Days</Dropdown.Item>
                        <Dropdown.Item>15 Days</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>1 Months</Dropdown.Item>
                        <Dropdown.Item>6 Months</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>1 Year</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h5 className="card-title mb-0 header-title">Revenue</h5>

                <Chart
                    options={apexBarChartOpts}
                    series={apexBarChartData}
                    type="area"
                    className="apex-charts mt-3"
                    height={329}
                    dir="ltr"
                />
            </Card.Body>
        </Card>
    );
};

export default RevenueChart;
