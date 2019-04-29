import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Genre from "./components/Chart";
import top20 from './components/top20';
import Table from './components/Table';


function Index() {
  return <div><h2>Home</h2></div>;
}

class App extends Component {
  render() {
    return (
      <Router>
        <div id={this.el}>
        </div>
        <h2>Rolling Stones Data</h2>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/top20/" id="top20">Top 5 Albums of 2017</Link>
              </li>
              <li>
                <Link to="/data/" id="data">Top 500</Link>
              </li>
              <li>
                <Link to="/genre/" id="genre">Genres</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Index} />
          <Route path="/genre/" exact component={Genre} />
          <Route path="/top20/" exact component={top20} />
          <Route path="/data/" exact component={Table} />
        </div>
      </Router>
    );
  }
}


export default App;
