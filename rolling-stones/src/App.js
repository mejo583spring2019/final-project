import React, { Component } from 'react';
import { HashRouter, Route, NavLink } from "react-router-dom";
import './App.css';
import Genre from "./components/Chart";
import Table from './components/Table';


function Index() {


  return (
    <div>
      <h1>let's rock n' roll</h1>
      <div className="mainContent"></div>
    </div>

  )

};

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="header">
          <ul className="navigation">
            <li className="navlink">
              <NavLink to="/">home </NavLink>
            </li>
            <li className="navlink">
              <NavLink to="/data/" id="data">the updated list</NavLink>
            </li>
            <li className="navlink">
              <NavLink to="/genre/" id="genre">genre breakdown</NavLink>
            </li>
          </ul>
        </div>
        <div className="content">

          <Route path="/" exact component={Index} />
          <Route path="/genre/" className="main-content" component={Genre} />
          <Route path="/data/" className="main-content" component={Table} />
        </div>



      </HashRouter>




    );
  }
}


export default App;
