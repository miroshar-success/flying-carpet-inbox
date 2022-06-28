import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// types
import { TimelineItemTypes } from './data';

interface CenterTimelineProps {
    timeLine2: TimelineItemTypes;
}

const createMarkup = (text: string) => {
    return { __html: text };
};

const CenterTimeline = ({ timeLine2 }: CenterTimelineProps) => {
    return (
        <>
            <h4 className="text-center mb-5">Center Timeline</h4>
            <div className="timeline">
                <article className="timeline-item">
                    <h2 className="m-0 d-none">&nbsp;</h2>
                    <div className="time-show mt-0">
                        <Link to="#" className="btn btn-primary width-lg">
                            {timeLine2.day}
                        </Link>
                    </div>
                </article>

                {(timeLine2.posts || []).map((post, index) => {
                    return (
                        <article
                            key={index}
                            className={classNames('timeline-item', { 'timeline-item-left': index % 2 === 0 })}>
                            <div className="timeline-desk">
                                <div className="timeline-box clearfix">
                                    <span className="timeline-icon"></span>
                                    <div
                                        className={classNames(
                                            'event-date',
                                            'text-center',
                                            index % 2 === 0 ? 'float-end ms-4' : 'float-start me-4'
                                        )}>
                                        <div className="avatar-sm rounded-circle bg-soft-primary">
                                            <span className="fs-16 avatar-title text-primary fw-semibold">
                                                {('0' + post.date).slice(-2)}
                                            </span>
                                        </div>
                                        <p className="mt-2">{post.month}</p>
                                    </div>

                                    <div className="overflow-hidden">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="mt-0">{post.postTitle}</h5>
                                                <div dangerouslySetInnerHTML={createMarkup(post.content!)}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </>
    );
};

export default CenterTimeline;
