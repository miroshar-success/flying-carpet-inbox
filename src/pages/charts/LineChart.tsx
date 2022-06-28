import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../components/Loader';

// types
import { ApexLinearChartData } from './data';

interface LineChartProps {
    lineChartWithData: ApexLinearChartData;
    showLoader?: boolean;
}

// simple line chart
const LineChart = ({ lineChartWithData, showLoader }: LineChartProps) => {
    // default options
    const apexLineChartWithLables: ApexOptions = {
        chart: {
            height: 380,
            type: 'line',
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: true,
        },
        stroke: {
            width: [3, 3],
            curve: 'smooth',
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2,
            },
            borderColor: '#e9ecef',
        },
        markers: {
            size: 6,
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            title: {
                text: 'Month',
            },
        },
        yaxis: {
            title: {
                text: 'Temperature',
            },
            min: 5,
            max: 40,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5,
        },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    chart: {
                        toolbar: {
                            show: false,
                        },
                    },
                    legend: {
                        show: false,
                    },
                },
            },
        ],
    };

    // chart data
    const apexLineChartWithLablesData = [
        {
            name: 'High - 2018',
            data: lineChartWithData.data1 || [],
        },
        {
            name: 'Low - 2018',
            data: lineChartWithData.data2 || [],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-3">Line with Data Labels</h4>
                {showLoader ? (
                    <div style={{ height: 380, position: 'relative' }}>
                        <Loader />
                    </div>
                ) : (
                    <Chart
                        options={apexLineChartWithLables}
                        series={apexLineChartWithLablesData}
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

export default LineChart;
