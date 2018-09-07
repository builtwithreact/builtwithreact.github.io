import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InnerSubHeader from './../../BaseComponents/InnerSubHeader'
// import BlogItem from './../../BaseComponents/BlogItem'
import BlogItemLoader from './../../BaseComponents/BlogItemLoader'
import './ReactBlogs.css'

class ReactBlogs extends Component {
    render() {
        return (
            <main className="ReactBlogs">
                <InnerSubHeader title="Blog Posts"/>
                <div className="container App__Body">
                    <BlogItemLoader />
                    <BlogItemLoader />
                    {/* <BlogItem /> */}
                </div>
            </main>
        );
    }
}

ReactBlogs.propTypes = {

};

export default ReactBlogs;