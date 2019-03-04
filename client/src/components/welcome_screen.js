import React from 'react';
import setting from '../const';
import axios from 'axios';

import TermAndConditions from './term_and_conditions';
import WelcomePopup from '../components/welcome_popup';
import Cookies from 'js-cookie';

const shop = Cookies.get('shopify_domain');

export default class WelcomeScreen extends React.Component {

    componentWillMount() {
        axios(`${setting.host}/api/user`, {
            method: 'GET',
            params: {
                shop: shop
            }
        })
        .then(function (response) {
            if (response.data.accept) window.location.href = "/app";
        })
        .catch(function (error) {
            console.log(error);
        })
    }

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