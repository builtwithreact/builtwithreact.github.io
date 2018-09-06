import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InnerSubHeader from './../../BaseComponents/InnerSubHeader'

class ReactTools extends Component {
    render() {
        return (
            <main className="ReactTools">
                <InnerSubHeader title="Tools"/>
                <div className="container App__Body">
                    ReactTools
                </div>
            </main>
        );
    }
}

ReactTools.propTypes = {

};

export default ReactTools;