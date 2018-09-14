import React from 'react';
import PropTypes from 'prop-types';
import sample from './sample.jpg'
import './BlogItem.css';

const BlogItem = (props) => {
    return (
        <div className="BlogItem">
            <img src={props.imageUrl} alt={props.title} className="BlogItem__Image" />
            <div className="BlogItem__Body">
                <h2 className="BlogItem__Body__Title">
                    {props.title}
                </h2>
                <div className="BlogItem__Body__Content">
                    {props.content}
                </div>
                <div className="BlogItem__Body__Content__Link">
                    <a href={props.readMoreLink}>
                        Read more
                    </a>
                </div>
            </div>
        </div>
    )
}

BlogItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    content: PropTypes.string,
    readMoreLink: PropTypes.string
}

BlogItem.defaultProps = {
    imageUrl: sample
}

export default BlogItem;