import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SubHeader.css';

class SubHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isWordVisible: true
        }
        this.CONSTANTS = {
            SUBMIT_PROJECT_BTN_TITLE: "Submit Request",
            GIVE_FEEDBACK_BTN_TITLE: "Give Feedback"
        };

        setInterval(() => {
            this.setState({
                isWordVisible: !this.state.isWordVisible
            });
        }, 2500)

    }

    render() {
        return (
            <div className="HeadingContainer">
                <div className="Heading container">
                    <h1 className="Tagline">One place to showcase your work</h1>
                    <div className="SubTagline">
                        <span>Implemented </span>
                        <span className={`SubTagline__Item ${this.state.isWordVisible ? 'SubTagline__Item--Front' : 'SubTagline__Item--Back'}`}>
                            <span className={this.state.isWordVisible ? 'is-visible' : 'is-hidden'}>using</span>
                            <span className={!this.state.isWordVisible ? 'is-visible' : 'is-hidden'}>for</span>
                        </span>
                        <span> React / React Native</span>
                    </div>
                    <div className="Heading__Cta">
                        <Link to="/SubmitRequest" className="Button">{this.CONSTANTS.SUBMIT_PROJECT_BTN_TITLE}</Link>
                        <Link to="/Feedback" className="Button">{this.CONSTANTS.GIVE_FEEDBACK_BTN_TITLE}</Link>
                    </div>
                </div>
            </div>
        );
    }
}


export default SubHeader;