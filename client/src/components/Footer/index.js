import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="copyrights row">
        <footer className="container-fluid text-center foot">
          <div className="col-sm-12">
            <img
              src={require("./images/iconfinder-256.png")}
              width="65"
              height="65"
            />
            <p className="white-txt">
              Dinner Bell © 2018 Patrick Lehmann, Matt Roig &amp; Matthew Timko.
            </p>
            <p className="white-txt">
              <a href="https://github.com/patlehmann1/project_three" target="_blank">
                <i className="fab fa-github" /> View Our Code On GitHub
              </a>
            </p>
          </div>
        </footer>
      </div> 
    );
  }
}
export default Footer;
