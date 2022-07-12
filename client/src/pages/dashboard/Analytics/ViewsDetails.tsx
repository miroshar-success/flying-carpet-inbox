import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// types
import { ViewsDetailTypes } from './data';

interface ViewsDetailsProps {
    viewsDetails: ViewsDetailTypes[];
}

const ViewsDetails = ({ viewsDetails }: ViewsDetailsProps) => {
    return (
        <Card>
            <Card.Body>
                <Link to="#" className="p-0 float-end">
                    Export <i className="uil uil-export ms-1"></i>
                </Link>

                <h4 className="card-title header-title">Views Per Minute</h4>

                <div className="table-responsive table-nowrap mt-2">
                    <table className="table mb-0">
                        <thead>
                            <tr>
                                <th>Page</th>
                                <th>Bounce Rate</th>
                                <th>Traffic Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(viewsDetails || []).map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <Link to="#" className="text-muted">
                                                {item.page}
                                            </Link>
                                        </td>
                                        <td>{item.bounce_rate}</td>
                                        <td>
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item">
                                                    <i className="uil uil-desktop"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                    <i className="uil uil-mobile-android-alt"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                    <i className="uil uil-tablet"></i>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ViewsDetails;
