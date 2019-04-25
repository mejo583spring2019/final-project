import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import data from "../data.js";
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Hour extends Component {
  chartdata = this.getData(data);
  getData(data) {
    const chartdata = [];
    for (let i = 0; i < data.length; i++) {
      chartdata[i] = {
        label: data[i].language,
        y: parseInt(data[i].hours),
      };
    }
    return chartdata;
  }

  render() {
    const options = {
      width: 1000,
      height: 500,
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
        },
      },
      axisY: {
        title: "Hours to learn",
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
          type: "column",
          dataPoints: this.chartdata,
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart options={options} id="byHour"
        /* onRef={ref => this.chart = ref} */
        />
      </div>
    );
  }
}

export default Hour;
