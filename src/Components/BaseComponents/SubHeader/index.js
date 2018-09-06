import React, { Component } from 'react';
import Button from './../Button';

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
        this.handleOnSubmitRequestClick = this.handleOnSubmitRequestClick.bind(this);
        this.handleOnGiveFeedbackClick = this.handleOnGiveFeedbackClick.bind(this);
        setInterval(() => {
            this.setState({
                isWordVisible: !this.state.isWordVisible
            });
        }, 2500)

    }

    handleOnSubmitRequestClick() {
        return "handleOnSubmitRequestClick";
    }

    handleOnGiveFeedbackClick() {
        return "handleOnGiveFeedbackClick";
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
                        <Button value={this.CONSTANTS.SUBMIT_PROJECT_BTN_TITLE}
                            handleOnClick={this.handleOnSubmitRequestClick} />
                        <Button value={this.CONSTANTS.GIVE_FEEDBACK_BTN_TITLE}
                            handleOnClick={this.handleOnGiveFeedbackClick} />
                    </div>
                </div>
            </div>
        );
    }
}


export default SubHeader;