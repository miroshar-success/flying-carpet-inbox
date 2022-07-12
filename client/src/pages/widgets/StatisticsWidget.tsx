import React from 'react';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';
import FeatherIcons from 'feather-icons-react';

interface StatisticsWidgetProps {
    variant: string;
    stats: string;
    title: string;
    icon: string;
}

const StatisticsWidget = ({ variant, stats, icon, title }: StatisticsWidgetProps) => {
    return (
        <Card>
            <Card.Body>
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <span className="text-muted text-uppercase fs-12 fw-bold">{title}</span>
                        <h3 className="mb-0">{stats}</h3>
                    </div>
                    <div className="align-self-center flex-shrink-0">
                        <FeatherIcons icon={icon} className={classNames('icon-lg', 'icon-dual-' + variant)} />
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default StatisticsWidget;
