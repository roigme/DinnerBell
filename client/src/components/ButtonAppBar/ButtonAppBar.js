import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { withAuth } from '@okta/okta-react';
import './ButtonAppBar.css'

export default withAuth(class ButtonAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  async login() {
    this.props.auth.login('/');
  }

  async logout() {
    this.props.auth.logout('/login');
  }
  render() {
    if (this.state.authenticated === null) return null;

    const logger = this.state.authenticated ?

    
    <Link onClick={this.logout}
    to="/login"
    className={
      window.location.pathname === "/login" ? "nav-link active" : "nav-link"
    }
  >
    Log Out
</Link>:    <Link
    to="/login"
    className={
      window.location.pathname === "/login" ? "nav-link active" : "nav-link"
    }
  >
    Log In
</Link>

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-white main-nav">
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
              {logger}
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

});