import React from 'react';


const EditUserProfile = props => {
    return (
        <div className="col-sm-12 col-lg-12">
            <div className="col-lg-12 col-sm-12 text-left text-primary mt-3">
                <h4>User Profile</h4>
            </div>
            <div className="col-lg-12 col-sm-12 lp-search text-primary mt-5">
                <form class="text-left">
                    User Name
            <input name="displayName" className="form-control mb-3"
                        placeholder={props.profile.displayName} />
                    First Name
            <input className="form-control mb-3"
                        placeholder={props.profile.firstName} />
                    Last Name
            <input className="form-control mb-3"
                        placeholder={props.profile.lastName} />
                    City
            <input className="form-control mb-3"
                        placeholder={props.profile.city} />
                    State
            <input className="form-control mb-3"
                        placeholder={props.profile.state} />
                    Group Size (yourself included)
            <input className="form-control mb-3"
                        placeholder={props.dinerProfile.groupSize} />
                    About you and your party
            <input className="form-control mb-3"
                        placeholder={props.dinerProfile.about} />
                    <button
                        type="button"
                        className="btn btn-primary home-search-btn">
                        Submit Changes
                </button>
                </form>
            </div>
            <hr />
        </div>
    );
};

export default EditUserProfile;