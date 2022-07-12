import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../components/Loader';

// types
import { ApexLinearChartData } from './data';

interface ThreeDBubbleChartProps {
    threeDBubbleChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const ThreeDBubbleChart = ({ threeDBubbleChartData, showLoader }: ThreeDBubbleChartProps) => {
    const options: ApexOptions = {
        fill: {
            type: 'gradient',
        },
        xaxis: {
            tickAmount: 12,
            type: 'datetime',
            labels: {
                rotate: 0,
            },
        },
        yaxis: {
            max: 70,
        },
        legend: {
            offsetY: 7,
        },
        grid: {
            borderColor: '#f1f3fa',
        },
    };

    const series = [
        {
            name: 'Product 1',
            data: threeDBubbleChartData.data1 || [],
        },
        {
            name: 'Product 2',
            data: threeDBubbleChartData.data2 || [],
        },
        {
            name: 'Product 3',
            data: threeDBubbleChartData.data3 || [],
        },
        {
            name: 'Product 4',
            data: threeDBubbleChartData.data4 || [],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-3">3D Bubble Chart</h4>
                {showLoader ? (
                    <div style={{ height: 380, position: 'relative' }}>
                        <Loader />
                    </div>
                ) : (
                    <Chart
                        options={options}
                        series={series}
                        type="bubble"
                        height={380}
                        className="apex-charts"
                        dir="ltr"
                    />
                )}
            </Card.Body>
        </Card>
    );
};

export default ThreeDBubbleChart;
