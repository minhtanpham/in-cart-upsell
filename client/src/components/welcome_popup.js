import React from 'react';
import Slider from "react-slick";
import axios from 'axios';
import setting, { readCookie } from './../const';
import { Redirect } from 'react-router'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
export default class WelcomePopup extends React.Component {

    state = {
        redirect: false
    }

    accept_term() {
        var name = readCookie('shop.name');
        var email = readCookie(email);
        var address1 = readCookie(address1);
        var country = readCookie(country);
        var myshopify_domain = readCookie(myshopify_domain);
        var access_token = readCookie(access_token);
        var createdAt = new Date();
        var accept = false;
        var plan = 'free';
        axios(`${setting.host}/api/users`, {
            method: 'POST',
            params: {
                name: name,
                email: email,
                address1: address1,
                country: country,
                myshopify_domain: myshopify_domain,
                access_token: access_token,
                createdAt: createdAt,
                accept: accept,
                plan: plan
            }
        })
        .then(function (response) {
            if (response.status == 200) {
                this.setState({ redirect: true })
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        const { redirect } = this.state
        if (redirect) {
            return <Redirect to='/app'/>;
          }
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <Slider {...settings}>
                            <div>
                                <img alt="welcome" src="https://res.cloudinary.com/tanpham/image/upload/v1548570377/welcome-icon.png" />
                                <h2>WELCOME</h2>
                                <span>Thanks for installing! We're stoked to see your sales grow. Click the arrow to complete setup</span>
                            </div>
                            <div>
                                <img alt="success" src="https://res.cloudinary.com/tanpham/image/upload/v1549183017/success-welcome.png" />
                                <h2>You're all set!</h2>
                                <span>Now go out and  make us proud!</span>
                            </div>
                        </Slider>
                    </div>
                    <div className="slider-footer">
                        <button type="button" className="btn btn-dark" data-dismiss="modal" onClick={() => this.setState({ redirect: true })}>Skip for now</button>
                        <button type="button" className="btn btn-primary float-right" onClick={() => this.accept_term()}>Ready to roll</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}