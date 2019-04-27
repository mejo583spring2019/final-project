import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { Component } from "react";

/** bar Chart component builds the highchart
 * and renders it on the page
 */


class BarChart extends Component {
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
