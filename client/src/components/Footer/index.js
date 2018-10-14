import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="copyrights">
      <footer className="row text-center foot">
        <div className="col-sm-12 col-lg-12">
          <img
            src={require("./images/iconfinder-256.png")}
            width="50"
            height="50"
          />
          <p className="white-txt">
            Dinner Bell © 2018 Patrick Lehmann, Matt Roig &amp; Matthew Timko.
            </p>
          <p className="white-txt">
            <a href="https://github.com/roigme/dinnerbell" target="_blank">
              <i className="fab fa-github" /> View Our Code On GitHub
              </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
