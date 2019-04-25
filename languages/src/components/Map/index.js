import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import data from "../data.js";
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Map extends Component {
  chartdata = this.getData(data);

  categoryOne(data) {
    const category1data = data.filter(val =>
      val.category === 1).map(val => val.language);
    const category1result = {};
    category1data.forEach(val => {
      category1result[val] = 1 + (category1result[val] || 0);
    });
    // {
    //   Danish: 3,
    //   Dutch: 2,
    //   Spanih: 1,
    // }
  }


  getData(data) {
    const chartdata = [];
    for (let i = 0; i < data.length; i++) {
      chartdata[i] = {
        label: data[i].region,
        y: data[i].region.length,
      }
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
          type: "pie",
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

export default Map;
