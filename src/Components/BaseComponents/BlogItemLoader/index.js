import React from 'react';
import './BlogItemLoader.css';

const BlogItemLoader = () => {
    return (
        <div className="BlogItemLoader">
            <div className="BlogItemLoader__Image" />
            <div className="BlogItemLoader__Body">
                <div className="BlogItemLoader__Body__Title" />
                <div className="BlogItemLoader__Body__Content" />
                <div className="BlogItemLoader__Body__Content__Link">
                    <div className="BlogItemLoader__Body__Content__Link__a" />
                </div>
            </div>
        </div>
    )
}

export default BlogItemLoader;