import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Youtube from '../elements/youtube';
import "./jumbo.css";



class Jumbotrons extends Component {
  
 
  
  render() {
    return (
        <Jumbotron>
          <div className="outer">
          <div className="inner center width">
              
            <h1 className="center-text headline">Is the Solution to Poverty Free Money?</h1>
            <p className="j-text">
              During the Great Depression, food banks, homeless shelters and local government offices were flooded by needy men, women and families who were out of money and in need of critical aid. As a result, President Franklin D. Roosevelt made it his mission to get The New Deal enacted to create jobs and provide citizens with a way out of poverty. This created social support programs such as Medicare, Medicaid, Social Security and more. <br /><br />
              Unfortunately, after almost 90 years, these programs have been unable to keep up with the rising needs of citizens and the wage gap between the wealthy and the less fortunate has steadily grown. As a result, many economists have begun searching for a new solution to the issue of poverty. One option that is gaining traction is Universal Basic Income. 
            </p>
            <div className="center-text">
        <Youtube />
        </div>
        </div>
        </div>
    </Jumbotron>
      
    );
  }
}

export default Jumbotrons;