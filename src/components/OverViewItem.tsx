import React from 'react';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

interface OverViewItemProps {
    stats: string;
    title: string;
    icon: string;
    iconClass?: string;
}

const OverViewItem = ({ stats, title, icon, iconClass }: OverViewItemProps) => {
    return (
        <div className="d-flex p-3 border-bottom">
            <div className="flex-grow-1">
                <h4 className="mt-0 mb-1 fs-22">{stats}</h4>
                <span className="text-muted">{title}</span>
            </div>
            <FeatherIcon icon={icon} className={classNames('align-self-center', 'icon-dual', iconClass)} />
        </div>
    );
};

export default OverViewItem;
