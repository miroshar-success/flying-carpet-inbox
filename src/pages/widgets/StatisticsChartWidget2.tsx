import React from 'react';
import { Card } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface StatisticsChartWidget2Props {
    title?: string;
    subtitle?: string;
    colors?: Array<string>;
}

const StatisticsChartWidget2 = ({ title, subtitle, colors }: StatisticsChartWidget2Props) => {
    var labelsSales = [];
    for (var i = 1; i <= 10; i++) {
        labelsSales.push('2018-09-' + i);
    }

    //  default options
    const options: ApexOptions = {
        chart: {
            type: 'area',
            height: 160,
            sparkline: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 3,
            curve: 'smooth',
        },
        fill: {
            opacity: 0.2,
        },
        xaxis: {
            type: 'datetime',
            axisBorder: {
                color: '#d6ddea',
            },
            axisTicks: {
                color: '#d6ddea',
            },
        },
        yaxis: {
            labels: {
                offsetX: -5,
            },
            min: 0,
        },
        colors: colors,
        labels: labelsSales,
        title: {
            text: title,
            offsetX: 5,
            offsetY: 10,
            margin: 0,
            style: {
                fontSize: '24px',
            },
        },
        subtitle: {
            text: subtitle,
            offsetX: 5,
            offsetY: 45,
            margin: 0,
            style: {
                fontSize: '16px',
            },
        },
    };

    // chart data
    const series = [
        {
            name: 'Data',
            data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39],
        },
    ];

    return (
        <Card>
            <Card.Body className="p-0">
                <Chart className="apex-charts" options={options} series={series} type="area" dir="ltr" height={160} />
            </Card.Body>
        </Card>
    );
};

export default StatisticsChartWidget2;
