import React from 'react';
import { Card, OverlayTrigger, Popover, Button, OverlayProps } from 'react-bootstrap';

interface DirectionsType {
    placement: OverlayProps['placement'];
}

const Popovers = () => {
    const directions: DirectionsType[] = [
        { placement: 'top' },
        { placement: 'bottom' },
        { placement: 'right' },
        { placement: 'left' },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-1 mt-0">Popovers</h4>
                <p className="sub-header">
                    Add small overlays of content, like those on the iPad, to any element for housing secondary
                    information.
                </p>

                <div className="button-list">
                    {(directions || []).map((item) => (
                        <OverlayTrigger
                            trigger="click"
                            key={item.placement}
                            placement={item.placement}
                            overlay={
                                <Popover popper id={`popover-positioned-${item.placement}`}>
                                    <Popover.Body>
                                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                    </Popover.Body>
                                </Popover>
                            }>
                            <Button variant="light">Popover on {item.placement}</Button>
                        </OverlayTrigger>
                    ))}

                    <OverlayTrigger
                        trigger="focus"
                        placement="right"
                        overlay={
                            <Popover popper id={`popover-dismissible`}>
                                <Popover.Body>And here's some amazing content. It's very engaging. Right?</Popover.Body>
                            </Popover>
                        }>
                        <Button>Dismissible popover</Button>
                    </OverlayTrigger>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Popovers;
