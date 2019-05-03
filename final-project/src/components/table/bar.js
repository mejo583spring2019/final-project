import React, { Component } from "react";
import {Bar} from "react-chartjs-2";
import poverty from "../../data/poverty";

/** creates class */
class Poverty extends Component {
  /** constructor takes in props to set state
 * @param {object} props
 */
  constructor(props) {
    super(props);
    this.state = {
      barData: [],
    };

    this.povertys = [];
    this.states= [];
  }
  /** Creates an array that seperates the data in
   * sal.js into 2 arrays to be used in averageSalData */
  makeDataArray() {
    this.povertys = [];
    this.states= [];
    for (let i = 0; i < poverty.length; i++) {
      this.states.push(poverty[i].state);
      this.povertys.push(poverty[i].povertyRate);
    }
    // console.log(povertys);
  }


  /** calls functions after it has loaded */
  componentWillMount() {
    this.makeDataArray();
    this.averageWageData();
  }
  /** Builds poverty poverty */
  averageWageData() {
    this.setState({
      wageData: {
        labels: this.states,
        datasets: [
          {
            label: "State Poverty Rate",
            data: this.povertys,
            backgroundColor: "#00F1AB",
          },
        ],
      },
    });
  }
  /** renders the bar chart
   * @return {any}
   */
  render() {
    return (
      <div className="poverty">
        <Bar
          data={this.state.wageData}
          options={{
            title: {
              display: true,
              text: "Poverty Rate in Each US State",
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

export default Poverty;
