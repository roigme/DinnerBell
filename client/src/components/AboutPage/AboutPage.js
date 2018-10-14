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
                        <p className="card-text">Looking to enjoy a home cooked meal with new friends? Use our network of home cooks to find a dinner party near you. Tell us how many are in your group and what kinds of foods you like and we will pair you with your perfect host. Looking to find guests to try that new recipe you’ve been working on? As a host on Dinner Bell you can find diners in your town looking to eat a home cooked meal!</p>
                    </div>
                </div>
                <div className="card about-me-box col-lg-4 col-sm-12">
                    <div className="card-img-wrapper ">
                        <span className="card-header-text"><i className="far fa-comments"></i> Connect</span>
                    </div>
                    <hr />
                    <div className="card-body">
                        <p className="card-text">Build your profile and explore other diners and hosts in your area. Once you find the perfect host send them a message to connect. Discuss what foods you like to eat and make food friends! Decide a date and time and enjoy your dinner party. Leave reviews on your new friends profiles letting everyone know what a good cook they are!</p>
                    </div>
                </div>
                <div className="card about-me-box col-lg-4 col-sm-12">
                    <div className="card-img-wrapper">
                        <span className="card-header-text"><i className="fas fa-utensils"></i> Eat</span>
                    </div>
                    <hr />
                    <div className="card-body">
                        <p className="card-text">When you use Dinner Bell you can meet new friends to share a meal with everyday. We believe sharing food is the best way to get know someone and want to help people make connections through food. So go ahead and explore diners and hosts in your area -- The perfect home cooked meal is waiting for you! </p>
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