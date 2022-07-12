import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// types
import { PlatformTypes } from './data';

interface PlatformsProps {
    platforms: PlatformTypes[];
}

const Platforms = ({ platforms }: PlatformsProps) => {
    return (
        <Card>
            <Card.Body>
                <Link to="#" className="p-0 float-end">
                    Export <i className="uil uil-export ms-1"></i>
                </Link>

                <h4 className="card-title header-title">Platforms</h4>
                <div className="table-responsive table-nowrap mt-3">
                    <table className="table table-sm table-centered mb-0 fs-13">
                        <thead className="table-light">
                            <tr>
                                <th>System</th>
                                <th>Visits</th>
                                <th style={{ width: '40%' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {(platforms || []).map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.system}</td>
                                        <td>{item.visits}</td>
                                        <td>
                                            <ProgressBar now={item.progress} style={{ height: '3px' }} />
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

export default Platforms;
