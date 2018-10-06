import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LandingPage from './components/LandingPage';
import ButtonAppBar from './components/ButtonAppBar';
import AboutPage from './components/AboutPage';
import LogInPage from './components/LogInPage';
import SignUpPage from './components/SignUpPage';
import Footer from './components/Footer';

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
      <div>
      <Footer />
      </div>
      </div>
    );
  }
}

export default App;
