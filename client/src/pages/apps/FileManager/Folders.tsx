import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import classNames from 'classnames';

// dummy data
import { folderDetailTypes } from './data';

interface QuickAccessProps {
    folderDetails: folderDetailTypes[];
}

const Folders = ({ folderDetails }: QuickAccessProps) => {
    return (
        <Row>
            <Col xs={12}>
                <h6 className="fs-18">Folders</h6>

                <Row>
                    {(folderDetails || []).map((f, i) => {
                        return (
                            <Col key={i} xxl={3} lg={6}>
                                <Card className="shadow-none border">
                                    <div className="p-2">
                                        <Row className="align-items-center">
                                            <Col className="col-auto">
                                                <div className="avatar-sm">
                                                    <span
                                                        className={classNames(
                                                            'avatar-title',
                                                            'rounded',
                                                            'fs-24',
                                                            'bg-soft-' + f.variant,
                                                            'text-' + f.variant
                                                        )}>
                                                        <i className={f.icon}></i>
                                                    </span>
                                                </div>
                                            </Col>
                                            <Col className="ps-1">
                                                <Link to="#" className="text-muted fw-bold fs-15">
                                                    {f.name}
                                                </Link>
                                                <p className="mb-0 fs-13">{f.size}</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Col>
        </Row>
    );
};

export default Folders;
