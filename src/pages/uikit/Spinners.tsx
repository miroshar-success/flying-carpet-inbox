import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// components
import Spinner from '../../components/Spinner';

const colors: string[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];

const BorderedSpinners = () => {
    return (
        <div>
            <h5 className="fs-15 mb-1">Border spinner</h5>
            <p className="sub-header">Use the border spinners for a lightweight loading indicator.</p>
            <div>
                {(colors || []).map((color, index) => {
                    return (
                        <Spinner key={index} className="m-2" color={color}>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    );
                })}
            </div>
        </div>
    );
};

const GrowingSpinners = () => {
    return (
        <div className="mt-4 mt-lg-0">
            <h5 className="fs-15 mb-1">Growing spinner</h5>
            <p className="sub-header">
                If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it
                does repeatedly grow!
            </p>

            <div>
                {(colors || []).map((color, index) => {
                    return (
                        <Spinner key={index} className="m-2" type="grow" color={color}>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    );
                })}
            </div>
        </div>
    );
};

const Spinners = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-1 mt-0">Spinners</h4>

                <Row>
                    <Col xl={6}>
                        <BorderedSpinners />
                    </Col>
                    <Col xl={6}>
                        <GrowingSpinners />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Spinners;
