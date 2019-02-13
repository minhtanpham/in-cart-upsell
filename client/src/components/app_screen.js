import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from './navigation';
import ListOffer from './list_offers';
import PlanScreen from './plan_screen';
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
                        <Route exact path={`${match.url}/plan`} component={PlanScreen} />
                        <Route exact path={`${match.url}/preview`} component={OfferPreviewScreen} />
                        <Route exact path={`${match.url}/stats`} component={OtherStaffScreen} />
                        <Route exact path={`${match.url}/feedback`} component={FeedbackScreen} />
                    </React.Fragment>
                </Router>
        )
    }
}