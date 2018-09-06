import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import classnames from 'classnames';
import _map from 'lodash/map';
import Tile from './../Tile';
import './TileContainer.scss';

const propTypes = {}
const defaultProps = {}

export default class TileContainer extends Component {
    render() {
        return (
            <div className="TileContainer">
                {
                    _map(this.props.tiles, (tile, key)=> {
                        let updatedTile = Object.assign(tile, {referenceKey:key})
                        return <Tile updateLikesReactWeb={this.props.updateLikesReactWeb} key={key} {...updatedTile} />
                    })
                }
            </div>
        );
    }
}

TileContainer.propTypes = propTypes;
TileContainer.defaultProps = defaultProps;
