import React, { Component } from 'react';
import Jumbotrons from "./components/layout/jumbotron";
import Nav from "./components/layout/navigation";
import Cards from "./components/elements/card";
import Youtube from './components/elements/youtube';

import "./app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
      bubbleData: {},
      barData: {}
 

    }
  }
 
  /**Renders the application */
  render() {
    return (
      <div className="app">
        <Nav />
        <Jumbotrons />
        <div className="outer">
        <Youtube />
        </div>
        <div className="outer">
        <div className="inner center width">

        <p className="j-text">
              During the Great Depression, food banks, homeless shelters and local government offices were flooded by needy men, women and families who were out of money and in need of critical aid. As a result, President Franklin D. Roosevelt made it his mission to get The New Deal enacted to create jobs and provide citizens with a way out of poverty. This created social support programs such as Medicare, Medicaid, Social Security and more. <br /><br />
              Unfortunately, after almost 90 years, these programs have been unable to keep up with the rising needs of citizens and the wage gap between the wealthy and the less fortunate has steadily grown. As a result, many economists have begun searching for a new solution to the issue of poverty. One option that is gaining traction is Universal Basic Income. 
            </p>
          </div>

          </div>
        <div className="outer">
       
          <Cards />
        </div>
       
        
        



      </div>
    );
  }
}

export default App;
