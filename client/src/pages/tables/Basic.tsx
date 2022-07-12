import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import classNames from 'classnames';

// components
import PageTitle from '../../components/PageTitle';

interface TableRecords {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
}

// dummy records
const records: TableRecords[] = [
    { id: 1, firstName: 'Mark', lastName: 'Otto', userName: '@mdo' },
    { id: 2, firstName: 'Jacob', lastName: 'Thornton', userName: '@fat' },
    { id: 3, firstName: 'Larry', lastName: 'the Bird', userName: '@twitter' },
];

const BasicTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Basic example</h4>
                <p className="sub-header">
                    For basic styling—light padding and only horizontal dividers—add the base class <code>.table</code>{' '}
                    to any <code>&lt;Table&gt;</code>.
                </p>

                <div className="table-responsive">
                    <Table className="table mb-0">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(records || []).map((record, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{record.id}</th>
                                        <td>{record.firstName}</td>
                                        <td>{record.lastName}</td>
                                        <td>{record.userName}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

const InverseTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Table Dark</h4>
                <p className="sub-header">
                    You can also invert the colors—with light text on dark backgrounds—by specifying variant{' '}
                    <code>dark</code>.
                </p>

                <div className="table-responsive">
                    <Table className="mb-0" variant="dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(records || []).map((record, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{record.id}</th>
                                        <td>{record.firstName}</td>
                                        <td>{record.lastName}</td>
                                        <td>{record.userName}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

const TableHeadOptions = ({ variant }: { variant: string }) => {
    const theadClass: string = variant === 'light' ? 'table-light' : 'table-dark';
    return (
        <>
            <Card>
                <Card.Body>
                    <h4 className="header-title mt-0 mb-1">Table head {variant}</h4>
                    <p className="sub-header">
                        Use one of two modifier classes to make <code>&lt;thead&gt;</code>s appear light or dark gray.
                    </p>
                    <div className="table-responsive">
                        <Table className="mb-0">
                            <thead className={theadClass}>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(records || []).map((record, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{record.id}</th>
                                            <td>{record.firstName}</td>
                                            <td>{record.lastName}</td>
                                            <td>{record.userName}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

const BorderedTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Bordered table</h4>
                <p className="sub-header">
                    Add <code>bordered</code> attribute for borders on all sides of the table and cells.
                </p>

                <div className="table-responsive">
                    <Table className="mb-0" bordered>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(records || []).map((record, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{record.id}</th>
                                        <td>{record.firstName}</td>
                                        <td>{record.lastName}</td>
                                        <td>{record.userName}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

const BorderedColorTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Border Color</h4>
                <p className="sub-header">
                    Add <code>.border-primary</code> for customised borders on all sides of the table and cells.
                </p>

                <Table className="border-primary mb-0" bordered>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(records || []).map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.userName}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const BorderlessTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Borderless table</h4>
                <p className="sub-header">
                    Add <code>borderless</code> attribute for a table without borders.
                </p>

                <div className="table-responsive">
                    <Table className="mb-0" borderless>
                        <thead className="table-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(records || []).map((record, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{record.id}</th>
                                        <td>{record.firstName}</td>
                                        <td>{record.lastName}</td>
                                        <td>{record.userName}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

const SmallTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Small table</h4>
                <p className="sub-header">
                    Add <code>size="sm"</code> attribute to make tables more compact by cutting cell padding in half
                </p>

                <Table className="mb-0" size="sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(records || []).map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.userName}</td>
                                </tr>
                            );
                        })}
                        <tr>
                            <th scope="row">4</th>
                            <td colSpan={2}>Mark Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const HoverableTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Hoverable Rows</h4>
                <p className="sub-header">
                    Add <code>hover</code> attribute to enable a hover state on table rows
                </p>

                <Table className="mb-0" hover>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(records || []).map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.firstName}</td>
                                    <td>{record.lastName}</td>
                                    <td>{record.userName}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const ActiveTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Active Tables</h4>
                <p className="sub-header">
                    Add <code>.table-active</code> to highlight a table row or cell.
                </p>
                <div className="table-responsive">
                    <Table className="mb-0" hover>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(records || []).map((record, index) => {
                                return (
                                    <tr key={index} className={classNames({ 'table-active': index === 0 })}>
                                        <th scope="row">{record.id}</th>
                                        <td>{record.firstName}</td>
                                        <td className={classNames({ 'table-active': index === 2 })}>
                                            {record.lastName}
                                        </td>
                                        <td>{record.userName}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

const StripedRowsTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Striped Rows</h4>
                <p className="sub-header">
                    Use <code>striped</code> attribute to add zebra-striping to any table row within the{' '}
                    <code>&lt;tbody&gt;</code>.
                </p>

                <div className="table-responsive">
                    <Table className="mb-0" striped>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(records || []).map((record, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{record.id}</th>
                                        <td>{record.firstName}</td>
                                        <td>{record.lastName}</td>
                                        <td>{record.userName}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

const TableCaption = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Captions</h4>
                <p className="sub-header">
                    A <code>&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen
                    readers to find a table and understand what it’s about and decide if they want to read it.
                </p>

                <div className="table-responsive">
                    <Table className="mb-0">
                        <caption>List of users</caption>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(records.slice(0, 2) || []).map((record, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{record.id}</th>
                                        <td>{record.firstName}</td>
                                        <td>{record.lastName}</td>
                                        <td>{record.userName}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

const ContextualClasses = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Contextual classes</h4>
                <p className="sub-header">Use contextual classes to color table rows or individual cells.</p>

                <div className="table-responsive">
                    <Table className="mb-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Column heading</th>
                                <th>Column heading</th>
                                <th>Column heading</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-active">
                                <th scope="row">1</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>

                            <tr className="table-success">
                                <th scope="row">2</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>

                            <tr className="table-info">
                                <th scope="row">3</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>

                            <tr className="table-warning">
                                <th scope="row">4</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>

                            <tr className="table-danger">
                                <th scope="row">5</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

const NestingTables = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Nesting tables</h4>
                <p className="sub-header"></p>

                <div className="table-responsive">
                    <Table className="mb-0" striped>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td colSpan={4}>
                                    <Table className="mb-0">
                                        <thead>
                                            <tr>
                                                <th>header</th>
                                                <th>header</th>
                                                <th>header</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>A</th>
                                                <td>first</td>
                                                <td>last</td>
                                            </tr>
                                            <tr>
                                                <th>B</th>
                                                <td>first</td>
                                                <td>last</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

const ResponsiveTable = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mt-0 mb-1">Responsive tables</h4>
                <p className="sub-header">
                    Create responsive tables by wrapping any <code>&lt;Table&gt;</code> in <code>responsive</code>{' '}
                    attribute to make them scroll horizontally on small devices (under 768px).
                </p>

                <Table className="mb-0" responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

const Tables = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Tables', path: '/ui/tables/basic' },
                    { label: 'Basic Tables', path: '/ui/tables/basic', active: true },
                ]}
                title={'Basic Tables'}
            />

            <Row>
                <Col lg={6}>
                    <BasicTable />
                </Col>

                <Col lg={6}>
                    <InverseTable />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <TableHeadOptions variant="light" />
                </Col>

                <Col lg={6}>
                    <TableHeadOptions variant="dark" />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <BorderedTable />
                </Col>

                <Col lg={6}>
                    <BorderedColorTable />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <BorderlessTable />
                </Col>

                <Col lg={6}>
                    <SmallTable />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <HoverableTable />
                </Col>

                <Col lg={6}>
                    <ActiveTable />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <StripedRowsTable />
                </Col>

                <Col lg={6}>
                    <TableCaption />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <ContextualClasses />
                </Col>

                <Col lg={6}>
                    <NestingTables />
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <ResponsiveTable />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Tables;
