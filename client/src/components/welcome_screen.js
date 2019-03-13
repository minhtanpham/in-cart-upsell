import React from 'react';
import setting from '../const';
import axios from 'axios';

import TermAndConditions from './term_and_conditions';
import WelcomePopup from '../components/welcome_popup';

const inIframe = function () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

export default class WelcomeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            iframe: false
        }
    }

    componentWillMount() {
        axios(`${setting.host}/api/user`, {
            method: 'GET',
            params: {
                shop: setting.shop
            }
        })
        .then(function (response) {
            if (response.data.accept) window.location.href = "/app";
        })
        .catch(function (error) {
            console.log(error);
        })
        if (inIframe()) this.setState({ iframe: true })
    }



    render() {
        const { iframe } = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="card mrt-50 mrb-50 pd-20 col-lg-12 text-center">
                        <h2 className="term-title">Terms and Conditions</h2>
                        <TermAndConditions />
                        {
                            !iframe
                            ?
                                <button className="btn btn-primary btn-large center">Please continue in store</button>
                            :
                                <button className="btn btn-primary btn-large center" data-toggle="modal" data-target="#exampleModal">Accept and Continue</button>
                        }
                        
                    </div>
                </div>
                <WelcomePopup />
            </div>
        )
    }
}