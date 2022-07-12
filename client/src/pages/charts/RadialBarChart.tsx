import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../components/Loader';

// types
import { ApexLinearChartData } from './data';

interface RadialBarChartProps {
    radarChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const RadialBarChart = ({ radarChartData, showLoader }: RadialBarChartProps) => {
    const options: ApexOptions = {
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                },
            },
        },
        colors: ['#50a5f1'],
        labels: ['CRICKET'],
    };

    const series = radarChartData.data || [];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-3">Basic RadialBar Chart</h4>
                {showLoader ? (
                    <div style={{ height: 350, position: 'relative' }}>
                        <Loader />
                    </div>
                ) : (
                    <Chart
                        options={options}
                        series={series}
                        type="radialBar"
                        height={350}
                        className="apex-charts"
                        dir="ltr"
                    />
                )}
            </Card.Body>
        </Card>
    );
};

export default RadialBarChart;
