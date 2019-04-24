import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Pollen from "./components/Pollen";
import Draggable from "./components/Draggable";

function Index() {
  return <div><h2>Home</h2></div>;
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
                <Link to="/draggable/">Animation</Link>
              </li>
              <li>
                <Link to="/pollen/">Pollen Stats</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/draggable/" exact component={Draggable} />
          <Route path="/pollen/" exact component={Pollen} />
        </div>
      </Router>
    );
  }
}


export default App;
