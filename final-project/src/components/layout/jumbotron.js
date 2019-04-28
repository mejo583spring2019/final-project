import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Youtube from '../elements/youtube';



class Jumbotrons extends Component {
  
 
  
  render() {
    return (
        <Jumbotron>
          <div className="outer">
          <div className="inner center">
              
            <h1 className="center-text">Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
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