import React from 'react';
import './ButtonAppBar.css'

function ButtonAppBar() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white main-nav">
  <div className="icon-brand-wrapper">
  <img src={require('./images/iconfinder-256.png')} alt="dinner plate" className='plate-icon' />
  <a className="navbar-brand" href="#">Dinner Bell</a>
  </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
   <ul className="navbar-nav mr-auto">
    <li className="nav-item">
     <a className="nav-link" href="#">About</a>
    </li>
    <li className="nav-item">
     <a className="nav-link" href="#">Login</a>
    </li>
    <li className="nav-item">
     <a className="nav-link" href="#">Sign Up</a>
    </li>
    <li className="nav-item dropdown">
     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      <a className="dropdown-item" href="#">About</a>
      <a className="dropdown-item" href="#">Login</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Sign Up</a>
     </div>
    </li>
   </ul>
  </div>
 </nav>
  );
}

export default ButtonAppBar;
