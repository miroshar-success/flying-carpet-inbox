import React from 'react';
import { Col, Row } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';

import Accordions from './Accordions';
import Alerts from './Alerts';
import Badges from './Badges';
import Buttons from './Buttons';
import Cards from './Cards';
import Dropdowns from './Dropdowns';
import Modals from './Modals';
import Navs from './Navs';
import Offcanvases from './Offcanvas';
import Popovers from './Popovers';
import Progressbars from './Progressbars';
import Spinners from './Spinners';
import Toasts from './Toasts';
import Tooltips from './Tooltips';

const UIElements = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Components', path: '/apps/calendar' },
                    { label: 'UI Elements', path: '/apps/calendar', active: true },
                ]}
                title={'UI Elements'}
            />

            <Row>
                <Col xl={6}>
                    <Alerts />
                </Col>
                <Col xl={6}>
                    <Toasts />
                </Col>
            </Row>

            <Buttons />

            <Row>
                <Col lg={12}>
                    <Badges />
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Cards />
                </Col>
            </Row>

            <Dropdowns />

            <Navs />

            <Accordions />

            <Row>
                <Col lg={12}>
                    <Modals />
                </Col>
            </Row>

            <Progressbars />

            <Row>
                <Col lg={6}>
                    <Popovers />
                </Col>
                <Col lg={6}>
                    <Tooltips />
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Spinners />
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Offcanvases />
                </Col>
            </Row>
        </>
    );
};

export default UIElements;
