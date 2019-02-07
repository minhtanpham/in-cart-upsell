import React from 'react';

import OfferPreview from './offer_preview';
import ToggleSwitch from './toggle_switch';
import CreateOffer from './create_offer';
import LookAndFeel from './look_and_feel';

export default class OfferPreviewScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 'look'
        }
    }

    changePage(page) {
        this.setState({ page })
    }

    renderContainerPage(page) {
        switch (page) {
            case 'create':
                return <CreateOffer />
            case 'look':
                return <LookAndFeel />
            case 'when':
                return <LookAndFeel />
            default:
                return <CreateOffer />
        }
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
                        <div className="col-lg-12 pd-20">
                            <h1 className="page-title">Offer Setup</h1>
                            <div className="row">
                                <div className="col-lg-4">
                                    <ul className="preview-list-menu">
                                        <li onClick={() => this.changePage('create')} className={(this.state.page === 'create') ? 'active' : ''} >1. What To Offer</li>
                                        <li onClick={() => this.changePage('look')} className={(this.state.page === 'look') ? 'active' : ''} >2. Offer Look &amp; Feel</li>
                                        <li onClick={() => this.changePage('show')} className={(this.state.page === 'show') ? 'active' : ''} >3. When To Show Offer</li>
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
                                    { this.renderContainerPage(this.state.page) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}