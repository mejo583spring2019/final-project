import React from "react";
import Chart from "chart.js";
import BubbleChart1 from "../BubbleChart1";

import forbesData from "../../data/forbes-400-2018.js";

import "./styles.css";

/** BubbleChart2 creates a bubblechart
 * for the top three Forbes 400 members
 */
class BubbleChart2 extends BubbleChart1 {
  /** Sets up our chart data
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.fullData = forbesData.filter((r) => r.netWorth > 10);

    this.state = {
      showAll: props.showAll,
      showNA: props.showNA,
      showS1: props.showS1,
      showS2: props.showS2,
      showS3: props.showS3,
      showS4: props.showS4,
      showS5: props.showS5,
      data: this.fullData.slice(),
      selected: null,
    };
  }

  /** drawChart uses the chart data
   * to draw bubblechart with Chart.js
   */
  drawChart() {
    const myChartRef = this.chartRef.current.getContext("2d");
    const datasets = this.state.data.map((r) => {
      const data = {};
      data.x = r.netWorth;
      data.y = r.age;
      data.r = 5 + r.philanthropyScore * 2;
      let backgroundColor = "rgba(126,116,103,0.2)";
      let borderColor = "rgba(126,116,103,1)";
      if (r.philanthropyScore === 1) {
        backgroundColor = "rgba(89,129,65,0.2)";
        borderColor = "rgba(89,129,65,1)";
      } else if (r.philanthropyScore === 2) {
        backgroundColor = "rgba(102,4,52,0.2)";
        borderColor = "rgba(102,4,52,1)";
      } else if (r.philanthropyScore === 3) {
        backgroundColor = "rgba(0,128,138,0.2)";
        borderColor = "rgba(0,128,138,1)";
      } else if (r.philanthropyScore === 4) {
        backgroundColor = "rgba(0,102,178,0.2)";
        borderColor = "rgba(0,102,178,1)";
      } else if (r.philanthropyScore === 5) {
        backgroundColor = "rgba(189,91,0,0.2)";
        borderColor = "rgba(189,91,0,1)";
      }
      const dataset = {
        label: r.name,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        data: [data],
      };
      return dataset;
    });


    this.chart = new Chart(myChartRef, {
      type: "bubble",
      data: {
        // labels: "Africa",
        datasets: datasets,
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "",
        },
        tooltips: {
          mode: "nearest",
          titleFontFamily: "'Work Sans', sans-serif",
          titleFontSize: 18,
          displayColors: false,
          bodyFontFamily: "'Work Sans', sans-serif",
          bodyFontSize: 16,
          callbacks: {
            title: function(tooltipItem, data) {
              const title = [];
              for (let i = 0; i < tooltipItem.length; i++) {
                title[i] = data.datasets[tooltipItem[i].datasetIndex].label;
              }
              return title;
            },
            label: function(tooltipItem, data) {
              const score =
                (data.datasets[tooltipItem.datasetIndex].data[0].r - 5) / 2;
              const age =
                data.datasets[tooltipItem.datasetIndex].data[0].y;
              const netWorth =
                data.datasets[tooltipItem.datasetIndex].data[0].x;
              const label =
                "Score: " + score +
                ", Age: " + age + ", Total Net Worth: $" + netWorth + " B";

              return label;
            },
          },
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: false,
            },
            ticks: {
              min: 30,
              max: 90,
            },
            scaleLabel: {
              display: true,
              labelString: "Age",
              padding: -2,
            },
          }],
          xAxes: [{
            gridLines: {
              display: false,
            },
            ticks: {
              callback: function(value, index, values) {
                return "$" + value + " B";
              },
              min: 0,
              suggestedMax: 100,
            },
            scaleLabel: {
              display: true,
              labelString: "Total Net Worth",
              padding: 0,
            },
          }],
        },
      },
    });
  }

  /** Presents bubble chart 2
   * @return {html} Bubble chart 2 HTML
   */
  render() {
    return (
      <div className="bubble-chart2">
        <canvas
          id="bubbleChart2"
          ref={this.chartRef}
        />
      </div>
    );
  }
}

export default BubbleChart2;
