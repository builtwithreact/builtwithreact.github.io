import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InnerSubHeader from './../../BaseComponents/InnerSubHeader'

class ReactNative extends Component {
    render() {
        return (
            <main className="ReactNative">
                <InnerSubHeader title="React Native"/>
                <div className="container App__Body">
                    ReactNative
                </div>
            </main>
        );
    }
}

ReactNative.propTypes = {

};

export default ReactNative;