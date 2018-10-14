import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="aboutme-wrapper container-fluid" id="aboutpage-top">
            <div className="text-center col-lg-12 col-sm-12 about-header-div">
                <span className="aboutme-header text-center"> How It Works </span>
            </div>
            <div className="row about-cards">
                <div className="card about-me-box col-lg-4 col-sm-12">
                    <div className="card-img-wrapper">
                        <span className="card-header-text"><i className="fas fa-search-location"></i> Search</span>
                    </div>
                    <hr />
                    <div className="card-body">
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="card about-me-box col-lg-4 col-sm-12">
                    <div className="card-img-wrapper ">
                        <span className="card-header-text"><i className="far fa-comments"></i> Connect</span>
                    </div>
                    <hr />
                    <div className="card-body">
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="card about-me-box col-lg-4 col-sm-12">
                    <div className="card-img-wrapper">
                        <span className="card-header-text"><i className="fas fa-utensils"></i> Eat</span>
                    </div>
                    <hr />
                    <div className="card-body">
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
            <div className="row text-center about-me-summary">
                <div className="about-me-summary-text col-sm-12 col-lg-12">
                    Some text that ties it all together and talks about how awesome we are.
                </div>
            </div>
        </div>
    );
};

export default AboutPage;