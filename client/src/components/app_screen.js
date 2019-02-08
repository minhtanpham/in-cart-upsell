import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from './navigation';
import ListOffer from './list_offers';
import SettingScreen from './setting_screen';
import OfferPreviewScreen from './offer_preview_screen';
import OtherStaffScreen from './other_staff_screen';
import FeedbackScreen from './feedback_screen';

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
                        <Route exact path={`${match.url}/staff`} component={OtherStaffScreen} />
                        <Route exact path={`${match.url}/feedback`} component={FeedbackScreen} />
                    </React.Fragment>
                </Router>
        )
    }
}