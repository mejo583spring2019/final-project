import BarChart from "../BarChart";

/** Add in Data to a column format for the completion rates of white students */
class WhiteChart extends BarChart {
  type = "column";
  chartData = [1, 2, 3];
  title = "My Cool TItle";
  xAxis = ["A", "B", "C"];

  options = {
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

export default WhiteChart;
