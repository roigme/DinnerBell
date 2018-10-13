import React, { Component } from "react";
import "./UserProfile.css";
import API from '../../utils/API';
import UserProfileTabs from './UserProfileTabs';


class UserProfile extends Component {

  state = {
    // IMPORTANT: This userID property is what the app hinges on when showing the profile to the user based on who is logged in...
    userID: '5bc101d35b968f445872fd2a',
    displayName: '',
    email: '',
    profile: [],
    favoriteFood: [],
    dinerProfile: [],
    hostProfile: []
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
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                  alt=""
                />
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
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
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <ul>
                  <h3>Favorite Foods</h3>
                  {this.state.favoriteFood.map(food => {
                   return <li key={Math.floor(Math.random() * 10000) + 1}>{food}</li>
                  })}
                </ul>
              </div>
            </div>
                <UserProfileTabs
                profile={this.state.profile}
                dinerProfile={this.state.dinerProfile}
                hostProfile={this.state.hostProfile}
                />
          </div>
        </form>
      </div>
    );
  }
}
export default UserProfile;
