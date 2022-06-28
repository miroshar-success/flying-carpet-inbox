import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';

// components
import { WorldVectorMap } from '../../../components/VectorMap';

const SessionbyLocations = () => {
    // vector map config
    const options = {
        zoomOnScroll: false,
        markers: [
            {
                coords: [41.9, 12.45],
                name: 'Vatican City',
            },
            {
                coords: [43.73, 7.41],
                name: 'Monaco',
            },
            {
                coords: [-0.52, 166.93],
                name: 'Nauru',
            },
            {
                coords: [-8.51, 179.21],
                name: 'Tuvalu',
            },
            {
                coords: [43.93, 12.46],
                name: 'San Marino',
            },
            {
                coords: [47.14, 9.52],
                name: 'Liechtenstein',
            },
            {
                coords: [7.11, 171.06],
                name: 'Marshall Islands',
            },
            {
                coords: [17.3, -62.73],
                name: 'Saint Kitts and Nevis',
            },
            {
                coords: [3.2, 73.22],
                name: 'Maldives',
            },
            {
                coords: [35.88, 14.5],
                name: 'Malta',
            },
            {
                coords: [12.05, -61.75],
                name: 'Grenada',
            },
            {
                coords: [13.16, -61.23],
                name: 'Saint Vincent and the Grenadines',
            },
            {
                coords: [13.16, -59.55],
                name: 'Barbados',
            },
            {
                coords: [17.11, -61.85],
                name: 'Antigua and Barbuda',
            },
            {
                coords: [-4.61, 55.45],
                name: 'Seychelles',
            },
            {
                coords: [7.35, 134.46],
                name: 'Palau',
            },
            {
                coords: [42.5, 1.51],
                name: 'Andorra',
            },
            {
                coords: [14.01, -60.98],
                name: 'Saint Lucia',
            },
            {
                coords: [6.91, 158.18],
                name: 'Federated States of Micronesia',
            },
            {
                coords: [1.3, 103.8],
                name: 'Singapore',
            },
            {
                coords: [0.33, 6.73],
                name: 'SÃ£o TomÃ© and PrÃ­ncipe',
            },
        ],
        markerStyle: {
            initial: {
                r: 9,
                fill: '#5369f8',
                'fill-opacity': 0.9,
                stroke: '#fff',
                'stroke-width': 7,
                'stroke-opacity': 0.4,
            },
            hover: {
                fill: '#727cf5',
                stroke: '#fff',
                'fill-opacity': 1,
                'stroke-width': 1.5,
            },
        },
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#d4dadd',
            },
        },
    };

    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle as="a" className="cursor-pointer arrow-none p-0 text-dark">
                        <i className="uil uil-ellipsis-v fs-13"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <i className="uil uil-refresh me-2"></i>Refresh Report
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <i className="uil uil-export me-2"></i>Export Report
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h4 className="card-title header-title">Session by Locations</h4>

                <div className="my-3">
                    <WorldVectorMap height="407px" width="100%" options={options} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default SessionbyLocations;
