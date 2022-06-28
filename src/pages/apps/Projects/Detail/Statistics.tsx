import React from 'react';
import FeatherIcons from 'feather-icons-react';

interface StatisticsProps {
    icon: string;
    stats: string;
    description: string;
}

const Statistics = ({ icon, stats, description }: StatisticsProps) => {
    return (
        <div className="d-flex p-3">
            <FeatherIcons icon={icon} className="align-self-center icon-dual icon-lg me-4"></FeatherIcons>
            <div className="flex-grow-1">
                <h4 className="mt-0 mb-0">{stats}</h4>
                <span className="text-muted">{description}</span>
            </div>
        </div>
    );
};

export default Statistics;
