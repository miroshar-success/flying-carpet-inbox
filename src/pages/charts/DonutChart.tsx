import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../components/Loader';

// types
import { ApexLinearChartData } from './data';

interface DonutChartProps {
    gradientDonutChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const DonutChart = ({ gradientDonutChartData, showLoader }: DonutChartProps) => {
    const options: ApexOptions = {
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            floating: false,
            fontSize: '14px',
            offsetX: 0,
            offsetY: 7,
        },
        labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
        responsive: [
            {
                breakpoint: 600,
                options: {
                    chart: {
                        height: 240,
                    },
                    legend: {
                        show: false,
                    },
                },
            },
        ],
        fill: {
            type: 'gradient',
        },
    };

    const series = gradientDonutChartData.data || [];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-3">Gradient Donut Chart</h4>
                {showLoader ? (
                    <div style={{ height: 320, position: 'relative' }}>
                        <Loader />
                    </div>
                ) : (
                    <Chart
                        options={options}
                        series={series}
                        type="donut"
                        height={320}
                        className="apex-charts"
                        dir="ltr"
                    />
                )}
            </Card.Body>
        </Card>
    );
};

export default DonutChart;
