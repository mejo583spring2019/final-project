import React, { Component } from 'react';
import Chart from "./components/table/chart";
import Bubbles from "./components/table/chart";

// import table from "./components/table/index"






class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
      bubbleData: {}

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
        <Chart chartData={this.state.chartData}/>
        <Bubbles bubbleData={this.state.bubbleData}/>

      </div>
    );
  }
}

export default App;
