import React, { Component } from "react";
import "./LandingPage.css";
import LPSearch from '../LPSearch';
import API from '../../utils/API';

class LandingPage extends Component {

  state = {
    searchResults: [],
    maxGroup: '',
    foodType: ''

  }

  handleFormSubmit = () => {
    API.getHostbyFoodAndGroup(this.state.maxGroup, this.state.foodType)      
    .then(res => this.setState({
      searchResults: res.data,
    }))
    .catch(err => console.log(err));
  }

  handleInputchange = event => {
    const { name , value } = event.target;
    this.setState({
      [name]: value
    })
  }

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
        <div className="input-group">
          <input name="maxGroup" value={this.state.maxGroup} type="number" className="form-control mb-3" placeholder="Number of Guests" />
        </div>
        <div className="input-group">
          <input name="foodType" value={this.state.foodType} type="text" className="form-control mb-3" placeholder="Food Type" />
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block home-search-btn">
         Search
        </button>
      </div>
    );
  }
}

export default LandingPage;
