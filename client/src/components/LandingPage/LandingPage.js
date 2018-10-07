import React, { Component } from "react";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="lp-wrapper">
        <div className="lp-text">
          <span className="lp">
            <i class="fas fa-search-location" /> Search
          </span>
          <br />
          <span className="lp">
            <i className="far fa-comments" /> Connect
          </span>
          <br />
          <span className="lp">
            <i class="fas fa-utensils" /> Eat
          </span>
        </div>
        <div className="home-search">
          <select className="custom-select custom-select-lg mb-3">
          <i className="fas fa-users"></i>

            <option selected>Party Size?</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
            <option value="3">5</option>
            <option value="3">6</option>
            <option value="3">7</option>
            <option value="3">8</option>
            <option value="3">9</option>
            <option value="3">10</option>
            <option value="3">11</option>
            <option value="3">12</option>
          </select>

          <select className="custom-select custom-select-lg mb-3">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block home-search-btn">
         Search
        </button>
      </div>
    );
  }
}

export default LandingPage;
