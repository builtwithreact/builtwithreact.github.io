import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import classnames from 'classnames';
import './Tile.css';

const propTypes = {}
const defaultProps = {}

export default class Tile extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="Tile">
                <div className="Tile-Image" style={{ backgroundImage: "" }}>
                    <img src="https://madewithreact.com/content/images/2017/03/react-logo-generator-1.png" />
                </div>
                <div className="Tile-Details">
                    <hr className="divider" />
                    <div className="ProjectInfo">
                        <h3 className="ProjectInfo-Title"> {this.props.name} </h3>
                        <p className="ProjectInfo-Description">{this.props.desc}</p>
                    </div>
                    {/* githubId : {this.props.githubId} <br /> */}
                    {/* githubUrl : {this.props.githubUrl} <br /> */}
                    {/* longDesc : {this.props.longDesc} <br /> */}
                    {/* thumb : {this.props.thumb} <br /> */}
                    {/* twitterId : {this.props.twitterId}<br /> */}
                    <div className="AuthorInfo">
                        <a href="https://github.com/pankajladhar" target="_blank" rel="noopener noreferrer">
                            <img className="AuthorInfo-Avatar" src="https://avatars2.githubusercontent.com/u/6375735?v=4" name="Pankaj Ladhar" />
                        </a>
                        <div>
                            <a href="https://github.com/pankajladhar" target="_blank" rel="noopener noreferrer">Pankaj Ladhar</a>
                            <span className="AuthorInfo-submissionDate">{this.props.submissionDate}</span>
                        </div>
                    </div>
                </div>
                {/* <div className="Tile-CTA">
                    <button data-likes={this.props.likes} onClick={this.handleClickLikeBtn}>&hearts; {this.props.likes || 0}</button>
                    <button>&#128065; {this.props.views || 0}</button>
                </div> */}
            </div>
        );
    }
}

Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;
