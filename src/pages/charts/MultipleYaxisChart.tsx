import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../components/Loader';

// types
import { ApexLinearChartData } from './data';

interface MultipleYaxisChartProps {
    multiYaxisChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const MultipleYaxisChart = ({ multiYaxisChartData, showLoader }: MultipleYaxisChartProps) => {
    const options: ApexOptions = {
        chart: {
            stacked: false,
        },
        stroke: {
            width: [0, 0, 3],
        },
        xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        },
        yaxis: [
            {
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#675db7',
                },
                labels: {
                    style: {
                        colors: ['#675db7'],
                    },
                },
                title: {
                    text: 'Income (thousand crores)',
                },
            },

            {
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#23b397',
                },
                labels: {
                    style: {
                        colors: ['#23b397'],
                    },
                    offsetX: 10,
                },
                title: {
                    text: 'Operating Cashflow (thousand crores)',
                },
            },
            {
                opposite: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#e36498',
                },
                labels: {
                    style: {
                        colors: ['#e36498'],
                    },
                },
                title: {
                    text: 'Revenue (thousand crores)',
                },
            },
        ],
        tooltip: {
            followCursor: true,
            y: {
                formatter: function (y) {
                    if (typeof y !== 'undefined') {
                        return y + ' thousand crores';
                    }
                    return y;
                },
            },
        },
        grid: {
            borderColor: '#f1f3fa',
        },
        legend: {
            offsetY: 7,
        },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    yaxis: {
                        show: false,
                    },
                    legend: {
                        show: false,
                    },
                },
            },
        ],
    };

    const series = [
        {
            name: 'Income',
            type: 'column',
            data: multiYaxisChartData.data1 || [],
        },
        {
            name: 'Cashflow',
            type: 'column',
            data: multiYaxisChartData.data2 || [],
        },
        {
            name: 'Revenue',
            type: 'line',
            data: multiYaxisChartData.data3 || [],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-3">Multiple Y-Axis Chart</h4>
                {showLoader ? (
                    <div style={{ height: 380, position: 'relative' }}>
                        <Loader />
                    </div>
                ) : (
                    <Chart
                        options={options}
                        series={series}
                        type="line"
                        height={380}
                        className="apex-charts"
                        dir="ltr"
                    />
                )}
            </Card.Body>
        </Card>
    );
};

export default MultipleYaxisChart;
