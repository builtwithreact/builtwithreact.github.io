import React from 'react';
import InnerSubHeader from './../../BaseComponents/InnerSubHeader'
import CONSTANTS from './../../../Constants';

const SubmitRequest = () => {
    return (
        <div className="SubmitRequest">
            <InnerSubHeader title="Submit Request" />
            <div className="container App__Body SubmitRequest__Body">
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

export default SubmitRequest;