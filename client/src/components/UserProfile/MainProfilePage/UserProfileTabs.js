import React from "react";

const UserProfileTabs = props => {
  return (
    <div className="row">
      <div className="tab-content profile-tab row" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <label>Username</label>
              <p>
                {props.profile.displayName ? props.profile.displayName : "N/A"}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <label>Name</label>
            </div>
          </div>
            {props.profile.firstName ? (
              <p>
                {props.profile.firstName} {props.profile.lastName}
              </p>
            ) : (
              <p>N/A</p>
            )}
          
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <label>Location</label>
              {props.profile.city ? (
                <p>
                  {props.profile.city}, {props.profile.state}
                </p>
              ) : (
                <p>N/A</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <label>Party Size (Including You!)</label>
              {props.dinerProfile.groupSize ? (
                <p>{props.dinerProfile.groupSize}</p>
              ) : (
                <p>N/A</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <label>About You and Your Party</label>
              <br />
              {props.dinerProfile.about ? (
                <p>{props.dinerProfile.about}</p>
              ) : (
                <p>N/A</p>
              )}
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
            <div className="col-md-6 col-sm-12">
              <label>Currently Hosting?</label>
            </div>
            <div className="col-md-6 col-sm-12">
              {!props.hostProfile ? (
                <p>N/A</p>
              ) : (
                <p>{props.hostProfile.isHosting ? "Yes" : "No"}</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <label>Max Party Size</label>
            </div>
            <div className="col-md-6 col-sm-12">
              {!props.hostProfile ? (
                <p>N/A</p>
              ) : (
                <p>{props.hostProfile.maxGroup}</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <label>Location</label>
            </div>
            <div className="col-md-6 col-sm-12">
              {!props.hostProfile ? (
                <p>N/A</p>
              ) : (
                <p>
                  {props.hostProfile.city}, {props.hostProfile.state}
                </p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <label>Food Type</label>
              <br />
              {!props.hostProfile ? (
                <p>N/A</p>
              ) : (
                <p>{props.hostProfile.foodType}</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <label>About</label>
              <br />
              {!props.hostProfile ? (
                <p>N/A</p>
              ) : (
                <p>{props.hostProfile.about}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileTabs;
