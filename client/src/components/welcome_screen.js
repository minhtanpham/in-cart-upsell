import React from 'react';

import TermAndConditions from './term_and_conditions';
import WelcomePopup from '../components/welcome_popup';

export default class WelcomeScreen extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card mrt-50 mrb-50 pd-20 col-lg-12 text-center">
                        <h2 className="term-title">Terms and Conditions</h2>
                        <TermAndConditions />
                        <button className="btn btn-primary btn-large center" data-toggle="modal" data-target="#exampleModal">Accept and Continue</button>
                    </div>
                </div>
                <WelcomePopup />
            </div>
        )
    }
}