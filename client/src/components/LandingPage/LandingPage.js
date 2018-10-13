import React, { Component } from "react";
import "./LandingPage.css";
import LPSearch from '../LPSearch';
import API from '../../utils/API';
import AboutPage from '../AboutPage/AboutPage.js';
import Footer from '../Footer';
import ButtonAppBar from "../ButtonAppBar/ButtonAppBar.js";

class LandingPage extends Component {

  state = {
    searchResults: [],
    maxGroup: '',
    foodType: ''

  }

  handleFormSubmit = () => {
    API.getHostByFoodAndGroup(this.state.foodType, this.state.maxGroup)      
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name , value } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="lp-wrapper">
      <ButtonAppBar />
        <div className="lp-text text-center">
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
        <LPSearch
          maxGroup={this.state.maxGroup}
          foodType={this.state.foodType}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit} />
        <AboutPage />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
