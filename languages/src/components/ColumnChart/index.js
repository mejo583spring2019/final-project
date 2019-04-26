import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import data from '../data.js';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ColumnChart extends Component {
  chartdata = this.getData(data);
  getData(data) {
    let chartdata = [];
    for (let i = 0; i < data.length; i++) {
      chartdata[i] = {
        label: data[i].language,
        y: parseInt(data[i].hours)
      }

    }
    console.log(chartdata);
    return chartdata;
  }



  render() {
    const options = {
      width: 1100,
      title: {
        text: "Languages by hour",
        fontFamily: "VT323",
      },
      scaleShowValues: true,
      axisX: {
        labelFontFamily: "VT323",
        ticks: {
          autoSkip: false
        }
      },
      axisY: {
        viewportMinimum: 0,
        viewportMaximum: 2500,
        labelFontFamily: "VT323",
      },
      animationEnabled: true,
      theme: "light1",
      data: [
        {
          // Change type to "doughnut", "line", "splineArea", etc.
          type: "column",
          dataPoints: this.chartdata,
        }
      ]
    }

    return (
      <div>
        <CanvasJSChart options={options} id="byHour"
        /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default ColumnChart;
