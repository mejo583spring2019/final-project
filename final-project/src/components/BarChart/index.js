import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { Component } from "react";

/** bar Chart component builds the highchart
 * and renders it on the page
 */


class BarChart extends Component {
  constructor(props) {
    super(props);

    this.type = "";
    this.chartData = [];
    this.title = "";
    this.xAxis = [];

    this.options = {
      chart: {
        type: this.type,
      },
      title: {
        text: this.title,
      },
      xAxis: {
        categories: this.xAxis,
      },
      series: [
        {
          data: this.chartData,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={this.options}
        />
      </div>
    );
  }
}

export default BarChart;
