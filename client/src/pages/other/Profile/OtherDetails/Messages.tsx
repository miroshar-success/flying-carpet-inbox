import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// types
import { MessageTypes } from './data';

interface MessagesProps {
    messages: MessageTypes[];
}

const Messages = ({ messages }: MessagesProps) => {
    return (
        <>
            <h4 className="mt-1 fs-15 fw-bold text-uppercase">Messages</h4>
            <ul className="list-unstyled">
                {(messages || []).map((message, index) => {
                    return (
                        <li
                            key={index}
                            className={classNames('py-2', { 'border-bottom': index < messages.length - 1 })}>
                            <div className="d-flex">
                                {message.avatar && (
                                    <div className="me-3 flex-shrink-0">
                                        <img src={message.avatar} alt="" className="avatar-md rounded-circle" />
                                    </div>
                                )}
                                {!message.avatar && (
                                    <div className="avatar-md rounded-circle bg-soft-primary me-3 flex-shrink-0">
                                        <span className="fs-18 avatar-title text-primary fw-semibold">
                                            {message.userName![0]}
                                        </span>
                                    </div>
                                )}
                                <div className="flex-grow-1 overflow-hidden">
                                    <h5 className="fs-15 mt-2 mb-1">
                                        <Link to="#" className="text-dark">
                                            {message.userName}
                                        </Link>
                                    </h5>
                                    <p className="text-muted fs-13 text-truncate mb-0">{message.text}</p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>

            <div className="text-center">
                <Link to="#" className="btn btn-primary btn-sm">
                    Load more
                </Link>
            </div>
        </>
    );
};

export default Messages;
