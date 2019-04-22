import React, { Component } from 'react';
import {Bar, Line, Pie, Bubble} from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "bottom"
  }
  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities in Mass.",
              fontSize: 25
            },
            legend: {
              display: true,
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
