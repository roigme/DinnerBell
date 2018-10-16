import React from 'react';


const EditHostProfile = props => {
    return (
        <div className="col-sm-12 col-lg-12 mt-5">
            <div className="col-lg-12 col-sm-12 text-center text-primary mt-3">
                <h4>Host Profile</h4>
            </div>
            <div className="col-lg-12 col-sm-12 lp-search text-primary mt-5">
                <form class="text-center">
                    City you are hosting in
            <input className="form-control mb-3"
                        placeholder={props.hostProfile.city} />
                    State
            <input className="form-control mb-3"
                        placeholder={props.hostProfile.state} />
                    Maximum group size allowed
            <input className="form-control mb-3"
                        placeholder={props.hostProfile.maxGroup} />
                    What's cooking?
            <input className="form-control mb-3"
                        placeholder={props.hostProfile.foodType} />
                    About you and your food.
            <input className="form-control mb-3"
                        placeholder={props.hostProfile.about} />
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

export default EditHostProfile;