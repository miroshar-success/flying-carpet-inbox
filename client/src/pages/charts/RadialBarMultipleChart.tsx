import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../components/Loader';

// types
import { ApexLinearChartData } from './data';

interface RadialBarMultipleChartProps {
    multiRadarChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const RadialBarMultipleChart = ({ multiRadarChartData, showLoader }: RadialBarMultipleChartProps) => {
    const options: ApexOptions = {
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: (w: number) => {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return String(249);
                        },
                    },
                },
            },
        },
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    };

    const series = multiRadarChartData.data || [];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-3">Multiple RadialBars</h4>
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

export default RadialBarMultipleChart;
