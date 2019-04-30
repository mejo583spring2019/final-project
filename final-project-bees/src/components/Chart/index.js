import React from "react";
// eslint-disable-next-line no-unused-vars
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    zoomType: "x",
  },
  yAxis: {
    title: {
      text: "Percent Hive Loss",
    },
  },
  subtitle: {
    text: "Source: https://usda.library.cornell.edu/concern/publications/rn301137d?locale=en",
  },
  title: {
    text: "Bee Colony Losses to Colony Collapse Disorder, 2017 - 2018",
  },
  xAxis: {
    categories: [
      "January-March-2015",
      "April-June-2015",
      "July-September-2015",
      "October-December-2015",
      "January-March-2016",
      "April-June-2016",
      "July-September-2016",
      "October-December-2016",
      "January-March-2017",
      "April-June-2017",
      "July-September-2017",
      "October-December-2017"],
  },
  series: [
    {
      data: [
        31,
        13,
        13,
        14,
        26,
        12,
        14,
        15,
        34,
        12,
        14,
        18],
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
