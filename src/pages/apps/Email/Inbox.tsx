import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Dropdown, ButtonGroup, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import classNames from 'classnames';

// components
import PageTitle from '../../../components/PageTitle';

import LeftBar from './LeftBar';

// dafault data
import { emails as mails, chatUsers } from './data';

const Email = ({ email }: { email: EmailItems }) => {
    return (
        <li className={classNames({ unread: !email.is_read })}>
            <div className="col-mail col-mail-1">
                <div className="checkbox-wrapper-mail">
                    <input type="checkbox" className="form-check-input" id={'mail' + email.id} />
                    <label className="toggle" htmlFor={'mail' + email.id}></label>
                </div>
                <span
                    className={classNames('star-toggle', 'uil', 'uil uil-star', {
                        'text-warning': email.is_important,
                    })}></span>
                <Link to="/apps/email/details" className="title">
                    {email.from_name}
                    {email.number_of_reply > 1 && <span> ({email.number_of_reply})</span>}
                </Link>
            </div>
            <div className="col-mail col-mail-2">
                <Link to="/apps/email/details" className="subject">
                    {email.subject} &nbsp;&ndash;&nbsp;
                    <span className="teaser">{email.teaser}</span>
                </Link>
                <div className="date">{email.time}</div>
            </div>
        </li>
    );
};

interface EmailItems {
    id: number;
    from_name: string;
    from_email: string;
    subject: string;
    teaser: string;
    number_of_reply: number;
    is_important: boolean;
    is_read: boolean;
    time: string;
    date: string;
}

