import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import LandingPage from './components/LandingPage/LandingPage.js';
import ButtonAppBar from './components/ButtonAppBar/ButtonAppBar.js';
import AboutPage from './components/AboutPage/AboutPage.js';
import Login from './components/auth/Login.js';
import SignUpPage from './components/SignUpPage/SignUpPage.js';
function onAuthRequired({history}){
  history.push('/login')
}
class App extends Component {
  render() {
    return (

      <div className='wrapper'>
        <div className='main-element'>
          <div className='overlay'>
            <Router>
              <Security issuer='https://dev-771854.oktapreview.com/oauth2/default'
                client_id='0oagjm1yslOY5M4S50h7'
                redirect_uri={window.location.origin + '/implicit/callback'}
                onAuthRequired={onAuthRequired} >
                <div>
                  <ButtonAppBar />
                  <Route exact path='/' component={LandingPage} />
                  <Route path='/login' render={() => <Login baseUrl='https://dev-771854.oktapreview.com' />} />
                  <Route path='/implicit/callback' component={ImplicitCallback} />
                  <Route path='/signup' component={SignUpPage} />
                </div>
              </Security>
            </Router>
          </div>
        </div>
        <AboutPage />
      </div>
    );
  }
}

export default App;
