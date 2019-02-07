import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from './navigation';
import ListOffer from './list_offers';
import SettingScreen from './setting_screen';
import OfferPreviewScreen from './offer_preview_screen';

export default class AppScreen extends React.Component {

    render() {
        const { match } = this.props;
        return (
                <Router>
                    <React.Fragment>
                        <Navigation match={match} />
                        <Route exact path={`${match.url}/`} component={ListOffer} />
                        <Route exact path={`${match.url}/setting`} component={SettingScreen} />
                        <Route exact path={`${match.url}/preview`} component={OfferPreviewScreen} />
                    </React.Fragment>
                </Router>
        )
    }
}