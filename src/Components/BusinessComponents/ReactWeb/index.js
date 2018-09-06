import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import classnames from 'classnames';

// import Button from './../../../BaseComponents/Button';
import TileContainer from './../../BaseComponents/TileContainer';
import Loader from './../../BaseComponents/Loader';
import './ReactWeb.scss';

const propTypes = {}
const defaultProps = {}

export default class ReactWeb extends Component {
    constructor(props) {
        super(props)
    };

    componentDidMount(){
        this.props.fetchReactWebData();
    };

    render() {        
        return (
            <div className="ReactWeb">
                {this.props.showLoaderOnReactWebPage ? <Loader /> : 
                    <TileContainer tiles={this.props.reactWebPageData} 
                    updateLikesReactWeb={this.props.updateLikesReactWeb} />}
            </div>
        );
    }
}

ReactWeb.propTypes = propTypes;
ReactWeb.defaultProps = defaultProps;
