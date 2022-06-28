import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import classNames from 'classnames';
import { ApexOptions } from 'apexcharts';

interface StatisticsChartWidgetProps {
    colors?: Array<string>;
    containerClass?: string;
    type?:
        | 'line'
        | 'area'
        | 'bar'
        | 'histogram'
        | 'pie'
        | 'donut'
        | 'radialBar'
        | 'scatter'
        | 'bubble'
        | 'heatmap'
        | 'treemap'
        | 'boxPlot'
        | 'candlestick'
        | 'radar'
        | 'polarArea'
        | 'rangeBar';
    name?: string;
    data?: Array<number>;
    title?: string;
    stats?: string;
    trend: {
        textClass: string;
        value: string;
    };
}

const StatisticsChartWidget2 = (props: StatisticsChartWidgetProps) => {
    //  default options
    const options: ApexOptions = {
        chart: {
            sparkline: {
                enabled: true,
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '80%',
            },
        },
        xaxis: {
            crosshairs: {
                width: 1,
            },
        },
        stroke: {
            width: props.type ? 2 : 0,
            curve: 'smooth',
        },
        colors: props.colors || ['#008FFB'],
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: false,
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: (seriesName) => {
                        return '';
                    },
                },
            },
            marker: {
                show: false,
            },
        },
    };

    // type - defaulted to bar
    const type = props.type || 'bar';

    // chart data
    const series = [{ name: props.name || 'Data', data: props.data || [] }];

    return (
        <Row className={props.containerClass}>
            <Col md={5} xs={6}>
                <h6 className="text-muted mt-0 fs-14">{props.title}</h6>
                <h3 className="my-2">{props.stats}</h3>
                <h6 className={classNames('mb-0', props.trend.textClass)}>{props.trend.value}</h6>
            </Col>

            <Col md={5} xs={5}>
                <div className="float-end">
                    <Chart options={options} series={series} type={type} height={60} width={110} />
                </div>
            </Col>
        </Row>
    );
};

export default StatisticsChartWidget2;
