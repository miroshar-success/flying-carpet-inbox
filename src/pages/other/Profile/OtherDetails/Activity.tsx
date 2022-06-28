import React from 'react';
import classNames from 'classnames';

// types
import { ActivityItemTypes } from './data';

interface ActivityProps {
    activityTimeline: ActivityItemTypes[];
}

const Activity = ({ activityTimeline }: ActivityProps) => {
    return (
        <>
            {(activityTimeline || []).map((activity, index) => {
                return (
                    <React.Fragment key={index}>
                        <h5 className={index === 0 ? 'mt-1' : 'mt-4'}>{activity.activityTime}</h5>
                        <div className={classNames('left-timeline', 'mt-3', 'ps-3', { 'mb-3': index === 0 })}>
                            <ul className="list-unstyled events mb-0">
                                {(activity.activities || []).map((item, index) => {
                                    return (
                                        <li key={index} className="event-list">
                                            <div className="pb-4">
                                                <div className="d-flex">
                                                    <div className="event-date text-center me-4 flex-shrink-0">
                                                        <div className="bg-soft-primary p-1 rounded text-primary fs-14">
                                                            {('0' + item.hours).slice(-2)} hours ago
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="fs-15 mt-0 mb-1">{item.title}</h6>
                                                        <p className="text-muted fs-14">{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default Activity;
