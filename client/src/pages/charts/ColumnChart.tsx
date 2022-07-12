import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../components/Loader';

// types
import { ApexLinearChartData } from './data';

interface ColumnChartProps {
    basicColumnChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const ColumnChart = ({ basicColumnChartData, showLoader }: ColumnChartProps) => {
    const options: ApexOptions = {
        chart: {
            height: 380,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
            },
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        legend: {
            offsetY: 7,
        },
        yaxis: {
            title: {
                text: '$ (thousands)',
            },
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2,
            },
            borderColor: '#f1f3fa',
        },
        tooltip: {
            y: {
                formatter: (val: number) => {
                    return '$ ' + val + ' thousands';
                },
            },
        },
    };

    const series = [
        {
            name: 'Net Profit',
            data: basicColumnChartData.data1 || [],
        },
        {
            name: 'Revenue',
            data: basicColumnChartData.data2 || [],
        },
        {
            name: 'Free Cash Flow',
            data: basicColumnChartData.data3 || [],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-3">Basic Column Chart</h4>
                {showLoader ? (
                    <div style={{ height: 380, position: 'relative' }}>
                        <Loader />
                    </div>
                ) : (
                    <Chart
                        options={options}
                        series={series}
                        type="bar"
                        height={380}
                        className="apex-charts"
                        dir="ltr"
                    />
                )}
            </Card.Body>
        </Card>
    );
};

export default ColumnChart;
