import React, { Component } from 'react';
import {Bar, Line, Pie, Bubble} from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charData: {
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
    }
  }
  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.charData}
          options={{
            title: {
              display: true,
              text: "Largest Cities in Mass.",
              fontSize: 25
            },
            legend: {
              display: true,
              position: "right"
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
