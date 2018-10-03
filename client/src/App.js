import React, { Component } from "react";
import "./App.css";
import LandingPage from './components/LandingPage';
import ButtonAppBar from './components/ButtonAppBar';
import AboutPage from './components/AboutPage';
import TestPage from './components/TestPage';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <div className="main-element">
      <div className="overlay">
      <ButtonAppBar />
      <LandingPage />
      </div>
      </div>
      <AboutPage />
      <TestPage />
      </div>
    );
  }
}

export default App;
