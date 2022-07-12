import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../components/Loader';

// types
import { ApexLinearChartData } from './data';

interface StackedAreaChartProps {
    stackedAreaChartData: ApexLinearChartData;
    showLoader?: boolean;
}

// StackedAreaChart
const StackedAreaChart = ({ stackedAreaChartData, showLoader }: StackedAreaChartProps) => {
    // default options
    const apexAreaChart2Opts: ApexOptions = {
        chart: {
            id: 'apexchart',
            height: 380,
            type: 'area',
            stacked: true,
        },
        stroke: {
            width: [3, 3, 3],
            curve: 'smooth',
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
        },
        xaxis: {
            type: 'datetime',
        },
    };

    // chart data
    const apexAreaChart2Data = [
        {
            name: 'South',
            data: stackedAreaChartData.data1 || [],
        },
        {
            name: 'North',
            data: stackedAreaChartData.data2 || [],
        },

        {
            name: 'Central',
            data: stackedAreaChartData.data3 || [],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Stacked Area</h4>
                {showLoader ? (
                    <div style={{ height: 380, position: 'relative' }}>
                        <Loader />
                    </div>
                ) : (
                    <Chart
                        options={apexAreaChart2Opts}
                        series={apexAreaChart2Data}
                        type="area"
                        height={380}
                        className="apex-charts"
                    />
                )}
            </Card.Body>
        </Card>
    );
};

export default StackedAreaChart;
