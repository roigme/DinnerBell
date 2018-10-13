import React, { Component } from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserProfile from "../UserProfile";



const UserDashNav = () => {
    return (
      <Router>
        <Route
          render={({ location, history }) => (
            <React.Fragment>
              <SideNav
                onSelect={selected => {
                  const to = "/" + selected;
                  if (location.pathname !== to) {
                    history.push(to);
                  }
                }}
              >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="profile">
                  <NavItem eventKey="profile">
                    <NavIcon>
                      <i
                        className="fas fa-user-circle"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Profile</NavText>
                  </NavItem>
                  <NavItem eventKey="search">
                    <NavIcon>
                      <i
                        className="fas fa-search"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Search</NavText>
                  </NavItem>
                  <NavItem eventKey="messages">
                    <NavIcon>
                      <i
                        className="far fa-comments"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Messages</NavText>
                  </NavItem>
                  <NavItem eventKey="log-out">
                    <NavIcon>
                      <i
                        className="fas fa-sign-out-alt"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Log Out</NavText>
                  </NavItem>
                </SideNav.Nav>
              </SideNav>
              <main>
                
                {/* <Route path="/profile" component={props => <UserProfile />} /> */}
               
              </main>
            </React.Fragment>
          )}
        />
      </Router>
    );
  };

export default UserDashNav;
