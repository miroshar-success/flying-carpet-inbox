import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import '@fullcalendar/react';
import { DateClickArg } from '@fullcalendar/interaction';
import { EventClickArg, EventInput } from '@fullcalendar/core';

// components
import PageTitle from '../../../components/PageTitle';

import Calendar from './Calendar';
import AddEditEvent from './AddEditEvent';

// dummy data
import { defaultEvents } from './data';

// images
import calendarImg from '../../../assets/images/cal.png';

interface IntroCardProps {
    createNewEvent: () => void;
}

const IntroCard = ({ createNewEvent }: IntroCardProps) => {
    return (
        <Row className="align-items-center">
            <Col xl={2} lg={3} xs={6}>
                <img src={calendarImg} className="me-4 align-self-center img-fluid" alt="" />
            </Col>
            <Col xl={10} lg={9}>
                <div className="mt-4 mt-lg-0">
                    <h5 className="mt-0 mb-1 fw-bold">Welcome to Your Calendar</h5>
                    <p className="text-muted mb-2">
                        The calendar shows the events synced from all your linked calendars. Click on event to see or
                        edit the details. You can create new event by clicking on "Create New event" button or any cell
                        available in calendar below.
                    </p>
                    {/* add events */}
                    <Button variant="primary" className="mt-2 me-1" id="btn-new-event" onClick={createNewEvent}>
                        <i className="uil-plus-circle"></i> Create New Event
                    </Button>
                    <Button variant="white" className="mt-2">
                        <i className="uil-sync"></i> Link Calendars
                    </Button>
                </div>
            </Col>
        </Row>
    );
};

const CalendarApp = () => {
    /*
     * modal handeling
     */
    const [show, setShow] = useState<boolean>(false);
    const onCloseModal = () => {
        setShow(false);
        setEventData({});
        setDateInfo({});
    };
    const onOpenModal = () => setShow(true);
    const [isEditable, setIsEditable] = useState<boolean>(false);

    /*
     * event data
     */
    const [events, setEvents] = useState<EventInput[]>([...defaultEvents]);
    const [eventData, setEventData] = useState<EventInput>({});
    const [dateInfo, setDateInfo] = useState<any>({});

    /*
    calendar events
    */
    // on date click
    const onDateClick = (arg: DateClickArg) => {
        setDateInfo(arg);
        onOpenModal();
        setIsEditable(false);
    };

    // on event click
    const onEventClick = (arg: EventClickArg) => {
        const event = {
            id: String(arg.event.id),
            title: arg.event.title,
            className: arg.event.classNames[0],
        };
        setEventData(event);
        onOpenModal();
        setIsEditable(true);
    };

    /*
    on add event 
    */
    const onAddEvent = (data: any) => {
        const modifiedEvents = [...events];
        const event = {
            id: String(modifiedEvents.length + 1),
            title: data.title,
            start: Object.keys(dateInfo).length !== 0 ? dateInfo.date : new Date(),
            className: data.className,
        };
        modifiedEvents.push(event);
        setEvents(modifiedEvents);
        onCloseModal();
    };

    /*
    on update event
    */
    const onUpdateEvent = (data: any) => {
        const modifiedEvents = [...events];
        const idx = modifiedEvents.findIndex((e: any) => e['id'] === eventData!.id);
        modifiedEvents[idx]['title'] = data.title;
        modifiedEvents[idx]['className'] = data.className;
        setEvents(modifiedEvents);
        onCloseModal();
        setIsEditable(false);
    };

    /*
    on remove event
    */
    const onRemoveEvent = () => {
        var modifiedEvents = [...events];
        const idx = modifiedEvents.findIndex((e: any) => e['id'] === eventData!.id);
        modifiedEvents.splice(idx, 1);
        setEvents(modifiedEvents);
        onCloseModal();
    };

    // create new event
    const createNewEvent = () => {
        setIsEditable(false);
        onOpenModal();
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Apps', path: '/apps/calendar' },
                    { label: 'Calendar', path: '/apps/calendar', active: true },
                ]}
                title={'Calendar'}
            />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <IntroCard createNewEvent={createNewEvent} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            {/* fullcalendar control */}
                            <Calendar onDateClick={onDateClick} onEventClick={onEventClick} events={events} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* add new event modal */}
            {show ? (
                <AddEditEvent
                    isOpen={show}
                    onClose={onCloseModal}
                    isEditable={isEditable}
                    eventData={eventData}
                    onUpdateEvent={onUpdateEvent}
                    onRemoveEvent={onRemoveEvent}
                    onAddEvent={onAddEvent}
                />
            ) : null}
        </>
    );
};

export default CalendarApp;
