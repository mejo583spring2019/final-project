import React, { Component } from 'react';
import Chart from "./components/table/chart";
// import table from "./components/table/index"




class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  }

  componentWillMount() {
    this.getChartData();
  }
  getChartData() {
    this.setState({
      chartData: {
        labels: ["boston", "city2", "city3", "city4", "city5", "city6"],
        datasets: [
          {
            label: "population",
            data: [
              100,
              200,
              300,
              400,
              500,
              600
            ],
            backgroundColor: 'rgba(255,0,0.5)'
          }
        ]
      }
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            I'm alive! for now
          </p>
          
        </header>
        <Chart chartData={this.state.chartData}/>
      </div>
    );
  }
}

export default App;
