import React, { Component } from 'react';
import Button from './../Button';

import './SubHeader.css';

class SubHeader extends Component {
    constructor(props) {
        super(props);
        this.CONSTANTS = {
            SUBMIT_PROJECT_BTN_TITLE: "Submit Request",
            GIVE_FEEDBACK_BTN_TITLE: "Give Feedback"
        };
        this.handleOnSubmitRequestClick = this.handleOnSubmitRequestClick.bind(this);
        this.handleOnGiveFeedbackClick = this.handleOnGiveFeedbackClick.bind(this);
    }

    handleOnSubmitRequestClick() {
        return "handleOnSubmitRequestClick";
    }

    handleOnGiveFeedbackClick() {
        return "handleOnGiveFeedbackClick";
    }

    render() {
        return (
            <div className="Heading-Container">
                <div className="Heading container">
                    <p className="Tagline">One place to showcase your work</p>
                    <p className="Sub-Tagline Sub-Tagline-1">done
                <span className="card"> using / for </span>
                        {/* <span className="black"> for </span> */}
                        React / React Native
              </p>
                    <div className="Cta-Container">
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