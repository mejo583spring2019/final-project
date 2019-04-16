import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Map from "./components/Map";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/map">Crime By State</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/map" component={Map} />
          <Route path="/users/" component={Users} />
        </div>

        <script src="//d3js.org/d3.v3.min.js"></script>
        <script src="//d3js.org/topojson.v1.min.js"></script>
      </Router>
    );
  }
}

export default App;
