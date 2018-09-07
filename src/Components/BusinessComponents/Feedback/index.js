import React from 'react';
import InnerSubHeader from './../../BaseComponents/InnerSubHeader'
import CONSTANTS from './../../../Constants';
import './Feedback.css'

const Feedback = () => {
    return (
        <div className="Feedback">
            <InnerSubHeader title="Feedback" />
            <div className="container App__Body Feedback__Body">
                <div className="Feedback__Content">
                    <h3>
                        Your feedback is very valuable. If you have any feedback, please share.
                    </h3>
                </div>
                <iframe src={CONSTANTS.FEEDBACK_FORM_URL}
                    title="Feedback form"
                    width="100%"
                    height="580"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0">
                    Loading...
                </iframe>
            </div>
        </div>
    )
}

export default Feedback;