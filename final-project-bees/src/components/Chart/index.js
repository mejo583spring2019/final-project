import React from "react";
// eslint-disable-next-line no-unused-vars
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "spline",
  },
  title: {
    text: "Bee Colony Losses, 2017 - 2018",
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"],
  },
  series: [
    {
      data: [
        29.9,
        71.5,
        106.4,
        129.2,
        144.0,
        176.0,
        135.6,
        148.5,
        216.4,
        194.1,
        295.6,
        454.4],
    },
  ],
};

class Chart extends React.Component {
  render() {
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options} />
      </div>
    );
  }
}

export default Chart;

//  const App = () => (
//      <div>
//      <HighchartsReact highcharts={Highcharts} options={options} />
//       </div>
//   );
