import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppProvider from './components/context';
import WelcomeScreen from './components/welcome_screen';
import AppScreen from './components/app_screen';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Router>
          <div className="app">
              <Route exact path="/" component={WelcomeScreen} />
              <Route path="/app" component={AppScreen} />
          </div>
        </Router>
      </AppProvider>
    );
  }
}

export default App;
