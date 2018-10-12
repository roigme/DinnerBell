import React, { Component } from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "./UserProfile.css";

class UserProfile extends Component {
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
                <h5>Kshiti Ghelani</h5>
                <h6>Dinner Bell Member</h6>
                <p className="proile-rating">
                  RANKINGS : <span>8/10</span>
                </p>
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
                  <li>French Fries</li>
                  <li>Pizza</li>
                  <li>Burritos</li>
                  <li>Tacos</li>
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
                      <p>Kshiti123</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Kshiti Ghelani</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Location</label>
                    </div>
                    <div className="col-md-6">
                      <p>Richmond, Virginia</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Party Size (Including You!)</label>
                    </div>
                    <div className="col-md-6">
                      <p>5</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label>Bio</label>
                      <br />
                      <p>Tell us about yourself!</p>
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
                      <p>Yes</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Max Party Size</label>
                    </div>
                    <div className="col-md-6">
                      <p>10</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Days Available</label>
                    </div>
                    <div className="col-md-6">
                      <p>Fri-Sun</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Location</label>
                    </div>
                    <div className="col-md-6">
                      <p>Richmond, VA</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label>Menu</label>
                      <br />
                      <p>What do you like to cook?</p>
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
