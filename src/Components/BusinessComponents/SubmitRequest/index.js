import React from 'react';
import InnerSubHeader from './../../BaseComponents/InnerSubHeader'
import CONSTANTS from './../../../Constants';

const SubmitRequest = () => {
    return (
        <div className="SubmitRequest">
            <InnerSubHeader title="Submit Request" />
            <div className="container App__Body SubmitRequest__Body">
                <iframe src={CONSTANTS.FEEDBACK_FORM_URL}
                    title="Submit form"
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

export default SubmitRequest;