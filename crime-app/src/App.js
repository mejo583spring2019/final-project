import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";

import About from "./components/About";
import LineGraph from "./components/LineGraph";
import ColumnChart from "./components/ColumnChart";
import Colophon from "./components/Colophon";

/** Class for my App Component */
class App extends Component {
  /** Renders links that display the crime information onto the page.
   * @return {any} JSX content
   */
  render() {
    return (
      <Router>
        <div className="navBG">
          <nav>
            <div>
              <img id="logo"
                src={require("./images/logo.png")}
                alt="Website Logo" />
            </div>
            <ul>
              <li>
                <Link id="categoryLink" to="/">About Project</Link>
              </li>
              <li>
                <Link id="categoryLink" to="/linegraph/">Crime Over Time</Link>
              </li>
              <li>
                <Link id="categoryLink" to="/columnchart">Crime By State</Link>
              </li>
              <li>
                <Link id="categoryLink" to="/colophon/">Colophon</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bar"></div>

        <div>
          <Route path="/" exact component={About} />
          <Route path="/columnchart" exact component={ColumnChart} />
          <Route path="/linegraph/" exact component={LineGraph} />
          <Route path="/colophon/" exact component={Colophon} />
        </div>
      </Router>
    );
  }
}

export default App;
