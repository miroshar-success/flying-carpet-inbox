import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import classNames from 'classnames';

// components
import PageTitle from '../../../components/PageTitle';

// icons
import { filledIcons, lineIcons } from './data';

const BootstrapIcon = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Icons', path: '/icons/bootstrap' },
                    { label: 'Bootstrap Icon', path: '/icons/bootstrap', active: true },
                ]}
                title={'Bootstrap Icon'}
            />

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <h5 className="mt-0 header-title">Line Icons</h5>
                            <Row className="icons-list" id="line-icon">
                                {(lineIcons || []).map((icon, index) => {
                                    return (
                                        <Col key={index} sm={6} lg={4} xl={3}>
                                            <div
                                                className="icon-item"
                                                style={{ display: 'flex', alignItems: 'center' }}>
                                                <i
                                                    className={classNames('bi', 'bi-' + icon.name)}
                                                    style={{ marginRight: '16px', fontSize: '20px' }}></i>
                                                <span>{'bi-' + icon.name}</span>
                                            </div>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <h5 className="mt-0 header-title">Filled Icons</h5>
                            <Row className="icons-list" id="filled-icon">
                                {(filledIcons || []).map((icon, index) => {
                                    return (
                                        <Col key={index} sm={6} lg={4} xl={3}>
                                            <div
                                                className="icon-item"
                                                style={{ display: 'flex', alignItems: 'center' }}>
                                                <i
                                                    className={classNames('bi', 'bi-' + icon.name)}
                                                    style={{ marginRight: '16px', fontSize: '20px' }}></i>
                                                <span>{'bi-' + icon.name}</span>
                                            </div>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default BootstrapIcon;
