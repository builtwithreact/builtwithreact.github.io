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
                    width="100%"
                    height="580"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0">
                    Loading...
                </iframe>
            </div>
        </div>
    )
}

export default Feedback;