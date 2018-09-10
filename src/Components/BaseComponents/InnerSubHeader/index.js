import React from 'react';
import PropTypes from 'prop-types';
import './InnerSubHeader.css';


const InnerSubHeader = ({ title }) => {
    return (
        <div className="InnerSubHeader">
            <div className="container">
                <h1 className="InnerSubHeader__Title">
                    {title}
                </h1>
            </div>
        </div>
    )
}

InnerSubHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default InnerSubHeader;