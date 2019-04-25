import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import data from "../data.js";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Week extends Component {
  chartdata = this.getData(data);
  getData(data) {
    let chartdata = [];
    for (let i = 0; i < data.length; i++) {
      chartdata[i] = {
        label: data[i].language,
        y: parseInt(data[i].weeks)
      }
    }
    return chartdata;
  }

  render() {
    const options = {
      width: 1000,
      height: 700,
      scaleShowValues: true,
      axisX: {
        title: "Languages",
        titleFontFamily: "VT323",
        titleFontSize: 20,
        labelFontFamily: "VT323",
        labelFontSize: 8,
        interval: 1,
        ticks: {
          autoSkip: false,
        }
      },
      axisY: {
        title: "Weeks to learn",
        titleFontFamily: "VT323",
        titleFontSize: 20,
        labelFontFamily: "VT323",
        labelFontSize: 12,
      },
      animationEnabled: true,
      theme: "light1",
      data: [
        {
          // Change type to "doughnut", "line", "splineArea", etc.
          type: "bar",
          dataPoints: this.chartdata,
        }
      ]
    }

    return (
      <div>
        <CanvasJSChart options={options} id="byWeek"
        /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default Week;
