import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// images
import user from '../../../assets/images/users/avatar-5.jpg';

const LeftSidePanel = () => {
    const apexOpts: ApexOptions = {
        chart: {
            height: 225,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70% used',
                },
            },
        },
        colors: ['#43d39e'],
        labels: ['256 GB'],
    };

    const apexData = [58];

    return (
        <Card className="inbox-leftbar border-0 pb-1 pb-lg-4 h-100">
            <Card.Body className="d-flex align-items-start p-0">
                <img src={user} className="me-2 rounded-circle" height="48" alt="" />
                <div className="flex-grow-1">
                    <h5 className="mt-2 mb-0 fs-15 fw-bold">Shreyu N</h5>
                    <span className="text-muted fs-12">
                        Logout <i className="bi bi-arrow-right ms-1"></i>
                    </span>
                </div>
            </Card.Body>

            <hr />

            <div className="mail-list mb-0 mb-lg-4 fs-15">
                <Link to="#" className="list-group-item border-0">
                    <i className="bi bi-house me-2"></i>Home
                </Link>
                <Link to="#" className="list-group-item border-0 my-1 text-muted">
                    <i className="bi bi-card-text me-2"></i>Documents
                </Link>
                <Link to="#" className="list-group-item border-0 my-1 text-muted">
                    <i className="bi bi-download me-2"></i>Downloads
                </Link>
                <Link to="#" className="list-group-item border-0 my-1 text-muted">
                    <i className="bi bi-music-note-beamed me-2"></i>Music
                </Link>
                <Link to="#" className="list-group-item border-0 my-1 text-muted">
                    <i className="bi bi-image me-2"></i>Pictures
                </Link>
                <Link to="#" className="list-group-item border-0 my-1 text-muted">
                    <i className="bi bi-youtube me-2"></i>Video
                </Link>
                <Link to="#" className="list-group-item border-0 my-1 text-muted">
                    <i className="bi bi-clock me-2"></i>Recent
                </Link>
                <Link to="#" className="list-group-item border-0 my-1 text-muted">
                    <i className="bi bi-trash me-2"></i>Bin
                </Link>
            </div>

            <Card className="mt-4 mb-0 border-0">
                <div className="p-2 text-center">
                    <strong className="me-2">Your Storage</strong>
                </div>

                <Card.Body>
                    <Chart
                        options={apexOpts}
                        series={apexData}
                        type="radialBar"
                        height={225}
                        className="apex-charts mt-0"
                    />
                </Card.Body>

                <div className="fs-13 text-center">
                    <strong className="me-2">File Manager</strong>
                    <p className="text-muted mb-0">107.52 GB of 256 GB</p>
                </div>
            </Card>
        </Card>
    );
};

export default LeftSidePanel;
