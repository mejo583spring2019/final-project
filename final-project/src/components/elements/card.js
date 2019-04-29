import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Modal2 from "./modal2";
import Modal3 from "./modal3";
import Modals from "./modal";
import Chart from "../table/chart";
import Bubbles from "../table/bubble";
import Wages from "../table/bar";
import "./card.css";

/** creates Cards component */
class Cards extends Component {
/** renders the Cards
 * @return {any}
 */
  render() {
    return (
      <div className="outer">
        <Card>

          <Chart/>
          <Card.Body>
            <Card.Title>Do Americans Need the Extra Money?</Card.Title>
            <Card.Text>
              <div className="card-txt">
               Before deciding whether or not Universal Basic Income
               is a good idea, let's take a look at how citizens in
               different states will be effected by an added $12,000/year.
              </div>
            </Card.Text>
            <Modals />

          </Card.Body>

        </Card>

        <Card>
          <Wages/>
          <Card.Body>
            <Card.Title>How Widespread is Poverty?</Card.Title>
            <Card.Text>
              <div className="card-txt spacer">

                  Another important question to ask is how widespread
                  poverty currently is. Click the button below to learn more.
              </div>
            </Card.Text>
            <Modal2 />
          </Card.Body>

        </Card>
        <Card>
          <Bubbles/>
          <Card.Body>
            <Card.Title>How Will This Effect the Economy?</Card.Title>
            <Card.Text>
              <div className="card-txt">
                  Regardless of the benefits that millions of Americans might
                  recieve through Universal Basic Income, it is prudent to
                  also examine the potential long-term effects, especially
                  to the economy.
              </div>
            </Card.Text>
            <Modal3 />

          </Card.Body>
        </Card>
      </div>


    );
  }
}

export default Cards;
