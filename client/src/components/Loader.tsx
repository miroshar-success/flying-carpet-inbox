import React from 'react';

/**
 * Renders the preloader
 */
const Loader = () => {
    return (
        <div className="preloader" id="preloader">
            <div className="status" id="status">
                <div className="spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