// Inbox
const Inbox = () => {
    const [emails] = useState<Array<EmailItems>>(mails);
    const [totalEmails] = useState<number>(mails.length);
    const [startIndex, setStartIndex] = useState<number>(1);
    const [endIndex, setEndIndex] = useState<number>(20);
    const [totalUnreadEmails] = useState<number>(mails.filter((e: any) => e.is_read === false).length);

    const unreadEmails = emails.filter((email) => !email.is_read);
    const importantEmails = emails.filter((email) => email.is_important);
    const otherEmails = emails.filter((email) => email.is_read && !email.is_important);

    /**
     * get start index for other emails
     */
    const getStartIndex = useCallback(
        (index) => {
            let start = index - 1;
            if (start === 0) {
                return start;
            } else {
                return start - unreadEmails.length - importantEmails.length;
            }
        },
        [unreadEmails.length, importantEmails.length]
    );

    /**
     * get end index for other emails
     */
    const getEndIndex = useCallback(
        (index) => {
            let end = index;
            return end - unreadEmails.length - importantEmails.length;
        },
        [importantEmails.length, unreadEmails.length]
    );

    const [emailList, setEmailList] = useState<EmailItems[]>(
        otherEmails.slice(getStartIndex(startIndex), getEndIndex(endIndex))
    );

    /**
     * Gets the next page
     */
    const getNextPage = () => {
        const startIdx = startIndex + 20;
        const endIdx = endIndex + 20;
        setStartIndex(startIdx);
        setEndIndex(endIdx);
        setEmailList(otherEmails.slice(getStartIndex(startIdx), getEndIndex(endIdx)));
    };

    /**
     * Gets the prev page
     */
    const getPrevPage = () => {
        const startIdx = startIndex - 20;
        const endIdx = endIndex - 20;
        setStartIndex(startIdx);
        setEndIndex(endIdx);
        setEmailList(otherEmails.slice(getStartIndex(startIdx), getEndIndex(endIdx)));
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Email', path: '/apps/email/inbox' },
                    { label: 'Email Inbox', path: '/apps/email/inbox', active: true },
                ]}
                title={'Email Inbox'}
            />

            <Row>
                <Col>
                    <div className="email-container bg-transparent">
                        <Card className="inbox-leftbar">
                            <Link to="/apps/email/compose" className="btn btn-danger d-block">
                                Compose
                            </Link>
                            <LeftBar totalUnreadEmails={totalUnreadEmails} chatUsers={chatUsers} />
                        </Card>
                        <div className="inbox-rightbar">
                            <ButtonGroup className="mb-2 me-1">
                                <OverlayTrigger placement="top" overlay={<Tooltip id="archived">Archived</Tooltip>}>
                                    {({ ref, ...triggerHandler }) => (
                                        <Button ref={ref} {...triggerHandler} variant="light">
                                            <i className="uil uil-archive-alt"></i>
                                        </Button>
                                    )}
                                </OverlayTrigger>
                                <Button variant="light">
                                    <OverlayTrigger placement="top" overlay={<Tooltip id="spam">Spam</Tooltip>}>
                                        <i className="uil uil-exclamation-octagon"></i>
                                    </OverlayTrigger>
                                </Button>
                                <OverlayTrigger placement="top" overlay={<Tooltip id="delete">Delete</Tooltip>}>
                                    <Button variant="light">
                                        <i className="uil uil-trash-alt"></i>
                                    </Button>
                                </OverlayTrigger>
                            </ButtonGroup>

                            <OverlayTrigger placement="bottom" overlay={<Tooltip id="folder">Folder</Tooltip>}>
                                <Dropdown className="btn-group mb-2 me-1">
                                    <Dropdown.Toggle className="btn btn-light">
                                        <i className="uil uil-folder"></i> <i className="uil uil-angle-down"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Header>Move to :</Dropdown.Header>
                                        <Dropdown.Item>Social</Dropdown.Item>
                                        <Dropdown.Item>Promotions</Dropdown.Item>
                                        <Dropdown.Item>Updates</Dropdown.Item>
                                        <Dropdown.Item>Forums</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </OverlayTrigger>

                            <OverlayTrigger placement="top" overlay={<Tooltip id="labels">Labels</Tooltip>}>
                                <Dropdown className="btn-group mb-2 me-1">
                                    <Dropdown.Toggle className="btn btn-light">
                                        <i className="uil uil-label"></i> <i className="uil uil-angle-down"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Header>Label as:</Dropdown.Header>
                                        <Dropdown.Item>Social</Dropdown.Item>
                                        <Dropdown.Item>Promotions</Dropdown.Item>
                                        <Dropdown.Item>Updates</Dropdown.Item>
                                        <Dropdown.Item>Forums</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </OverlayTrigger>

                            <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip id="more actions">More Actions</Tooltip>}>
                                <Dropdown className="btn-group mb-2">
                                    <Dropdown.Toggle className="btn btn-light">
                                        <i className="uil uil-ellipsis-h fs-13"></i> More{' '}
                                        <i className="uil uil-angle-down"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Header>More Options :</Dropdown.Header>
                                        <Dropdown.Item>Mark as Unread</Dropdown.Item>
                                        <Dropdown.Item>Add to Tasks</Dropdown.Item>
                                        <Dropdown.Item>Add Star</Dropdown.Item>
                                        <Dropdown.Item>Mute</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </OverlayTrigger>

                            <div className="d-inline-block align-middle float-lg-end">
                                <Row>
                                    <Col xs={8} className="align-self-center">
                                        Showing {startIndex} - {endIndex} of {totalEmails}
                                    </Col>
                                    <Col xs={4}>
                                        <ButtonGroup className="float-end">
                                            {startIndex === 1 ? (
                                                <Button variant="white" className="btn-sm" disabled>
                                                    <i className="uil uil-angle-left"></i>
                                                </Button>
                                            ) : (
                                                <Button variant="primary" className="btn-sm" onClick={getPrevPage}>
                                                    <i className="uil uil-angle-left"></i>
                                                </Button>
                                            )}
                                            {endIndex !== totalEmails ? (
                                                <Button variant="primary" className="btn-sm" onClick={getNextPage}>
                                                    <i className="uil uil-angle-right"></i>
                                                </Button>
                                            ) : (
                                                <Button variant="white" className="btn-sm" disabled>
                                                    <i className="uil uil-angle-right"></i>
                                                </Button>
                                            )}
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </div>

                            <div className="mt-2">
                                {startIndex === 1 && (
                                    <>
                                        {' '}
                                        <h5 className="mt-3 mb-2 fs-16">Unread</h5>
                                        <ul className="message-list">
                                            {(unreadEmails || []).map((email, idx) => {
                                                return <Email email={email} key={idx} />;
                                            })}
                                        </ul>
                                        <h5 className="mt-4 mb-2 fs-16">Important</h5>
                                        <ul className="message-list">
                                            {(importantEmails || []).map((email, idx) => {
                                                return <Email email={email} key={idx} />;
                                            })}
                                        </ul>
                                    </>
                                )}
                                <h5 className={classNames('mb-2', 'fs-16', startIndex === 1 ? 'mt-4' : 'mt-3')}>
                                    Everything Else
                                </h5>
                                <ul className="message-list">
                                    {(emailList || []).map((email, idx) => {
                                        return <Email email={email} key={idx} />;
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className="clearfix"></div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Inbox;
