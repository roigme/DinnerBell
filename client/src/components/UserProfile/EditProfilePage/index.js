import React from 'react';
import { Link } from 'react-router-dom';
import EditProfileTabs from './EditProfileTabs'

const EditProfilePage = props => {
    return (
        <div className="navbar-wrapper">
            <div>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link
                            to="/profile"
                            className="nav-link btn btn-primary text-white"
                        >
                            Return To Profile
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/profile"
                            className="nav-link btn btn-primary text-white"
                        >
                            Return To Profile
                        </Link>
                    </li>
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
            <EditProfileTabs />
        </div>
    )
}

export default EditProfilePage;