import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import data from "../Data/data.js";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

/**
     * Creates Week component.
     * @return {any} Hour
     */
class Week extends Component {
  /**
 * @param {any} data
 * @return {any}
 */
  getData(data) {
    const chartdata = [];
    for (let i = 0; i < data.length; i++) {
      chartdata[i] = {
        label: data[i].language,
        y: parseInt(data[i].weeks),
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
        },
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
          dataPoints: this.getData(data),
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart options={options} id="byWeek"
          style={{ width: 200, height: 100 }}
        />
      </div>
    );
  }
}

export default Week;
