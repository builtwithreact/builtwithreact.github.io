import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tile from './../Tile';
import Sample from './Sample.png'
import './TileContainer.css';

class TileContainer extends Component {
    render() {
        return (
            <div className="TileContainer">
                <Tile
                    imageUrl={Sample}
                    projectName="React Logo Generator"
                    description="This is Play Area to Change to generate React Logo with different colors"
                    avatarUrl={Sample}
                    submissionDate="21 Dec 2018"
                    authorName="Pankaj Ladhar" />
            </div>
        );
    }
}

TileContainer.propTypes = {

};
TileContainer.defaultProps = {

};
export default TileContainer
