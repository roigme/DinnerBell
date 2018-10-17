import React from 'react';
import { Link } from 'react-router-dom';
import EditUserProfile from "./EditUserProfile.js";
import EditHostProfile from "./EditHostProfile.js";


const EditProfilePage = props => {
    return (
        <div className="navbar-wrapper row">
            <div className="col-lg-12 col-sm-12">
                <ul className="nav justify-content-left">
                    <li className="nav-item">
                        <Link
                            to="/profile"
                            className="nav-link btn btn-primary text-white"
                        >
                            Return To Profile
                        </Link>
                    </li>
                </ul>
                <hr />
            </div>
                <EditUserProfile
                profile={props.profile}
                dinerProfile={props.dinerProfile}
                hostProfile={props.hostProfile} />
                <EditHostProfile
                hostProfile={props.hostProfile} />
        </div>
    )
};

export default EditProfilePage;