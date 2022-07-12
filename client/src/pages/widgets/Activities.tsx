import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// types
import { ActivityTypes } from './data';

interface ActivitiesProps {
    activities: ActivityTypes[];
}

const createMarkup = (text: string) => {
    return { __html: text };
};

const Activities = ({ activities }: ActivitiesProps) => {
    return (
        <Card>
            <Card.Body>
                <Link to="#" className="btn btn-primary btn-sm float-end">
                    View All
                </Link>
                <h6 className="header-title mb-4">Activities</h6>

                {(activities || []).map((item, index) => {
                    return (
                        <div key={index} className={classNames('d-flex', { 'mt-3': index !== 0 })}>
                            {item.avatar && <img src={item.avatar} className="me-3 avatar rounded-circle" alt="" />}
                            {item.userInitial && (
                                <div className="avatar me-3 fs-24 fw-normal flex-shrink-0">
                                    <span
                                        className={classNames(
                                            'avatar-title',
                                            'rounded-circle',
                                            'bg-soft-' + item.variant,
                                            'text-' + item.variant
                                        )}>
                                        {item.userInitial}
                                    </span>
                                </div>
                            )}

                            <div className="flex-grow-1">
                                <h6 className="mt-0 mb-1 fs-15 fw-normal">
                                    <div dangerouslySetInnerHTML={createMarkup(item.activityTitle)}></div>
                                </h6>
                                <p className="text-muted">{item.time}</p>
                            </div>
                        </div>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

export default Activities;
