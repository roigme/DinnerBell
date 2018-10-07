import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LandingPage from './components/LandingPage/LandingPage.js';
import ButtonAppBar from './components/ButtonAppBar/ButtonAppBar.js';
import AboutPage from './components/AboutPage/AboutPage.js';
import LogInPage from './components/LogInPage/LoginPage.js';
import SignUpPage from './components/SignUpPage/SignUpPage.js';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
      <div className='main-element'>
      <div className='overlay'>
      <Router>
      <div>
      <ButtonAppBar />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/login' component={LogInPage} />
      <Route path='/signup' component={SignUpPage} />
      </div>
      </Router>
      </div>
      </div>
      <AboutPage />
      </div>
    );
  }
}

export default App;
