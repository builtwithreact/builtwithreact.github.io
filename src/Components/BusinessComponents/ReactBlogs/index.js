import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InnerSubHeader from './../../BaseComponents/InnerSubHeader'

class ReactBlogs extends Component {
    render() {
        return (
            <main className="ReactBlogs">
                <InnerSubHeader title="Blog Posts"/>
                <div className="container App__Body">
                    ReactBlogs
                </div>
            </main>
        );
    }
}

ReactBlogs.propTypes = {

};

export default ReactBlogs;