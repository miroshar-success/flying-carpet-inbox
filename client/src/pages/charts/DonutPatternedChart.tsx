import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../components/Loader';

// types
import { ApexLinearChartData } from './data';

interface DonutPatternedChartProps {
    patternedDonutChartData: ApexLinearChartData;
    showLoader?: boolean;
}

const DonutPatternedChart = ({ patternedDonutChartData, showLoader }: DonutPatternedChartProps) => {
    const options: ApexOptions = {
        chart: {
            dropShadow: {
                enabled: true,
                color: '#111',
                top: -1,
                left: 3,
                blur: 3,
                opacity: 0.2,
            },
        },
        stroke: {
            show: true,
            width: 2,
        },
        labels: ['Comedy', 'Action', 'SciFi', 'Drama', 'Horror'],
        fill: {
            type: 'pattern',
            opacity: 1,
            pattern: {
                style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
            },
        },
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            floating: false,
            fontSize: '14px',
            offsetX: 0,
            offsetY: 7,
        },
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
    };

    const series = patternedDonutChartData.data || [];
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-3">Patterned Donut Chart</h4>
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

export default DonutPatternedChart;
