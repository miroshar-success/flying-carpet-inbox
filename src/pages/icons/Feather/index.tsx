import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

// components
import PageTitle from '../../../components/PageTitle';

// icon data
import { FEATHERICONLIST, FEATHERICONWITHVARIANT } from './data';

const FeatherIcons = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Icons', path: '/icons/feather' },
                    { label: 'Feather Icon', path: '/icons/feather', active: true },
                ]}
                title={'Feather Icon'}
            />

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <h5 className="mt-0 mb-1 header-title">Examples</h5>
                            <p className="mb-3">
                                Use <code>&lt;FeatherIcon icon="activity" /&gt;</code>.
                            </p>

                            <Row className="icons-list">
                                {(FEATHERICONLIST || []).map((icon, index) => {
                                    return (
                                        <Col key={index} sm={6} xl={3} lg={4}>
                                            <div className="icon-item">
                                                <FeatherIcon icon={icon.name} /> <span>{icon.name}</span>
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
                            <h5 className="mt-0 mb-1 header-title">Two Tone Icons</h5>
                            <p className="mb-3">
                                Use <code>&lt;FeatherIcon icon="activity" className="icon-dual" /&gt;</code>.
                            </p>

                            <Row className="icons-list">
                                {(FEATHERICONLIST || []).map((icon, index) => {
                                    return (
                                        <Col key={index} sm={6} xl={3} lg={4}>
                                            <div className="icon-item">
                                                <FeatherIcon icon={icon.name} className="icon-dual" />{' '}
                                                <span>{icon.name}</span>
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
                            <h5 className="mt-0 mb-1 header-title">Sizes</h5>
                            <p className="mb-3">
                                Use <code>&lt;FeatherIcon icon="activity" className="icon-**" /&gt;</code>. Available
                                sizes <code>sm,md,lg,xl,xxl</code>
                            </p>

                            <Row className="icons-list">
                                <Col sm={6} lg={4} xl={3}>
                                    <div className="icon-item">
                                        <FeatherIcon icon="airplay" className="icon-xs icon-dual" />{' '}
                                        <span>Extra Small</span>
                                    </div>
                                </Col>
                                <Col sm={6} lg={4} xl={3}>
                                    <div className="icon-item">
                                        <FeatherIcon icon="airplay" className="icon-sm icon-dual" /> <span>Small</span>
                                    </div>
                                </Col>
                                <Col sm={6} lg={4} xl={3}>
                                    <div className="icon-item">
                                        <FeatherIcon icon="airplay" className="icon-lg icon-dual" /> <span>Large</span>
                                    </div>
                                </Col>
                                <Col sm={6} lg={4} xl={3}>
                                    <div className="icon-item">
                                        <FeatherIcon icon="airplay" className="icon-xl icon-dual" />{' '}
                                        <span>Extra Large</span>
                                    </div>
                                </Col>
                                <Col sm={6} lg={4} xl={3}>
                                    <div className="icon-item">
                                        <FeatherIcon icon="airplay" className="icon-xxl icon-dual" />{' '}
                                        <span>Extra Extra Large</span>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <h5 className="mt-0 mb-1 header-title">Two Tones Color Icons</h5>
                            <p className="mb-3">
                                Use <code>&lt;FeatherIcon icon="activity" className="icon-dual-**" /&gt;</code>.
                            </p>

                            <Row className="icons-list">
                                {(FEATHERICONWITHVARIANT || []).map((icon, index) => {
                                    return (
                                        <Col key={index} sm={6} lg={4} xl={3}>
                                            <div className="icon-item">
                                                <FeatherIcon
                                                    icon={icon.name}
                                                    className={classNames('icon-dual-' + icon.variant)}
                                                />{' '}
                                                <span>{icon.name}</span>
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

export default FeatherIcons;
