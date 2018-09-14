import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TileContainer from './../../BaseComponents/TileContainer';
import InnerSubHeader from './../../BaseComponents/InnerSubHeader'
import './ReactWeb.scss';

class ReactWeb extends Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        // this.props.fetchReactWebData();
    };

    render() {
        return (
            <main className="ReactWeb">
                <InnerSubHeader title="React web"/>
                <div className="container App__Body">
                    <TileContainer />
                </div>
            </main>
        );
    }
}

export default  ReactWeb
