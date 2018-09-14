import React from 'react';
import InnerSubHeader from './../../BaseComponents/InnerSubHeader'
import CONSTANTS from './../../../Constants';
import './SubmitRequest.css';

const SubmitRequest = () => {
    return (
        <div className="SubmitRequest">
            <InnerSubHeader title="Request" />
            <div className="container App__Body SubmitRequest__Body">
                <div className="SubmitRequest__Content">
                    <h3>
                        You can submit you request by filling below form.
                        {/* <br />OR<br />
                        you can directly write to us.<br />
                        <a href="mailto:builtwithreact@gmail.com">builtwithreact@gmail.com</a> */}
                    </h3>
                </div>
                <iframe src={CONSTANTS.REQUEST_FORM_URL}
                    title="Submit form"
                    width="100%"
                    height="1300"
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