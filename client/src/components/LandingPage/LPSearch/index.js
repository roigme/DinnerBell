import React from 'react';
import './LPSearch.css';
import LPSearchResults from '../LPSearchResults';


const LPSearch = props => {
  return (
    <div className="row lp-search-row">
      <div className="col-lg-6 col-sm-12 lp-search">
        <h1 className="lp-headline text-center text-white">SEARCH. CONNECT. EAT.</h1>
        <input
          name="maxGroup" onChange={props.handleInputChange}
          type="number" className="form-control mb-3"
          placeholder="Your Party Size"
        />
        <input
          name="foodType" value={props.foodType}
          onChange={props.handleInputChange} type="text"
          className="form-control mb-3" placeholder="Food Type"
        />
        <button
          type="button" onClick={props.handleFormSubmit}
          class="btn btn-primary btn-lg btn-block home-search-btn">
          Search
      </button>
      </div>
      <div className="col-lg-6 col-sm-12 bg-white search-results">
        <LPSearchResults
          searchResults={props.searchResults} />
          Please <a href="/login"> log in </a> to connect with these hosts
      </div>
    </div>
  )
}

export default LPSearch;