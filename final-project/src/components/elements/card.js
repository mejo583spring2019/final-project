import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Chart from "../table/chart";
import Bubbles from "../table/bubble";
import Wages from "../table/bar";
import "./card.css";




class Cards extends Component {
  

  
  render() {
    return (
        <div className="outer">
            <Card>
                
            <Chart/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>

            </Card.Body>
          
            </Card>
 <Card>
            <Wages/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>

            </Card.Body>
            
            </Card>
 <Card>
            <Bubbles/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>

            </Card.Body>
            </Card>
            </div>

      
    );
  }
}

export default Cards;