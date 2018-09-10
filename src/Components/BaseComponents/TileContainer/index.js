import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import classnames from 'classnames';
import _map from 'lodash/map';
import Tile from './../Tile';
import Sample from './Sample.png'
import './TileContainer.css';

const propTypes = {}
const defaultProps = {}

export default class TileContainer extends Component {
    render() {
        return (
            <div className="TileContainer">
                <div className="Tile">
                    <div className="Tile-Image">
                        {/* <img src="http://madewithreact.com/content/images/2017/03/react-logo-generator-1.png" /> */}
                        <img src={Sample} alt=""/>
                    </div>
                    <div className="Tile-Details">
                        <hr className="divider" />
                        <div className="ProjectInfo">
                            <h3 className="ProjectInfo-Title"> React Logo Generator </h3>
                            <p className="ProjectInfo-Description">This is Play Area to Change to generate React Logo with different colors</p>
                        </div>
                        <div className="AuthorInfo">
                            <a href="https://github.com/pankajladhar" target="_blank">
                                {/* <img className="AuthorInfo-Avatar" src="https://avatars2.githubusercontent.com/u/6375735?v=4" name="Pankaj Ladhar" /> */}
                                <img className="AuthorInfo-Avatar" src={Sample} alt=""/>
                            </a>
                            <div>
                                <a href="https://github.com/pankajladhar" target="_blank">Pankaj Ladhar</a>
                                <span className="AuthorInfo-submissionDate">2017 Sept 15</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

TileContainer.propTypes = propTypes;
TileContainer.defaultProps = defaultProps;
