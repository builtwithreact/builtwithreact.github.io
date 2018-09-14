import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tile.css';
class Tile extends Component {
    render() {
        const { imageUrl, projectName, description, avatarUrl, authorName, submissionDate, gitHubUrl } = this.props
        return (
            <div className="Tile">
                <div className="Tile-Image">
                    <img src={imageUrl} alt={projectName} />
                </div>
                <div className="Tile-Details">
                    <hr className="divider" />
                    <div className="ProjectInfo">
                        <h3 className="ProjectInfo-Title"> {projectName} </h3>
                        <p className="ProjectInfo-Description">{description}</p>
                    </div>
                    <div className="AuthorInfo">
                        <a href={gitHubUrl}
                            target="_blank"
                            rel="noopener noreferrer">
                            <img className="AuthorInfo-Avatar"
                                src={avatarUrl}
                                alt={authorName} />
                        </a>
                        <div>
                            <a href={gitHubUrl}
                                target="_blank"
                                rel="noopener noreferrer">{authorName}</a>
                            <span className="AuthorInfo-submissionDate">{submissionDate}</span>
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

Tile.propTypes = {
    imageUrl: PropTypes.string,
    projectName: PropTypes.string,
    description: PropTypes.string,
    avatarUrl: PropTypes.string,
    authorName: PropTypes.string,
    gitHubUrl: PropTypes.string,
}

export default Tile;

