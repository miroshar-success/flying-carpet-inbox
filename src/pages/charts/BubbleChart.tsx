import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../components/Loader';

// types
import { ApexLinearChartData } from './data';

interface BubbleChartProps {
    bubbleChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const BubbleChart = ({ bubbleChartData, showLoader }: BubbleChartProps) => {
    const options: ApexOptions = {
        fill: {
            opacity: 0.8,
        },
        xaxis: {
            tickAmount: 12,
            type: 'category',
        },
        yaxis: {
            max: 70,
        },
        grid: {
            borderColor: '#f1f3fa',
        },
        legend: {
            offsetY: 7,
        },
    };

    const series = [
        {
            name: 'Bubble 1',
            data: bubbleChartData.data1 || [],
        },
        {
            name: 'Bubble 2',
            data: bubbleChartData.data2 || [],
        },
        {
            name: 'Bubble 3',
            data: bubbleChartData.data3 || [],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-3">Simple Bubble Chart</h4>
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

export default BubbleChart;
