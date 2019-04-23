import React, { Component } from 'react';
import {Bubble} from "react-chartjs-2";
import sal from "../../data/sal";
import wage from "../../data/wage";
import gdp from "../../data/gdp";


let salary = [];  /** average salary in each state */
let min= [];  /** minimum wage in each state */
let gross= [];  /** gdp in each state */
let states= [];  /** gdp in each state */



class Bubbles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bubbleData: props.bubbleData
    }
  }
 /** Creates an array that seperates the data in sal.js into 2 arrays to be used in averageSalData */
 makeDataArray() {
  console.log("test");
  for(let i = 0; i < sal.length; i++) {
    salary[i] = sal[i].salary;
    states[i] = sal[i].state;
    gross[i] = gdp[i].gdp;
  } 
  for(let i = 0; i < wage.length; i++) {

    if (wage[i].year === "2015") {
      min[i] = wage[i].minimum-wage;

    }
  }
 
}
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "bottom"
  }
    /** calls functions after it has loaded */
    componentWillMount() {
      this.makeDataArray(); 
      
      this.averageSalData();
    }
    /** Builds Salary Chart */
    averageSalData() {
      this.setState({
        bubbleData: {
          labels: states,
          datasets: [
            {
              label: "Average Salary (in USD)",
              data: {
                // X Value
                x: min,
            
                // Y Value
                y: salary,
            
                // Bubble radius in pixels (not scaled).
                r: gross
            },
              backgroundColor: 'rgba(255,225,0.5)'
            }
          ]
        }
      })
    }
  render() {
    return (
      <div className="bubble">
        <Bubble
          data={this.state.bubbleData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Salary, Minimum Wage and GDP of each US State",
              fontSize: 25
            },
            legend: {
              display: true,
            }
          }}
        />
      </div>
    );
  }
}

export default Bubbles;
