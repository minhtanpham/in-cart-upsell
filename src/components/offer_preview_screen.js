import React from 'react';
import { Link } from "react-router-dom";

import OfferPreview from './offer_preview';

export default class OfferPreviewScreen extends React.Component {

    goToPage() {

    }

    render() {
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
                        <div className="col-lg-12">
                            <h1 className="page-title">Offer Setup</h1>
                            <div className="row">
                                <div className="col-lg-4">
                                    <ul className="preview-list-menu">
                                        <Link to={`/app`} onClick={() => this.goToPage('/app')}>
                                            <li>1. What To Offer</li>
                                        </Link>
                                        <li>2. Offer Look &amp; Feel</li>
                                        <li>3. When To Show Offer</li>
                                    </ul>
                                </div>
                                <div className="col-lg-8"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}