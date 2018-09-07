import React from 'react';
import PropTypes from 'prop-types';
import sample from './sample.jpg'
import './BlogItem.css';

const BlogItem = (props) => {
    return (
        <div className="BlogItem">
            <img src={sample} alt="" className="BlogItem__Image" />
            <div className="BlogItem__Body">
                <h2 className="BlogItem__Body__Title">
                    5 Best Free Resouces for Learning HTML and CSS
                </h2>
                <div className="BlogItem__Body__Content">
                    Last year I wrote about why bookinf too far in advance can be dangerous for yoyr businss,
                     and this concept of margin so eloquently caprutes what i had
                </div>
                <div className="BlogItem__Body__Content__Link">
                    <a href=""> Read more </a>
                </div>
            </div>
        </div>
    )
}

export default BlogItem;