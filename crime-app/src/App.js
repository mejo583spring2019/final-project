import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";

import About from "./components/About";
import LineGraph from "./components/LineGraph";
import ColumnChart from "./components/ColumnChart";
import Callophone from "./components/Callophone";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="navBG">
          <nav>
            <div>
              <img id="logo" className="animated bounce" src={require("./images/logo.png")} />
            </div>
            <ul>
              <li>
                <Link to="/">About Project</Link>
              </li>
              <li>
                <Link to="/linegraph/">Crime Over Time</Link>
              </li>
              <li>
                <Link to="/columnchart">Crime By State</Link>
              </li>
              <li>
                <Link to="/callophone/">Callophone</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bar"></div>

        <div>
          <Route path="/" exact component={About} />
          <Route path="/columnchart" exact component={ColumnChart} />
          <Route path="/linegraph/" exact component={LineGraph} />
          <Route path="/callophone/" exact component={Callophone} />
        </div>
      </Router>
    );
  }
}

export default App;
