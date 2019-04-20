import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";

import LineGraph from "./components/LineGraph";
import ColumnChart from "./components/ColumnChart";

function Index() {
  return <h2>Home</h2>;
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="fixed">
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">About Project</Link>
              </li>
              <li>
                <Link to="/columnchart">Crime By State</Link>
              </li>
              <li>
                <Link to="/linegraph/">Crime Over Time</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <Route path="/" exact component={Index} />
          <Route path="/columnchart" exact component={ColumnChart} />
          <Route path="/linegraph/" exact component={LineGraph} />
        </div>
      </Router>
    );
  }
}

export default App;
