import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import PageTitle from '../../components/PageTitle';

// dummy data
import { invoiceData } from './data';

// images
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

// invoice component
const Invoice = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Pages', path: '/pages/invoice' },
                    { label: 'Invoice', path: '/pages/invoice', active: true },
                ]}
                title={'Invoice'}
            />

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <div className="clearfix">
                                <div className="float-sm-end">
                                    <div className="auth-logo">
                                        <Link to="/" className="logo logo-dark text-center">
                                            <span className="logo-lg">
                                                <img src={logoDark} alt="" height="24" />
                                            </span>
                                        </Link>
                                        <Link to="/" className="logo logo-light text-center">
                                            <span className="logo-lg">
                                                <img src={logoLight} alt="" height="24" />
                                            </span>
                                        </Link>
                                    </div>

                                    <address className="mt-2">
                                        {invoiceData.address.line_1}
                                        <br />
                                        {invoiceData.address.city}, {invoiceData.address.state}{' '}
                                        {invoiceData.address.zip}
                                        <br />
                                        <abbr title="Phone">P:</abbr> {invoiceData.address.phone}
                                    </address>
                                </div>
                                <div className="float-sm-start">
                                    <h4 className="m-0 d-print-none">Invoice</h4>
                                    <dl className="row mb-2 mt-3">
                                        <dt className="col-sm-3 fw-normal">Invoice Number :</dt>
                                        <dd className="col-sm-9 fw-normal">{invoiceData.invoice_id}</dd>

                                        <dt className="col-sm-3 fw-normal">Invoice Date :</dt>
                                        <dd className="col-sm-9 fw-normal">{invoiceData.invoice_date}</dd>

                                        <dt className="col-sm-3 fw-normal">Due Date :</dt>
                                        <dd className="col-sm-9 fw-normal">{invoiceData.due_date}</dd>
                                    </dl>
                                </div>
                            </div>

                            <Row className="mt-4">
                                <Col md={6}>
                                    <h6 className="fw-normal">Invoice For:</h6>
                                    <h6 className="fs-16">{invoiceData.customer}</h6>
                                    <address>
                                        {invoiceData.address.line_1}
                                        <br />
                                        {invoiceData.address.city}, {invoiceData.address.state}{' '}
                                        {invoiceData.address.zip}
                                        <br />
                                        <abbr title="Phone">P:</abbr> {invoiceData.address.phone}
                                    </address>
                                </Col>

                                <Col md={6}>
                                    <div className="text-md-end">
                                        <h6 className="fw-normal">Total</h6>
                                        <h2>${invoiceData.total}</h2>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <div className="table-responsive">
                                        <table className="table mt-4 table-centered  table-nowrap">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Item</th>
                                                    <th style={{ width: '10%' }}>Hours</th>
                                                    <th style={{ width: '10%' }}>Hours Rate</th>
                                                    <th style={{ width: '10%' }} className="text-end">
                                                        Total
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {(invoiceData.items || []).map((item, idx) => {
                                                    return (
                                                        <tr key={idx}>
                                                            <td>{idx + 1}</td>
                                                            <td>
                                                                <h5 className="fs-16 mt-0 mb-2">{item.name}</h5>
                                                                <p className="text-muted mb-0">{item.description}</p>
                                                            </td>
                                                            <td>{item.hours}</td>
                                                            <td>${item.hour_rate}</td>
                                                            <td className="text-end">${item.total}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={6}>
                                    <div className="clearfix pt-5">
                                        <h6 className="text-muted">Notes:</h6>
                                        <small className="text-muted">{invoiceData.notes}</small>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="float-end mt-4">
                                        <p>
                                            <span className="fw-medium">Sub-total :</span>
                                            <span className="float-end">${invoiceData.sub_total}</span>
                                        </p>
                                        <p>
                                            <span className="fw-medium">Discount (10%) :</span>
                                            <span className="float-end">
                                                {' '}
                                                &nbsp;&nbsp;&nbsp; ${invoiceData.discount}
                                            </span>
                                        </p>
                                        <h3>${invoiceData.total} USD</h3>
                                    </div>
                                    <div className="clearfix"></div>
                                </Col>
                            </Row>

                            <div className="mt-5 mb-1">
                                <div className="text-end d-print-none">
                                    <Link
                                        to="#"
                                        onClick={() => {
                                            window.print();
                                        }}
                                        className="btn btn-primary me-1">
                                        <i className="uil uil-print me-1"></i> Print
                                    </Link>
                                    <Link to="#" className="btn btn-info">
                                        Submit
                                    </Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Invoice;
