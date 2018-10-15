import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";
import LandingPage from "./components/LandingPage/LandingPage.js";
import Login from "./components/auth/Login.js";
import Footer from "./components/Footer";
import UserProfile from './components/UserProfile';
import UserDashNav from "./components/UserDashNav/UserDashNav";

function onAuthRequired({ history }) {
  history.push("/login");
}
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Router>
          <Security
            issuer="https://dev-771854.oktapreview.com/oauth2/default"
            client_id="0oagjm1yslOY5M4S50h7"
            redirect_uri={window.location.origin + "/implicit/callback"}
            onAuthRequired={onAuthRequired}
          >
            <div>
              <Route exact path="/" component={LandingPage} />
              <Route path="/profile" component={UserProfile} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-771854.oktapreview.com" />
                )}
              />
              <Route
                path="/implicit/callback"
                component={ImplicitCallback}
              />
            </div>
          </Security>
        </Router>
      </div >
    );
  }
}

export default App;
