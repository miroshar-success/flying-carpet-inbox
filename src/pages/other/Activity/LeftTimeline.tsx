import React from 'react';

// types
import { TimelineItemTypes } from './data';

interface LeftTimelineProps {
    timeLine1: TimelineItemTypes;
}

const createMarkup = (text: string) => {
    return { __html: text };
};

const LeftTimeline = ({ timeLine1 }: LeftTimelineProps) => {
    return (
        <>
            <h5 className="mb-3">Left Timeline</h5>
            <div className="left-timeline ps-3">
                <ul className="list-unstyled events">
                    {(timeLine1.posts || []).map((post, index) => {
                        return (
                            <li key={index} className="event-list">
                                <div>
                                    <div className="d-flex">
                                        <div className="event-date text-center me-4 flex-shrink-0">
                                            <div className=" avatar-sm rounded-circle bg-soft-primary">
                                                <span className="fs-16 avatar-title text-primary fw-semibold">
                                                    {('0' + post.date).slice(-2)}
                                                </span>
                                            </div>
                                            <p className="mt-2">{post.month}</p>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="card d-inline-block">
                                                <div className="card-body">
                                                    <h5 className="mt-0">{post.postTitle}</h5>
                                                    <div dangerouslySetInnerHTML={createMarkup(post.content!)}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default LeftTimeline;
