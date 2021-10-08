import React from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap"
import Apartments from "./Apartment";

const App = ({
  loggedIn,
  currentUser,
  newUserRoute,
  signInRoute,
  signOutRoute,
}) => {
  return (
    <Router>
      <h1>This sweet</h1>
      <Nav>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/apartments">Apartments</NavLink>
        </NavItem>
      </Nav>
      <Switch>

        <Route path="/apartments" component={Apartments} />
      </Switch>
    </Router>
  );
};

export default App;
