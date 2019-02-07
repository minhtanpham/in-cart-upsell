import React from 'react';
import { Link } from "react-router-dom";

import OfferPreview from './offer_preview';
import ToggleSwitch from './toggle_switch';

export default class OfferPreviewScreen extends React.Component {


    render() {
        const { match } = this.props;

        return (
            <React.Fragment>
                <div className="container card mrt-50">
                    <div className="row">
                        <div className="col-lg-12" style={{padding: '15px'}}>
                            <div className="row">
                                <div className="col-lg-5">
                                    <h1 className="page-title">Offer Preview</h1>
                                    <span className="page-description">save your changes to see the updated preview</span>
                                </div>
                                <div className="col-lg-7">
                                    <OfferPreview />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container card mrt-50">
                    <div className="row">
                        <div className="col-lg-12 pd-20">
                            <h1 className="page-title">Offer Setup</h1>
                            <div className="row">
                                <div className="col-lg-4">
                                    <ul className="preview-list-menu">
                                        <Link to={`${match.url}/create_offer`} >
                                            <li className="active">1. What To Offer</li>
                                        </Link>
                                        <Link to={`${match.url}/look_and_feel`} >
                                            <li>2. Offer Look &amp; Feel</li>
                                        </Link>
                                        <Link to={`${match.url}/when_display_offer`} >
                                            <li>3. When To Show Offer</li>
                                        </Link>
                                    </ul>
                                    <div className="row no-padding">
                                        <div className="col-lg-12 mrt-10">
                                            <button className="btn btn-primary mrr-10">Save Offer</button>
                                            <button className="btn btn-dark">Cancel</button>
                                        </div>
                                        <div className="col-lg-12 mrt-10">
                                            <span className="full-width block">Status: Enable</span>
                                            <ToggleSwitch />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="offer-create-container">
                                        <h1 className="label">Offer Title</h1><span className="sub-label"> (optional) - not shown to your customers</span>
                                        <input className="full-width mr-10-0 input-form" type="text" placeholder="Offer title" />
                                        <h1 className="label">Product(s) Offered</h1>
                                        <ul className="list-product-in-offer">
                                            <li>
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg" alt="tshirt" />
                                                <span className="product-title">Short Sleeve T Shirt</span>
                                                <span className="remove-btn">REMOVE</span>
                                            </li>
                                        </ul>
                                        <span className="sub-label">add a product to the offer (start typing the product name, then select from the list):</span>
                                        <input className="full-width mr-10-0 input-form" type="text" placeholder="Enter product name here" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}