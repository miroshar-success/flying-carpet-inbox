import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../components/Loader';

// types
import { ApexLinearChartData } from './data';

interface LineColumnAreaChartProps {
    mixedChart2Data: ApexLinearChartData;
    showLoader?: boolean;
}

const LineColumnAreaChart = ({ mixedChart2Data, showLoader }: LineColumnAreaChartProps) => {
    const options: ApexOptions = {
        chart: {
            stacked: false,
        },
        stroke: {
            width: [0, 2, 4],
            curve: 'smooth',
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
            },
        },
        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: 'vertical',
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100],
            },
        },
        labels: [
            '01/01/2003',
            '02/01/2003',
            '03/01/2003',
            '04/01/2003',
            '05/01/2003',
            '06/01/2003',
            '07/01/2003',
            '08/01/2003',
            '09/01/2003',
            '10/01/2003',
            '11/01/2003',
        ],
        markers: {
            size: 0,
        },
        legend: {
            offsetY: 7,
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            title: {
                text: 'Points',
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== 'undefined') {
                        return y.toFixed(0) + ' points';
                    }
                    return y;
                },
            },
        },
        grid: {
            borderColor: '#f1f3fa',
        },
    };

    const series = [
        {
            name: 'Team A',
            type: 'column',
            data: mixedChart2Data.data1 || [],
        },
        {
            name: 'Team B',
            type: 'area',
            data: mixedChart2Data.data2 || [],
        },
        {
            name: 'Team C',
            type: 'line',
            data: mixedChart2Data.data3 || [],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-3">Line, Column & Area Chart</h4>
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

export default LineColumnAreaChart;
