import React from 'react';

export default class SettingScreen extends React.Component {
    render() {
        return (
            <div className="container card pd-20 mrt-50">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="plan-container">
                            <img alt="plan free" src="https://res.cloudinary.com/tanpham/image/upload/v1549523657/plan_free.png" />
                            <h3 className="title">Free</h3>
                            <hr />
                            <span className="pricing">$ Free</span>
                            <ul className="features-list">
                                <li>1 Offer Allowed</li>
                                <li>AJAX Cart NOT Supported</li>
                            </ul>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="plan-container">
                            <img alt="plan basic" src="https://res.cloudinary.com/tanpham/image/upload/v1549523657/plan_basic.png" />
                            <h3 className="title">Basic</h3>
                            <hr />
                            <span className="pricing">$ 9.99/month</span>
                            <ul className="features-list">
                                <li>25 Offers Allowed</li>
                                <li>AJAX Cart Supported</li>
                                <li>Geo Targeting Included</li>
                            </ul>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="plan-container">
                            <img alt="plan unlimited" src="https://res.cloudinary.com/tanpham/image/upload/v1549523657/plan_unlimited.png" />
                            <h3 className="title">Unlimited</h3>
                            <hr />
                            <span className="pricing">$ 29.99/month</span>
                            <ul className="features-list">
                                <li>Unlimited Offers Allowed</li>
                                <li>AJAX Cart Supported</li>
                                <li>Geo Targeting Included</li>
                            </ul>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="row detail-plan-container">
                    <div className="col-lg-12">Your Current Subcription Details</div>
                    <table style={{width: '100%', margin: '10px 15px' }}>
                        <thead>
                            <tr>
                                <th>Features</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Plan</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>Active Offers</td>
                                <td>0 of 1</td>
                            </tr>
                            <tr>
                                <td>Branding</td>
                                <td>"Powered By Core" displayed on offers</td>
                            </tr>
                            <tr>
                                <td>AJAX</td>
                                <td>NOT Supported</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}