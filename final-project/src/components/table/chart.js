import React, { Component } from "react";
import {Bar} from "react-chartjs-2";
import sal from "../../data/sal";


const salary = [];
const states= [];
/** creates Chart */
class Chart extends Component {
  /** constructor takes in props to set state
 * @param {object} props
 */
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }
  /** Creates an array that seperates the data in sal.js
   * into 2 arrays to be used in averageSalData */
  makeDataArray() {
    for (let i = 0; i < sal.length; i++) {
      states[i] = sal[i].state;
      salary[i] = sal[i].salary;
    // console.log(sal[i]);
    }
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "bottom",
  }
  /** calls functions after it has loaded */
  componentWillMount() {
    this.makeDataArray();

    this.averageSalData();
  }
  /** Builds Salary Chart */
  averageSalData() {
    this.setState({
      chartData: {
        labels: states,
        datasets: [
          {
            label: "Average Salary (in USD)",
            data: salary,
            backgroundColor: "#00F1AB",
          },
        ],
      },
    });
  }
  /** renders the chart
   * @return {Object}
   */
  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Average Salary in Each US State",
              fontSize: 20,
              fontColor: "rgb(33, 37, 41)",

            },
            legend: {
              display: true,
              labels: {
                fontColor: "rgb(33, 37, 41)",
              },
            },
            scales: {
              xAxes: [{
                gridLines: {
                  display: false,
                },
                ticks: {
                  fontColor: "rgb(33, 37, 41)",
                  stepSize: 1,
                  beginAtZero: false,
                },
              }],
              yAxes: [{
                gridLines: {
                  display: false,
                },
                ticks: {
                  fontColor: "rgb(33, 37, 41)",

                },
              }],
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
