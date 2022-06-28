import React from 'react';
import { Card, OverlayTrigger, Tooltip, Button, OverlayProps } from 'react-bootstrap';

interface DirectionsType {
    placement: OverlayProps['placement'];
}

const Tooltips = () => {
    const directions: DirectionsType[] = [
        { placement: 'top' },
        { placement: 'bottom' },
        { placement: 'right' },
        { placement: 'left' },
    ];
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-1 mt-0">Tooltips</h4>
                <p className="sub-header">Four options are available: top, bottom, left and right aligned.</p>

                <div className="button-list">
                    {(directions || []).map((item) => (
                        <OverlayTrigger
                            key={item.placement}
                            placement={item.placement}
                            overlay={
                                <Tooltip id={`tooltip-${item.placement}`}>
                                    Tooltip on <strong>{item.placement}</strong>.
                                </Tooltip>
                            }>
                            <Button>Tooltip on {item.placement}</Button>
                        </OverlayTrigger>
                    ))}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Tooltips;
