import appalachian from "../../data/appalachian";
import davidson from "../../data/davidson";
import duke from "../../data/duke";
import ecu from "../../data/ecu";
import elizabethCity from "../../data/elizabeth-city-state";
import elon from "../../data/elon";
import ncsu from "../../data/ncsu";
import uncSchools from "../../data/unc-schools";
import wake from "../../data/wake-forest";
import wcu from "../../data/wcu";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { Component } from "react";

const options = {
  chart: {
    type: "spline",
  },
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6],
    },
  ],
};

class Chart extends Component {
  render() {
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}

export default Chart;
