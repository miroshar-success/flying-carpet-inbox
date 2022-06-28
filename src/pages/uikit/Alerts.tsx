import React, { useState } from 'react';
import { Card, Alert } from 'react-bootstrap';
import classNames from 'classnames';

const Alerts = () => {
    const [colors, setColors] = useState<string[]>(['danger', 'warning', 'info']);

    /*
     * handle close
     */
    const handleClose = (index: number) => {
        const list = [...colors];
        list.splice(index, 1);
        setColors(list);
    };

    return (
        <Card>
            <Card.Body>
                <div>
                    <h5 className="header-title mb-1 mt-0">Alerts</h5>
                    <p className="sub-header">
                        Provide contextual feedback messages for typical user actions with the handful of available and
                        flexible alert messages.
                    </p>

                    {['primary', 'secondary', 'success'].map((color, index) => {
                        return (
                            <Alert variant={color} key={index}>
                                A simple {color} alert—check it out!
                            </Alert>
                        );
                    })}

                    {(colors || []).map((color, index) => {
                        return (
                            <Alert
                                variant={color}
                                key={index}
                                onClose={() => handleClose(index)}
                                dismissible
                                className={classNames({ 'mb-0': index === colors.length - 1 })}>
                                A simple {color} alert—check it out!
                            </Alert>
                        );
                    })}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Alerts;
