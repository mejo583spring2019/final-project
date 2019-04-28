import React, { Component } from 'react';
import Jumbotrons from "./components/layout/jumbotron";
import Nav from "./components/layout/navigation";
import Cards from "./components/elements/card";

import "./app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
      bubbleData: {},
      barData: {}
 

    }
  }
 
  /**Renders the application */
  render() {
    return (
      <div className="app">
        <Nav />
        <Jumbotrons />
        <div className="outer">
          <Cards />
        </div>
        
        



      </div>
    );
  }
}

export default App;
