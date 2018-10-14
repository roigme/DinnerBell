import React, { Component } from "react";
import "./UserProfile.css";
import API from '../../utils/API';
import UserProfileTabs from './UserProfileTabs';
import UserDashNav from "../UserDashNav/UserDashNav";


class UserProfile extends Component {

  state = {
    // IMPORTANT: This userID property is what the app hinges on when showing the profile to the user based on who is logged in...
    userID: '5bc20b1d6df3e713e064c96c',
    displayName: '',
    email: '',
    profile: [],
    favoriteFood: [],
    dinerProfile: [],
    hostProfile: [],
  }

  componentDidMount() {
    this.loadUser();
  };

  loadUser = () => {
    API.getUserByID(this.state.userID)
      .then(res => this.setState({
        profile: res.data,
        hostProfile: res.data.hostProfile,
        dinerProfile: res.data.dinerProfile,
        favoriteFood: res.data.favoriteFoods
      }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="lp-search-bg">
      <div className="overlay">   
      <div className="container emp-profile">
      <UserDashNav />
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src="https://via.placeholder.com/350x250"
                  alt=""
                />
                <div className="file text-white m-auto">
                  Click here to change photo
                  <input type="file" name="file" />
                </div>
                <button className="btn btn-primary">Upload</button>
              </div>
              <div className="profile-work">
                <ul>
                  <h3>Favorite Foods</h3>
                  {this.state.favoriteFood.map(food => {
                   return <li key={Math.floor(Math.random() * 10000) + 1}>{food}</li>
                  })}
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="profile-head">
                <h5>{this.state.profile.displayName}</h5>
                <h6>Dinner Bell Member</h6>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Diner Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Host Profile
                    </a>
                  </li>
                </ul>
                <UserProfileTabs
                profile={this.state.profile}
                dinerProfile={this.state.dinerProfile}
                hostProfile={this.state.hostProfile}
                />
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>
      </div>
      </div>
      </div>
    );
  };
};

export default UserProfile;
