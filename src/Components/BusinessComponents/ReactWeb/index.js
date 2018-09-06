import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TileContainer from './../../BaseComponents/TileContainer';
import SubHeader from './../../BaseComponents/SubHeader'
import Loader from './../../BaseComponents/Loader';
import Tile from './../../BaseComponents/Tile';
import './ReactWeb.scss';

const propTypes = {}
const defaultProps = {}

export default class ReactWeb extends Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        // this.props.fetchReactWebData();
    };

    render() {
        return (
            <main className="ReactWeb">
                <SubHeader />
                <div className="container App__Body">
                    <TileContainer />
                </div>
                {/* {this.props.showLoaderOnReactWebPage ? <Loader /> : 
                     tiles={this.props.reactWebPageData} 
                    updateLikesReactWeb={this.props.updateLikesReactWeb} />} */}
            </main>
        );
    }
}

ReactWeb.propTypes = propTypes;
ReactWeb.defaultProps = defaultProps;
