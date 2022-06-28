import React, { useState } from 'react';
import { Row, Col, Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import ShreyuDatepicker from '../../components/Datepicker';

// types
import { EventTypes } from './data';

interface EventsProps {
    calendarEvents: EventTypes[];
}

const Events = ({ calendarEvents }: EventsProps) => {
    const [date, setDate] = useState<Date>(new Date());

    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle as="a" className="cursor-pointer arrow-none text-muted">
                        <i className="uil uil-ellipsis-v"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <i className="uil uil-edit-alt me-2"></i>Edit
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <i className="uil uil-refresh me-2"></i>Refresh
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="text-danger">
                            <i className="uil uil-trash me-2"></i>Delete
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h4 className="header-title mb-4">Team Events</h4>

                <Row>
                    <Col sm={6}>
                        <div id="calendar-widget">
                            <ShreyuDatepicker
                                value={date}
                                onChange={(date) => setDate(date)}
                                inline
                                calendarClassName={'border border-1'}
                            />
                        </div>
                    </Col>
                    <Col sm={6}>
                        <ul className="list-unstyled ms-md-5 ms-xxl-2 ps-sm-2 ps-lg-0 ps-xxl-4 mt-4 mt-sm-0">
                            {(calendarEvents || []).map((item, index) => {
                                return (
                                    <li key={index} className="mb-3">
                                        <p className="text-muted mb-0 fs-13">
                                            <i className="uil uil-calender me-1"></i>
                                            {item.time}
                                        </p>
                                        <h6 className="mt-1 fs-16">{item.title}</h6>
                                    </li>
                                );
                            })}
                            <li>
                                <Link to="#" className="btn btn-primary w-75 mb-0">
                                    <i className="uil uil-focus-add me-2"></i>Add Event
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Events;
