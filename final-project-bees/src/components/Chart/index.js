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
  series: [
    {
      data: [1, 2, 1, 4, 3, 6],
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
