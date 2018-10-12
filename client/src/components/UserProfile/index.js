import React, { Component } from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "./UserProfile.css";
import API from '../../utils/API'

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
            <div className="col-md-">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Username</label>
                    </div>
                    <div className="col-md-6">
                      <p>{this.state.profile.displayName ? this.state.profile.displayName : "N/A" }</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      {this.state.profile.firstName ? (
                        <p>{this.state.profile.firstName}  {this.state.profile.lastName}</p>)
                        : <p>N/A</p>}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Location</label>
                    </div>
                    <div className="col-md-6">
                    {this.state.profile.city ? (
                        <p>{this.state.profile.city}, {this.state.profile.state}</p>)
                        : <p>N/A</p>}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Party Size (Including You!)</label>
                    </div>
                    <div className="col-md-6">
                    {this.state.dinerProfile.groupSize ? (
                        <p>{this.state.dinerProfile.groupSize}</p>)
                        : <p>N/A</p>}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label>About You and Your Party</label>
                      <br />
                      {this.state.dinerProfile.about ? (
                        <p>{this.state.dinerProfile.about}</p>)
                        : <p>N/A</p>}
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Currently Hosting?</label>
                    </div>
                    <div className="col-md-6">
                      {!this.state.hostProfile ? <p>N/A</p> : (
                        <p>{this.state.hostProfile.isHosting ? "Yes" : "No"}</p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Max Party Size</label>
                    </div>
                    <div className="col-md-6">
                      {!this.state.hostProfile ? <p>N/A</p> : (
                        <p>{this.state.hostProfile.maxGroup}</p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Location</label>
                    </div>
                    <div className="col-md-6">
                      {!this.state.hostProfile ? <p>N/A</p> : (
                        <p>{this.state.hostProfile.city}, {this.state.hostProfile.state}</p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label>Food Type</label>
                      <br />
                      {!this.state.hostProfile ? <p>N/A</p> : (
                        <p>{this.state.hostProfile.foodType}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default UserProfile;
