import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

interface StatisticsWidget2Props {
    variant: string;
    title: string;
    stats: string;
    progress: number;
    description: string;
}

const StatisticsWidget2 = ({ variant, title, stats, progress, description }: StatisticsWidget2Props) => {
    return (
        <Card>
            <Card.Body>
                <div>
                    <span className="text-muted text-uppercase fs-12 fw-bold">{title}</span>
                    <h3>{stats}</h3>
                    <ProgressBar now={progress} variant={variant} style={{ height: '5px' }} className="my-2" />
                    <span className="text-muted fw-semibold">{description}</span>
                </div>
            </Card.Body>
        </Card>
    );
};

export default StatisticsWidget2;
