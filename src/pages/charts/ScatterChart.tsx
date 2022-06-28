import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../components/Loader';

// types
import { ApexLinearChartData } from './data';

interface ScatterChartProps {
    scatterChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const ScatterChart = ({ scatterChartData, showLoader }: ScatterChartProps) => {
    const options: ApexOptions = {
        chart: {
            zoom: {
                enabled: false,
            },
        },
        xaxis: {
            tickAmount: 10,
            labels: {
                formatter: (val) => {
                    return parseFloat(val).toFixed(1);
                },
            },
        },
        yaxis: {
            tickAmount: 7,
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
            name: 'Sample A',
            data: scatterChartData.data1 || [],
        },
        {
            name: 'Sample B',
            data: scatterChartData.data2 || [],
        },
        {
            name: 'Sample C',
            data: scatterChartData.data3 || [],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-3">Scatter (XY) Chart</h4>
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

export default ScatterChart;
