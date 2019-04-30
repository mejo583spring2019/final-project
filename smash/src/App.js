import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import SmashCompare from "./components/SmashCompare";
import AllCharacters from "./components/AllCharacters";

/** Renders home page **/
function Index() {
  return (
    <div className="App">
      <h1>Super Smash Bros. 4 Roster Comparison</h1>
      <p>
        Use this app to look through data for various Smash 4 characters.
      </p>
      <p>
        This site was made using React as a framework.
        Chart.js was used for the jump height graph.
        Specifically, react chartjs 2 was used, a plug-in
        based off of Chart.js. All images and data used are
        from <a href="http://kuroganehammer.com">
          http://kuroganehammer.com</a>. Information
    was gathered from kuroganehammer using it's API,
        developed by <a href="https://github.com/Frannsoft">
          Jordan Polaniec</a> of Frannsoft.
    </p>
    </div>
  );
}

/** Homepage class */
class App extends Component {

  /** renders homepage */
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
