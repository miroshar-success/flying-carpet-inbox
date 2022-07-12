import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcons from 'feather-icons-react';
import classNames from 'classnames';

// types
import { ActivityTypes } from '../data';

interface ActivitiesProps {
    activity: ActivityTypes[];
}

const Activities = ({ activity }: ActivitiesProps) => {
    return (
        <Card>
            <Card.Body>
                <h6 className="mt-0 header-title">Project Activities</h6>
                <ul className="list-unstyled activity-widget">
                    {(activity || []).map((item, index) => {
                        const date = item.date.split(' ')[0];
                        const month = item.date.split(' ')[1];
                        return (
                            <li key={index} className="activity-list">
                                <div className="d-flex">
                                    <div className="text-center me-3 flex-shrink-0">
                                        <div className="avatar-sm">
                                            <span
                                                className={classNames(
                                                    'avatar-title',
                                                    'rounded-circle',
                                                    'bg-soft-' + item.variant,
                                                    'text-' + item.variant
                                                )}>
                                                {date}
                                            </span>
                                        </div>
                                        <p className="text-muted fs-13 mb-0">{month}</p>
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                        <h5 className="fs-15 my-1">
                                            <Link to="#" className="text-dark">
                                                {item.title}
                                            </Link>
                                        </h5>
                                        <p className="text-muted fs-13 text-truncate mb-0">{item.description}</p>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>

                <div className="text-center">
                    <Link to="#" className="btn btn-sm border btn-white">
                        <FeatherIcons icon="loader" className="icon-dual icon-xs me-2"></FeatherIcons>Load more
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Activities;
