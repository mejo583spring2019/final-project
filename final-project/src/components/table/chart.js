import React, { Component } from 'react';
import {Bar} from "react-chartjs-2";
import sal from "../../data/sal";


let salary = [];
let states= [];

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    }
  }
 /** Creates an array that seperates the data in sal.js into 2 arrays to be used in averageSalData */
 makeDataArray() {
  for(let i = 0; i < sal.length; i++) {
    states[i] = sal[i].state;
    salary[i] = sal[i].salary;

  }  
 
}
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "bottom"
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
              label: "Average Salary (in USD)",
              data: salary,
              backgroundColor: 'rgba(255,0,0.5)'
            }
          ]
        }
      })
    }
  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Salary in Each US State",
              fontSize: 25
            },
            legend: {
              display: true,
            },
            scales: {
              xAxes: [{
                gridLines: {
                  display: false
                }
              }],
              yAxes: [{
                gridLines: {
                  display: false
                }
              }]
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;