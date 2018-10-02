import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {


render() {
    return (
        <div className="lp-wrapper">
        <div className="lp-text">
        <span className="lp"><i class="fas fa-search-location"></i> Search</span><br />
        <span className="lp"><i className="far fa-comments"></i> Connect</span><br />
        <span className="lp"><i class="fas fa-utensils"></i> Eat</span>
        </div>
        </div>
    )
}

}

export default LandingPage;