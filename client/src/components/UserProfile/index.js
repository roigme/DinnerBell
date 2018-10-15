import React, { Component } from "react";
import "./UserProfile.css";
import API from "../../utils/API";
import UserDashNav from "../UserDashNav/UserDashNav";
import MainProfilePage from './MainProfilePage';
import EditProfilePage from './EditProfilePage';
import { BrowserRouter as Router, Route } from "react-router-dom";

class UserProfile extends Component {
  state = {
    // IMPORTANT: This userID property is what the app hinges on when showing the profile to the user based on who is logged in...
    userID: "5bc20b1d6df3e713e064c96c",
    displayName: "",
    email: "",
    profile: [],
    favoriteFood: [],
    dinerProfile: [],
    hostProfile: []
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    API.getUserByID(this.state.userID)
      .then(res =>
        this.setState({
          profile: res.data,
          hostProfile: res.data.hostProfile,
          dinerProfile: res.data.dinerProfile,
          favoriteFood: res.data.favoriteFoods
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="lp-search-bg">
        <div className="overlay">
          <div className="container emp-profile">
            <UserDashNav />
            <Router>
              <div>
                <Route exact path="/profile"
                  render={(props) => <MainProfilePage {...props}
                    favoriteFood={this.state.favoriteFood}
                    profile={this.state.profile}
                    dinerProfile={this.state.dinerProfile}
                    hostProfile={this.state.hostProfile} />}
                />
                <Route exact path="/profile/editprofile"
                  render={EditProfilePage}
                />
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
