import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';

// components
import Loader from '../../components/Loader';

// types
import { ApexLinearChartData } from './data';

interface BarChartWithNegativeValuesProps {
    showLoader?: boolean;
    barWithNegativeData: ApexLinearChartData;
}

const BarChartWithNegativeValues = ({ barWithNegativeData, showLoader }: BarChartWithNegativeValuesProps) => {
    const options: ApexOptions = {
        chart: {
            height: 380,
            type: 'bar',
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '80%',
            },
        },
        grid: {
            borderColor: '#f1f3fa',
        },
        yaxis: {
            min: -5,
            max: 5,
        },
        tooltip: {
            shared: false,
            y: {
                formatter: function (val) {
                    return Math.abs(val) + '%';
                },
            },
        },
        xaxis: {
            categories: [
                '85+',
                '80-84',
                '75-79',
                '70-74',
                '65-69',
                '60-64',
                '55-59',
                '50-54',
                '45-49',
                '40-44',
                '35-39',
                '30-34',
                '25-29',
                '20-24',
                '15-19',
                '10-14',
                '5-9',
                '0-4',
            ],
            title: {
                text: 'Percent',
            },
            labels: {
                formatter: (val: string) => {
                    return Math.abs(Math.round(Number(val))) + '%';
                },
            },
        },
        legend: {
            offsetY: 7,
        },
    };

    const series = [
        {
            name: 'Males',
            data: barWithNegativeData.data1 || [],
        },
        {
            name: 'Females',
            data: barWithNegativeData.data2 || [],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-3">Bar with Negative Values</h4>
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

export default BarChartWithNegativeValues;
