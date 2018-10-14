import React, { Component } from "react";
import "./LandingPage.css";
import LPSearch from './LPSearch';
import API from '../../utils/API';
import Footer from '../Footer';
import ButtonAppBar from "../ButtonAppBar/ButtonAppBar.js";
import AboutPage from '../AboutPage/AboutPage';

class LandingPage extends Component {

  state = {
    searchResults: [],
    maxGroup: '',
    foodType: ''

  }

  handleFormSubmit = () => {
    API.getHostByFoodAndGroup(this.state.foodType, this.state.maxGroup)
      .then(res =>
        this.setState({
          searchResults: res.data
        }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="lp-wrapper">
        <div className="lp-search-bg">
          <div className="overlay">
            <ButtonAppBar />
            <div className="container">
              <LPSearch
                maxGroup={this.state.maxGroup}
                foodType={this.state.foodType}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                searchResults={this.state.searchResults} />
            </div>
          </div>
        </div>
        <AboutPage />
      </div>
    );
  }
}

export default LandingPage;
