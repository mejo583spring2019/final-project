import React, { Component } from 'react';
import Chart from "./components/table/chart";
import Bubbles from "./components/table/bubble";
import Wages from "./components/table/bar";
import Jumbotrons from "./components/story/jumbotron";

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
      <div className="App">
        <header className="App-header">
          <p>
            I'm alive! for now
          </p>
          
        </header>
        <Jumbotrons />
        <Chart chartData={this.state.chartData}/>
        <Bubbles bubbleData={this.state.bubbleData}/> 
        <Wages barData={this.state.barData}/> 
        



      </div>
    );
  }
}

export default App;
