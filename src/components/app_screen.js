import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from './navigation';
import ListOffer from './list_offers';
import SettingScreen from './setting_screen';

export default class AppScreen extends React.Component {
    render() {
        return (
                <Router>
                    <React.Fragment>
                        <Navigation />
                        {/* <Route exact path="/app" component={ListOffer} />
                        <Route exact path="/setting" component={SettingScreen} /> */}
                        <SettingScreen />
                    </React.Fragment>
                </Router>
        )
    }
}