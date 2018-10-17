import React from 'react';
import { Link } from 'react-router-dom';
import UserProfileTabs from './UserProfileTabs';

const MainProfilePage = props => {
    return (
        <div className="row">
            <div className="col-md-4">
                <div className="profile-img">
                    <img className="border border-dark" src="https://avatars0.githubusercontent.com/u/35785843?s=400&v=4" alt="" />
                    <br />
                    <br />
                    
                    <button className="btn btn-outline-primary btn-sm">Upload Photo</button>
                    <br />
                </div>
                <br />
                <div className="profile-work">
                    <ul>
                        <h4>Favorite Foods</h4>
                        {props.favoriteFood.map(food => {
                            return (
                                <li key={Math.floor(Math.random() * 10000) + 1}>
                                    {food}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className="col-md-6 col-sm-12">
                <div className="profile-head">
                    <h5>{props.profile.displayName}</h5>
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
                            <a className="nav-link"
                                id="profile-tab" data-toggle="tab"
                                href="#profile" role="tab"
                                aria-controls="profile" aria-selected="false">
                                Host Profile
                            </a>
                        </li>
                    </ul>
                    <UserProfileTabs
                        profile={props.profile}
                        dinerProfile={props.dinerProfile}
                        hostProfile={props.hostProfile}
                    />
                </div>
            </div>
            <div className="col-md-2">
                <Link
                    to="/profile/editprofile"
                    className={
                        window.location.pathname === "/profile/editprofile" ? "nav-link active btn btn-primary text-white" : "nav-link btn btn-primary text-white"
                    }>
                    Edit Profile
                </Link>
            </div>
        </div>
    )
}

export default MainProfilePage;