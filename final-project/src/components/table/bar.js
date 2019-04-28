import React, { Component } from 'react';
import {Bar} from "react-chartjs-2";
import wage from "../../data/wage";


let wages = [];
let states= [];

class Wages extends Component {
  constructor(props) {
    super(props);
      this.state = {
      barData: props.barData
    }
  }
 /** Creates an array that seperates the data in sal.js into 2 arrays to be used in averageSalData */
 makeDataArray() {
   for(let i = 0; i < wage.length; i++) {
     states[i] = wage[i].state;
    wages[i] = wage[i].minimumWage;
    
    if(wages[i] === "0") {
      wages[i] = "7.25";
}
    }
    
  } 
  


/** calls functions after it has loaded */
componentWillMount() {
  this.makeDataArray();
  this.averageWageData();
}
/** Builds wage wage */
averageWageData() {
  this.setState({
    wageData: {
      labels: states,
      datasets: [
        {
          label: "Average Hourly Wage (in USD)",
              data: wages,
              backgroundColor: '#00F1AB'
            }
          ]
        }
      })
    }
  render() {
    return (
      <div className="wage">
        <Bar
          data={this.state.wageData}
          options={{
            title: {
              display: true,
              text: "Hourly Wage in Each US State",
              fontSize: 20,
              fontColor: "rgb(33, 37, 41)"
             
            },
            legend: {
              display: true,
              labels: {
              fontColor: "rgb(33, 37, 41)"                         
            }
            },
            scales: {
              xAxes: [{
                gridLines: {
                  display: false
                },
                ticks: {
              fontColor: "rgb(33, 37, 41)",
                  stepSize: 1,
                  beginAtZero: false
              }
              }],
              yAxes: [{
                gridLines: {
                  display: false
                },
                ticks: {
                  fontColor: "rgb(33, 37, 41)",
                
              }
              }]
            }
          }}
        />
      </div>
    );
  }
}

export default Wages;