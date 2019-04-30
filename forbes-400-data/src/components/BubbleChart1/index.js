import React, { Component } from "react";
import Chart from "chart.js";

import forbesData from "../../data/forbes-400-2018.js";

import "./styles.css";

/** BubbleChart1 creates a bubblechart
 * of data
 */
class BubbleChart1 extends Component {
  chartRef = React.createRef();
  chart = {};

  /** Sets up our chart data
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.fullData = forbesData.filter((r) => r.age !== "" && r.netWorth < 10);

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
        backgroundColor = "rgba(0,128,138,0.2)";
        borderColor = "rgba(0,128,138,1)";
      } else if (r.philanthropyScore === 3) {
        backgroundColor = "rgba(0,102,178,0.2)";
        borderColor = "rgba(0,102,178,1)";
      } else if (r.philanthropyScore === 4) {
        backgroundColor = "rgba(189,91,0,0.2)";
        borderColor = "rgba(189,91,0,1)";
      } else if (r.philanthropyScore === 5) {
        backgroundColor = "rgba(102,4,52,0.2)";
        borderColor = "rgba(102,4,52,1)";
      }
      const dataset = {
        label: r.name,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        data: [data]
      }
      return dataset;
    });

    console.log(datasets);

    this.chart = new Chart(myChartRef, {
      type: "bubble",
      data: {
        // labels: "Africa",
        datasets: datasets
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: ""
        },
        tooltips: {
          mode: "nearest",
          titleFontFamily: "'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
          titleFontSize: 18,
          displayColors: false,
          bodyFontFamily: "'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
          bodyFontSize: 16,
          callbacks: {
            title: function (tooltipItem, data) {
              const title = [];
              for (let i = 0; i < tooltipItem.length; i++) {
                title[i] = data.datasets[tooltipItem[i].datasetIndex].label
              }
              return title;
            },
            label: function (tooltipItem, data) {
              const score = (data.datasets[tooltipItem.datasetIndex].data[0].r - 5) / 2;
              const age = data.datasets[tooltipItem.datasetIndex].data[0].y;
              const netWorth = data.datasets[tooltipItem.datasetIndex].data[0].x;
              const label = "Score: " + score + ", Age: " + age + ", Total Net Worth: $" + netWorth + " B";
              console.log(label);
              return label;
            }
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              min: 20,
              max: 100
            },
            scaleLabel: {
              display: true,
              labelString: "Age",
              padding: -2
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              callback: function (value, index, values) {
                return "$" + value + " B";
              },
              min: 2,
              max: 10
            },
            scaleLabel: {
              display: true,
              labelString: "Total Net Worth",
              padding: 0
            }
          }]
        }
      }
    });
  }

  /** filterData shows or hides data
   * on checkbox toggle.
   */
  filterData(newState) {
    newState = { ...this.state, ...newState };
    const newData = this.fullData.filter((r) => {
      return (
        (newState.showAll) ||
        ((r.philanthropyScore === 0) && newState.showNA) ||
        ((r.philanthropyScore === 1) && newState.showS1) ||
        ((r.philanthropyScore === 2) && newState.showS2) ||
        ((r.philanthropyScore === 3) && newState.showS3) ||
        ((r.philanthropyScore === 4) && newState.showS4) ||
        ((r.philanthropyScore === 5) && newState.showS5)
      );
    });

    newState.data = newData;
    newState.selected = null;
    this.updateChart(newState);
  }

  updateChart(newState) {
    const datasets = newState.data.map((r) => {
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
        backgroundColor = "rgba(0,128,138,0.2)";
        borderColor = "rgba(0,128,138,1)";
      } else if (r.philanthropyScore === 3) {
        backgroundColor = "rgba(0,102,178,0.2)";
        borderColor = "rgba(0,102,178,1)";
      } else if (r.philanthropyScore === 4) {
        backgroundColor = "rgba(189,91,0,0.2)";
        borderColor = "rgba(189,91,0,1)";
      } else if (r.philanthropyScore === 5) {
        backgroundColor = "rgba(102,4,52,0.2)";
        borderColor = "rgba(102,4,52,1)";
      }
      const dataset = {
        label: r.name,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        data: [data]
      }
      return dataset;
    });
    this.chart.config.data.datasets = datasets;
    this.chart.update();
  }

  /** componentDidUpdate draws chart when
   * component is updated.
   */
  componentDidUpdate() {
    let newState = {
      showAll: this.props.showAll,
      showNA: this.props.showNA,
      showS1: this.props.showS1,
      showS2: this.props.showS2,
      showS3: this.props.showS3,
      showS4: this.props.showS4,
      showS5: this.props.showS5,
      data: "",
      selected: ""
    };
    this.filterData(newState);
  }

  /** componentDidMount draws chart when
   * component mounts.
   */
  componentDidMount() {
    this.drawChart();
  }

  render() {
    return (
      <div className="bubble-chart1">
        <canvas
          id="bubbleChart1"
          ref={this.chartRef}
        />
      </div>
    );
  }
}

export default BubbleChart1;
