import React, { Component } from 'react';
import Chart from "./components/table/chart";
// import table from "./components/table/index"
import sal from "./data/sal";


let salary = [];
let states= [];

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  }
  /** Creates an array that seperates the data in sal.js into 2 arrays to be used in averageSalData */
  makeDataArray() {
    console.log("test");
    for(let i = 0; i < sal.length; i++) {
      states[i] = sal[i].state;
      salary[i] = sal[i].salary;

    }  console.log(salary);
   
  }
  /** calls functions after it has loaded */
  componentWillMount() {
    this.makeDataArray(); 
    
    this.averageSalData();
  }
  /** Builds Salary Chart */
  averageSalData() {
    this.setState({
      chartData: {
        labels: states,
        datasets: [
          {
            label: "population",
            data: salary,
            backgroundColor: 'rgba(255,0,0.5)'
          }
        ]
      }
    })
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
      </div>
    );
  }
}

export default App;
