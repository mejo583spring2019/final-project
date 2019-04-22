import React, { Component } from 'react';
import Chart from "./components/table/chart";
// import table from "./components/table/index"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    }
  }
  componentWillMount() {
    this.getChartData();
  }
  getChartData() {
    this.setState({

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
        <Chart />
      </div>
    );
  }
}

export default App;
