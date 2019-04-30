import React from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import Charts from "./components/Charts";
import Colophon from "./components/Colophon";

import "./App.css";

/** App presents the navbar, body and footer
 * @return {html}
 */
function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <ul className="flex navbar-items">
            <li>
              <NavLink
                className="navbar-item"
                activeClassName="active"
                exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-item"
                activeClassName="active"
                exact to="/colophon/">
                Colophon
              </NavLink>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Charts} />
        <Route path="/colophon/" exact component={Colophon} />
        <footer className="footer">
          MEJO 583 Final Project<br />
          <span className="footer-highlight">Amy Townsend</span>
        </footer>
      </div>
    </Router>
  );
}

export default App;
