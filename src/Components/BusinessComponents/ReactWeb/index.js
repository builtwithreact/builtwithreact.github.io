import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TileContainer from './../../BaseComponents/TileContainer';
import Loader from './../../BaseComponents/Loader';
import Tile from './../../BaseComponents/Tile';
import './ReactWeb.scss';

const propTypes = {}
const defaultProps = {}

export default class ReactWeb extends Component {
    constructor(props) {
        super(props)
    };

    componentDidMount(){
        // this.props.fetchReactWebData();
    };

    render() {        
        return (
            <div className="ReactWeb">
                <TileContainer />
                {/* {this.props.showLoaderOnReactWebPage ? <Loader /> : 
                     tiles={this.props.reactWebPageData} 
                    updateLikesReactWeb={this.props.updateLikesReactWeb} />} */}
            </div>
        );
    }
}

ReactWeb.propTypes = propTypes;
ReactWeb.defaultProps = defaultProps;
