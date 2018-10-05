import React from 'react';
import { Link } from "react-router-dom";
import './ButtonAppBar.css'

function ButtonAppBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white main-nav">
      <div className="icon-brand-wrapper">
        <img src={require('./images/iconfinder-256.png')} alt="dinner plate" className='plate-icon' />
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ? "nav-link active text-white" : "nav-link text-white"
              }
            >
              Dinner Bell
      </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#aboutpage-top">About</a>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={
                window.location.pathname === "/login" ? "nav-link active" : "nav-link"
              }
            >
              Log In
      </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className={
                window.location.pathname === "/signup" ? "nav-link active" : "nav-link"
              }
            >
              Sign Up
      </Link>
          </li>
          <li className="nav-item dropdown">
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item">About</a>
              <a className="dropdown-item">Login</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item">Sign Up</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ButtonAppBar;
