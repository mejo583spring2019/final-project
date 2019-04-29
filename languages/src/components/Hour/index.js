import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import data from "../Data/data.js";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

/**
     * Creates Hour component.
     * @return {any} Hour Chart
     */
class Hour extends Component {
  /**
 * @param {any} data
 * @return {any}
 */
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

  /**
     * Renders component.
     * @return {any} JSX
     */
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
          dataPoints: this.getData(data),
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart options={options} id="byHour"
          style={{ width: 200, height: 100 }}
        />
      </div>
    );
  }
}

export default Hour;
