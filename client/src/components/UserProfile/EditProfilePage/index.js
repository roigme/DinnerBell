import React from 'react';
import { Link } from 'react-router-dom';
import EditProfileTabs from './EditProfileTabs'

const EditProfilePage = props => {
    return (
        <div className="navbar-wrapper">
            <div>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">User Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Host Profile</a>
                    </li>
                    <li class="nav-item">
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
            <EditProfileTabs />
        </div>
    )
}

export default EditProfilePage;