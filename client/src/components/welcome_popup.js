import React from 'react';
import Slider from "react-slick";
import axios from 'axios';
import setting from '../const';
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
        axios(`${setting.host}/api/accept`, {
            method: 'POST',
            params: {
                shop: setting.shop
            }
        })
        .then(function (response) {
            console.log(response);
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