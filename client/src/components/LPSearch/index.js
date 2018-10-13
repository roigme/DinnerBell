import React from 'react';
 

const LPSearch = props => {
    return (
    <div>
    <div className="input-group">
        <input name="maxGroup" value={props.maxGroup} type="number" className="form-control mb-3" placeholder="Number of Guests" />
      </div>
      <div className="input-group">
        <input name="foodType" value={props.foodType} type="text" className="form-control mb-3" placeholder="Food Type" />
      </div>
      <button type="button" class="btn btn-primary btn-lg btn-block home-search-btn">
       Search
      </button>
    </div>
    )
}

export default LPSearch;