import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../components/Loader';

// types
import { ApexLinearChartData } from './data';

interface ScatterDateTimeChartProps {
    scatterDateTimeChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const ScatterDateTimeChart = ({ scatterDateTimeChartData, showLoader }: ScatterDateTimeChartProps) => {
    const options: ApexOptions = {
        chart: {
            zoom: {
                type: 'xy',
            },
        },
        grid: {
            borderColor: '#f1f3fa',
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        legend: {
            offsetY: 7,
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            max: 70,
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: false,
            },
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

    const series = [
        {
            name: 'Team 1',
            data: scatterDateTimeChartData.data1 || [],
        },
        {
            name: 'Team 2',
            data: scatterDateTimeChartData.data2 || [],
        },
        {
            name: 'Team 3',
            data: scatterDateTimeChartData.data3 || [],
        },
        {
            name: 'Team 4',
            data: scatterDateTimeChartData.data4 || [],
        },
        {
            name: 'Team 5',
            data: scatterDateTimeChartData.data5 || [],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-3">Scatter Chart - Datetime</h4>
                {showLoader ? (
                    <div style={{ height: 380, position: 'relative' }}>
                        <Loader />
                    </div>
                ) : (
                    <Chart
                        options={options}
                        series={series}
                        type="scatter"
                        height={380}
                        className="apex-charts"
                        dir="ltr"
                    />
                )}
            </Card.Body>
        </Card>
    );
};

export default ScatterDateTimeChart;
