import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import SmashCompare from "./components/SmashCompare"
import AllCharacters from "./components/AllCharacters"

function Index() {
  return (
    <div className="App">
      <h1>Super Smash Bros. 4 Roster Comparison</h1>
      <p>
        Use this app to look through data for various Smash 4 characters.
        All information is gathered from <a href="http://kuroganehammer.com">
          http://kuroganehammer.com</a> using its API.
    </p>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav id="main-nav">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/compare">Character Stats</Link>
            <Link className="link" to="/allchars">Jump Heights</Link>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/compare" exact component={SmashCompare} />
          <Route path="/allchars" exact component={AllCharacters} />
        </div>
      </Router>
    );
  }
}

export default App;
