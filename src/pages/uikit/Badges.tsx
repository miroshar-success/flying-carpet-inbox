import React from 'react';
import { Card, Col, Row, Badge, Button } from 'react-bootstrap';
import classNames from 'classnames';

interface ColorTypes {
    name: string;
    color: string;
}

const colors: ColorTypes[] = [
    {
        name: 'Primary',
        color: 'primary',
    },
    {
        name: 'Secondary',
        color: 'secondary',
    },
    {
        name: 'Success',
        color: 'success',
    },
    {
        name: 'Danger',
        color: 'danger',
    },
    {
        name: 'Warning',
        color: 'warning',
    },
    {
        name: 'Info',
        color: 'info',
    },
];

const DefaultBadges = () => {
    return (
        <>
            <h4 className="fs-15 mb-1">Default</h4>
            <p className="sub-header">
                Badges scale to match the size of the immediate parent element by using relative font sizing and{' '}
                <code className="highlighter-rouge">em</code>
                units.
            </p>
            {(colors || []).map((color, index) => {
                return (
                    <Badge
                        className={classNames(
                            'me-1',
                            'badge bg-' + color.color,
                            color.color === 'light' ? 'text-dark' : null
                        )}
                        key={index}>
                        {color.name}
                    </Badge>
                );
            })}
        </>
    );
};

const PillBadges = () => {
    return (
        <div className="mt-4">
            <h4 className="fs-15 mb-1">Pill Badges</h4>
            <p className="sub-header">
                Use the <code>.rounded-pill</code> modifier class to make badges more rounded.
            </p>

            {(colors || []).map((color, index) => {
                return (
                    <Badge
                        pill
                        className={classNames(
                            'me-1',
                            'bg-' + color.color,
                            color.color === 'light' ? 'text-dark' : null
                        )}
                        key={index}>
                        {color.name}
                    </Badge>
                );
            })}
        </div>
    );
};

const SoftBadges = () => {
    return (
        <div className="mt-4">
            <h5 className="fs-15 mb-1">Badges Lighten</h5>
            <p className="sub-header">
                Use the <code>.badge-soft-*</code> for a badge lighten.
            </p>

            {(colors || []).map((color, index) => {
                return (
                    <Badge pill bg="" className={classNames('me-1', 'badge-soft-' + color.color)} key={index}>
                        {color.name}
                    </Badge>
                );
            })}
        </div>
    );
};

const PositionedBadges = () => {
    return (
        <>
            <h4 className="mb-1 mt-0 header-title">Badges Positioned</h4>
            <p className="sub-header">
                Use utilities to modify a <code>.badge</code> and position it in the corner of a link or button.
            </p>

            <Row>
                <Col xs={6}>
                    <Button variant="primary" className="position-relative">
                        Inbox
                        <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                            99+
                            <span className="visually-hidden">unread messages</span>
                        </Badge>
                    </Button>
                </Col>

                <Col xs={6}>
                    <Button variant="primary" className="position-relative">
                        Profile
                        <Badge
                            bg="danger"
                            className="position-absolute top-0 start-100 translate-middle p-1 border border-light rounded-circle">
                            <span className="visually-hidden">New alerts</span>
                        </Badge>
                    </Button>
                </Col>

                <Col xs={6}>
                    <Button variant="success" className="mt-4">
                        Notifications
                        <Badge bg="light" className="text-dark ms-1">
                            4
                        </Badge>
                    </Button>
                </Col>
            </Row>
        </>
    );
};

const Badges = () => {
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col xl={6}>
                        <h4 className="mb-3 mt-0 header-title">Badges</h4>
                        <DefaultBadges />
                        <PillBadges />
                        <SoftBadges />
                    </Col>
                    <Col xl={6}>
                        <PositionedBadges />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Badges;
