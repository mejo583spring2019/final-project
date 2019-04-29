import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import SmashCompare from "./components/SmashCompare"
import AllCharacters from "./components/AllCharacters"

function Index() {
  return (
    <div className="App">
      Smash Bros
    </div>
  );
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
                <Link to="/compare">Smash Compare</Link>
              </li>
              <li>
                <Link to="/allchars">All Characters</Link>
              </li>
            </ul>
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
