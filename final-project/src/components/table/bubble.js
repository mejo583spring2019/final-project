import React, { Component } from "react";
import {Bubble} from "react-chartjs-2";
import sal from "../../data/sal";
import wage from "../../data/wage";
import gdp from "../../data/gdp";


const states= []; /** gdp in each state */

/** creates class Bubbles */
class Bubbles extends Component {
  /** constructor takes in props to set state
 * @param {object} props
 */
  constructor(props) {
    super(props);
    this.state = {
      bubbleData: props.bubbleData,
    };
  }


  /** Creates an array that seperates
  * the data in sal.js into 2 arrays to be used in averageSalData
   * @return {any}
   */
  makeDataArray() {
    const wages2015 = wage.filter((r) => r.year === "2015");
    const wagesByState = {};
    const gdpByState = {};

    wages2015.forEach((r) => {
      wagesByState[r.state] = r;
    });
    gdp.forEach((r) => {
      gdpByState[r.state] = r;
    });
    const bubbleArray = [];
    sal.forEach((d) => {
      bubbleArray.push({
        x: Number.parseFloat(wagesByState[d.state].minimumWage).toFixed(2),
        y: parseInt( d.salary),
        r: parseInt(gdpByState[d.state].gdp)*.000009,
      });
    });

    return bubbleArray;
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
    // data = {
    //   labels: ['January'],
    //   datasets: [
    //     {
    //       label: 'My First dataset',
    //       fill: false,
    //       lineTension: 0.1,
    //       backgroundColor: 'rgba(75,192,192,0.4)',
    //       borderColor: 'rgba(75,192,192,1)',
    //       borderCapStyle: 'butt',
    //       borderDash: [],
    //       borderDashOffset: 0.0,
    //       borderJoinStyle: 'miter',
    //       pointBorderColor: 'rgba(75,192,192,1)',
    //       pointBackgroundColor: '#fff',
    //       pointBorderWidth: 1,
    //       pointHoverRadius: 5,
    //       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    //       pointHoverBorderColor: 'rgba(220,220,220,1)',
    //       pointHoverBorderWidth: 2,
    //       pointRadius: 1,
    //       pointHitRadius: 10,
    //       data: [{x:10,y:20,r:5}]
    //     }
    //   ]
    // };
    this.setState({
      bubbleData: {
        labels: states,
        datasets: [{
          label: "State GDP in 2015 (in Billions of USD)",
          data: this.makeDataArray(),
          backgroundColor: "#00F1AB",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
        },
        ],
      },
    });
  }
  /** renders bubble chart
   * @return {any}
   */
  render() {
    return (
      <div className="bubble">
        <Bubble
          data={this.state.bubbleData}
          options={{
            title: {
              display: true,
              text: "State GDP and Hourly Wage",
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

export default Bubbles;
