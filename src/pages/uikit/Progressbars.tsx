import React from 'react';
import { Card, Col, Row, ProgressBar } from 'react-bootstrap';

const SimpleProgressbar = () => {
    return (
        <div>
            <ProgressBar className="mb-3" />
            <ProgressBar now={33} className="mb-3" />
            <ProgressBar now={66} className="mb-3" />
            <ProgressBar now={100} className="mb-3" />
            <ProgressBar now={25} label={'25%'} />
        </div>
    );
};

const StripedProgressbars = () => {
    return (
        <div className="mt-5">
            <h5 className="fs-16 mb-1 mt-0">Striped Progressbars</h5>
            <p className="sub-header">Uses a gradient to create a striped effect.</p>

            <ProgressBar striped now={10} className="mb-3" />
            <ProgressBar striped variant="success" now={25} className="mb-3" />
            <ProgressBar striped variant="info" now={50} className="mb-3" />
            <ProgressBar striped variant="warning" now={75} className="mb-3" />
            <ProgressBar striped variant="danger" now={100} className="mb-3" />
            <ProgressBar animated now={75} />
        </div>
    );
};

const ContextualAlternatives = () => {
    return (
        <>
            <h5 className="fs-16 mb-1 mt-0">Contextual Progressbars</h5>
            <p className="sub-header">
                Progress bars use some of the same button and alert classes for consistent styles.
            </p>

            <div>
                <ProgressBar now={25} className="mb-3" variant="success" />
                <ProgressBar now={50} className="mb-3" variant="info" />
                <ProgressBar now={75} className="mb-3" variant="warning" />
                <ProgressBar now={100} className="mb-3" variant="danger" />
                <ProgressBar className="mb-0">
                    <ProgressBar variant="primary" now={15} key={1} />
                    <ProgressBar variant="success" now={30} key={2} />
                    <ProgressBar variant="info" now={20} key={3} />
                </ProgressBar>
            </div>
        </>
    );
};

const Sizes = () => {
    return (
        <div className="mt-5">
            <h5 className="fs-16 mb-1 mt-0">Progressbars Size</h5>
            <p className="sub-header">
                We can set a <code>height</code> value on the <code>.progress</code>. The inner{' '}
                <code>.progress-bar</code> will automatically resize accordingly.
            </p>
            <div>
                <ProgressBar now={70} className="mb-3" style={{ height: 1 }} />
                <ProgressBar now={30} className="progress-sm mb-3" />
                <ProgressBar now={25} className="mb-3 progress-md" variant="success" />
                <ProgressBar now={50} className="mb-3 progress-lg" variant="info" />
                <ProgressBar now={75} className="mb-3 progress-xl" variant="warning" />
                <ProgressBar now={38} className="mb-0 progress-xxl" variant="danger" />
            </div>
        </div>
    );
};

const Progressbars = () => {
    return (
        <Row>
            <Col lg={6}>
                <Card>
                    <Card.Body>
                        <h5 className="header-title mb-1 mt-0">Progressbars</h5>
                        <p className="sub-header">Simple examples of progressbar</p>

                        <SimpleProgressbar />

                        <StripedProgressbars />
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={6}>
                <Card>
                    <Card.Body>
                        <div className="mt-4 mt-xl-0">
                            <ContextualAlternatives />

                            <Sizes />
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Progressbars;
