import React, { useState } from 'react';
import { Card, Button, Offcanvas, Dropdown } from 'react-bootstrap';

interface PlacementOptions {
    name: string;
    placement?: 'start' | 'end' | 'top' | 'bottom';
}

const OffcanvasPlacement = ({ name, placement }: PlacementOptions) => {
    const [show, setShow] = useState<boolean>(false);

    /**
     * handle modal toggle
     */
    const toggle = () => {
        setShow((prevState) => !prevState);
    };

    return (
        <>
            <Button variant="primary" onClick={toggle}>
                {name} offcanvas
            </Button>
            <Offcanvas show={show} onHide={toggle} placement={placement}>
                <Offcanvas.Header closeButton>
                    <h5 id="offcanvasTopLabel">Offcanvas {placement}</h5>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                        images, lists, etc.
                    </div>
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="cursor-pointer">
                            Dropdown button <i className="uil uil-angle-down"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

const Offcanvases = () => {
    const placementOptions: PlacementOptions[] = [
        {
            name: 'Top',
            placement: 'top',
        },
        {
            name: 'Bottom',
            placement: 'bottom',
        },
        {
            name: 'Left',
            placement: 'start',
        },
        {
            name: 'Right',
            placement: 'end',
        },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="mb-1 mt-0 header-title">Offcanvas</h4>
                <p className="sub-header">Four options are available: top, bottom, left and right aligned.</p>

                <div className="button-list">
                    {(placementOptions || []).map((option, index) => (
                        <OffcanvasPlacement key={index} placement={option.placement!} name={option.name} />
                    ))}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Offcanvases;
