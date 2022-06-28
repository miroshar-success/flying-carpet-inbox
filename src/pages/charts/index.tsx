import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';

import LineChart from './LineChart';
import LineGradientChart from './LineGradientChart';
import StackedAreaChart from './StackedAreaChart';
import ColumnChart from './ColumnChart';
import ColumnDataLabelsChart from './ColumnDataLabelsChart';
import MixedChart from './MixedChart';
import BarChart from './BarChart';
import BarChartWithNegativeValues from './BarChartWithNegativeValues';
import LineColumnAreaChart from './LineColumnAreaChart';
import MultipleYaxisChart from './MultipleYaxisChart';
import BubbleChart from './BubbleChart';
import ThreeDBubbleChart from './ThreeDBubbleChart';
import ScatterChart from './ScatterChart';
import ScatterDateTimeChart from './ScatterDateTimeChart';
import PieChart from './PieChart';
import DonutChart from './DonutChart';
import DonutPatternedChart from './DonutPatternedChart';
import RadialBarChart from './RadialBarChart';
import RadialBarMultipleChart from './RadialBarMultipleChart';
import CircularGuageChart from './CircularGuageChart';

// dummy data
import {
    lineChartWithData,
    gradientLineChartData,
    stackedAreaChartData,
    basicColumnChartData,
    columnChartData,
    mixedChart1Data,
    basicBarChartData,
    barWithNegativeData,
    mixedChart2Data,
    multiYaxisChartData,
    bubbleChartData,
    threeDBubbleChartData,
    scatterChartData,
    scatterDateTimeChartData,
    pieChartData,
    gradientDonutChartData,
    patternedDonutChartData,
    radarChartData,
    multiRadarChartData,
    gaugeChartData,
} from './data';

const ApexChart = () => {
    const [isChatInitilized, setIsChatInitilized] = useState<boolean>(false);

    useEffect(() => {
        // set deafult config of apex chart
        if ((window as any).Apex) {
            (window as any).Apex = {
                chart: {
                    parentHeightOffset: 0,
                    toolbar: {
                        show: false,
                    },
                },
                grid: {
                    padding: {
                        left: 20,
                        right: 0,
                    },
                },
                colors: ['#5369F8', '#43D39E', '#F77E53', '#1CE1AC', '#25C2E3', '#FFBE0B'],
                tooltip: {
                    theme: 'dark',
                    x: { show: false },
                },
                dataLabels: {
                    enabled: false,
                },
                xaxis: {
                    axisBorder: {
                        color: '#D6DDEA',
                    },
                    axisTicks: {
                        color: '#D6DDEA',
                    },
                },
                yaxis: {
                    labels: {
                        offsetX: -5,
                    },
                },
            };
            setIsChatInitilized(true);
        }
        return () => {
            if ((window as any).Apex) {
                (window as any).Apex = {};
            }
        };
    }, []);

    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Apps', path: '/components/charts' },
                    { label: 'Charts', path: '/components/charts', active: true },
                ]}
                title={'Charts'}
            />

            <Row>
                <Col xl={6}>
                    <LineChart lineChartWithData={lineChartWithData} showLoader={!isChatInitilized} />
                </Col>
                <Col xl={6}>
                    <LineGradientChart gradientLineChartData={gradientLineChartData} showLoader={!isChatInitilized} />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <StackedAreaChart stackedAreaChartData={stackedAreaChartData} showLoader={!isChatInitilized} />
                </Col>
                <Col xl={6}>
                    <ColumnChart basicColumnChartData={basicColumnChartData} showLoader={!isChatInitilized} />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <ColumnDataLabelsChart columnChartData={columnChartData} showLoader={!isChatInitilized} />
                </Col>
                <Col xl={6}>
                    <MixedChart mixedChart1Data={mixedChart1Data} showLoader={!isChatInitilized} />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <BarChart basicBarChartData={basicBarChartData} showLoader={!isChatInitilized} />
                </Col>
                <Col xl={6}>
                    <BarChartWithNegativeValues
                        barWithNegativeData={barWithNegativeData}
                        showLoader={!isChatInitilized}
                    />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <LineColumnAreaChart mixedChart2Data={mixedChart2Data} showLoader={!isChatInitilized} />
                </Col>
                <Col xl={6}>
                    <MultipleYaxisChart multiYaxisChartData={multiYaxisChartData} showLoader={!isChatInitilized} />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <BubbleChart bubbleChartData={bubbleChartData} showLoader={!isChatInitilized} />
                </Col>
                <Col xl={6}>
                    <ThreeDBubbleChart threeDBubbleChartData={threeDBubbleChartData} showLoader={!isChatInitilized} />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <ScatterChart scatterChartData={scatterChartData} showLoader={!isChatInitilized} />
                </Col>
                <Col xl={6}>
                    <ScatterDateTimeChart
                        scatterDateTimeChartData={scatterDateTimeChartData}
                        showLoader={!isChatInitilized}
                    />
                </Col>
            </Row>

            <Row>
                <Col xxl={4} md={6}>
                    <PieChart pieChartData={pieChartData} showLoader={!isChatInitilized} />
                </Col>
                <Col xxl={4} md={6}>
                    <DonutChart gradientDonutChartData={gradientDonutChartData} showLoader={!isChatInitilized} />
                </Col>
                <Col xxl={4} md={6}>
                    <DonutPatternedChart
                        patternedDonutChartData={patternedDonutChartData}
                        showLoader={!isChatInitilized}
                    />
                </Col>

                <Col xxl={4} md={6}>
                    <RadialBarChart radarChartData={radarChartData} showLoader={!isChatInitilized} />
                </Col>
                <Col xxl={4} md={6}>
                    <RadialBarMultipleChart multiRadarChartData={multiRadarChartData} showLoader={!isChatInitilized} />
                </Col>
                <Col xxl={4} md={6}>
                    <CircularGuageChart gaugeChartData={gaugeChartData} showLoader={!isChatInitilized} />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ApexChart;
