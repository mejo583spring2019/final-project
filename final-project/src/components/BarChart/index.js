import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { Component } from "react";

/** bar Chart component builds the highchart
 * and renders it on the page
 */
class BarChart extends Component {
  /** Constructs the data
   * values to use in Highcharts
   * @param {any} props
   */
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

  /** renders high charts using data from above
   * @return {any} JSX to create a Highchart
   */
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
