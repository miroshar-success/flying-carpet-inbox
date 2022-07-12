import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../components/Loader';

// types
import { ApexLinearChartData } from './data';

interface BarChartProps {
    basicBarChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const BarChart = ({ basicBarChartData, showLoader }: BarChartProps) => {
    const options: ApexOptions = {
        chart: {
            height: 380,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        xaxis: {
            categories: [
                'South Korea',
                'Canada',
                'United Kingdom',
                'Netherlands',
                'Italy',
                'France',
                'Japan',
                'United States',
                'China',
                'Germany',
            ],
        },
    };

    const series = [
        {
            data: basicBarChartData.data || [],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-3">Basic Bar Chart</h4>
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

export default BarChart;
