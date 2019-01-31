import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppProvider from './components/context';
import TermAndConditions from './components/term_and_conditions';
import WelcomePopup from './components/welcome_popup';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Router>
          <div className="app">
            <div className="container">
              <div className="row">
                <div className="card mrt-50 mrb-50 pd-20 col-lg-12 text-center">
                  <h2 className="term-title">Terms and Conditions</h2>
                  <TermAndConditions />
                  <button className="btn btn-primary btn-large center" data-toggle="modal" data-target="#exampleModal">Accept and Continue</button>
                </div>
              </div>
            </div>


            <WelcomePopup />

          </div>
        </Router>
      </AppProvider>
    );
  }
}

export default App;
