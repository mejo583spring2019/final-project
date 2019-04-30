import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "./style.css";


const labels = [
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017"];


const data = {
  labels: labels,
  datasets: [
    {
      label: "Copenhagen Family Car Ownership Rates",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(219, 135, 135, 0.4)",
      borderColor: "rgba(219, 135, 135, 1)",
      borderCapStyle: "round",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(219, 135, 135, 1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(219, 135, 135, 1)",
      pointHoverBorderColor: "rgba(219, 135, 135, 1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [28.51825969, 29.02953797,
        28.89338715,
        28.11309787,
        27.95326853,
        27.98548681,
        27.56971236,
        28.41886554,
        28.77107122,
        28.96650707,
        29.234000640],
      yAxisID: "y-axis-1",
    },
    {
      label: "Raleigh Car Ownership Rates",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(219, 135, 135, .4)",
      borderColor: "rgba(219, 135, 135, 1)",
      borderCapStyle: "round",
      borderDash: [10, 5],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(219, 135, 135, 1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(219, 135, 135, 1)",
      pointHoverBorderColor: "rgba(219, 135, 135, 1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [null,
        null,
        null,
        93.1340794,
        93.23919825,
        93.30146232,
        93.44171541,
        93.69994468,
        93.91486564,
        94.08208535,
        94.24379488],
      yAxisID: "y-axis-1",
    },
    {
      label: "Copenhagen Air Quality",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(115, 115, 214, .4)",
      borderColor: "rgba(115, 115, 214, 1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(115, 115, 214, 1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(115, 115, 214, 1)",
      pointHoverBorderColor: "rgba(115, 115, 214, 1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [36,
        33,
        null,
        27.66666667,
        32.33333333,
        24.33333333,
        23.66666667,
        28,
        34.5,
        23.5,
        18],
      yAxisID: "y-axis-2",
    },
    {
      label: "Raleigh Air Quality",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(115, 115, 214, .4)",
      borderColor: "rgba(115, 115, 214, 1)",
      borderCapStyle: "round",
      borderDash: [10, 5],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(115, 115, 214, 1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(115, 115, 214, 1)",
      pointHoverBorderColor: "rgba(115, 115, 214, 1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [33,
        24,
        20,
        21,
        24,
        21,
        22,
        22,
        22,
        16,
        16],
      yAxisID: "y-axis-2",
    },

  ],
};

const options = {

  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        type: "linear",
        display: true,
        position: "left",
        id: "y-axis-1",
        gridLines: {
          display: false,
        },
        labels: {
          show: true,
        },
      },
      {
        type: "linear",
        display: true,
        position: "right",
        id: "y-axis-2",
        gridLines: {
          display: false,
        },
        labels: {
          show: true,
        },
      },
    ],
  },
};

/** LineChart creates a react element for the Linechart
 * that extends the Line component from Chartjs-2
 * showing 4 data sets as outlines above
   */
class LineChart extends Component {
  /** render the LineChart component
      * in a chart container called line-chart
      * with an h2
      * @return {any} single line chart
       */
  render() {
    return (
      <div id="line-chart">
        <h2>Car Ownership Rates and Air Quality Over Time</h2>
        <Line data={data} options={options} />
      </div>
    );
  }
}
export default LineChart;


