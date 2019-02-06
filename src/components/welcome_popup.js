import React from 'react';
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export default class WelcomePopup extends React.Component {
    render() {
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
                        <button type="button" className="btn btn-dark" data-dismiss="modal">Skip for now</button>
                        <button type="button" className="btn btn-primary float-right">Ready to roll</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}