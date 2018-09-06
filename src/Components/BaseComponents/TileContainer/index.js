import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import classnames from 'classnames';
import _map from 'lodash/map';
import Tile from './../Tile';
import './TileContainer.css';

const propTypes = {}
const defaultProps = {}

export default class TileContainer extends Component {
    render() {
        return (
            <div className="TileContainer">
                <div class="Tile">
                    <div class="Tile-Image">
                        <img src="http://madewithreact.com/content/images/2017/03/react-logo-generator-1.png" />
                    </div>
                    <div class="Tile-Details">
                        <hr class="divider" />
                        <div class="ProjectInfo">
                            <h3 class="ProjectInfo-Title"> React Logo Generator </h3>
                            <p class="ProjectInfo-Description">This is Play Area to Change to generate React Logo with different colors</p>
                        </div><div class="AuthorInfo">
                            <a href="https://github.com/pankajladhar" target="_blank">
                                <img class="AuthorInfo-Avatar" src="https://avatars2.githubusercontent.com/u/6375735?v=4" name="Pankaj Ladhar" />
                            </a>
                            <div>
                                <a href="https://github.com/pankajladhar" target="_blank">Pankaj Ladhar</a>
                                <span class="AuthorInfo-submissionDate">2017 Sept 15</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Tile">
                    <div class="Tile-Image">
                        <img src="http://madewithreact.com/content/images/2017/03/react-logo-generator-1.png" />
                    </div>
                    <div class="Tile-Details">
                        <hr class="divider" />
                        <div class="ProjectInfo">
                            <h3 class="ProjectInfo-Title"> React Logo Generator </h3>
                            <p class="ProjectInfo-Description">This is Play Area to Change to generate React Logo with different colors This is Play Area to Change to generate React Logo with different colors</p>
                        </div><div class="AuthorInfo">
                            <a href="https://github.com/pankajladhar" target="_blank">
                                <img class="AuthorInfo-Avatar" src="https://avatars2.githubusercontent.com/u/6375735?v=4" name="Pankaj Ladhar" />
                            </a>
                            <div>
                                <a href="https://github.com/pankajladhar" target="_blank">Pankaj Ladhar</a>
                                <span class="AuthorInfo-submissionDate">2017 Sept 15</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Tile">
                    <div class="Tile-Image">
                        <img src="http://madewithreact.com/content/images/2017/03/react-logo-generator-1.png" />
                    </div>
                    <div class="Tile-Details">
                        <hr class="divider" />
                        <div class="ProjectInfo">
                            <h3 class="ProjectInfo-Title"> React Logo Generator </h3>
                            <p class="ProjectInfo-Description">This is Play Area to Change to generate React Logo with different colors This is Play Area to Change to generate React Logo with different colors</p>
                        </div><div class="AuthorInfo">
                            <a href="https://github.com/pankajladhar" target="_blank">
                                <img class="AuthorInfo-Avatar" src="https://avatars2.githubusercontent.com/u/6375735?v=4" name="Pankaj Ladhar" />
                            </a>
                            <div>
                                <a href="https://github.com/pankajladhar" target="_blank">Pankaj Ladhar</a>
                                <span class="AuthorInfo-submissionDate">2017 Sept 15</span>
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
