import React, { Component } from 'react';
import InnerSubHeader from './../../BaseComponents/InnerSubHeader'
import PropTypes from 'prop-types';

class DetailsPage extends Component {
    render() {
        console.log(this.props.match.params.id)
        return (
            <main className="DetailsPage">
                <InnerSubHeader title={this.props.title}/>
                <div className="container App__Body">
                    hello from {this.props.title}
                </div>
            </main>
        );
    }
}

DetailsPage.propTypes = {

};

export default DetailsPage;