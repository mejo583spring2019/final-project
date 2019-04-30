import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Bubbles from "../table/bubble";
import "./modals.css";

/** creates Modal */
class Modals extends Component {
  /** constructor takes in props to set state
 * @param {object} props
 * @param {any} context
 */
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
    };

    this.handleShow = () => {
      this.setState({ show: true });
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
  }
  /** renders modal
 * @return {any}
 */
  render() {
    return (
        <>
          <Button variant="primary" className="btn" onClick={this.handleShow}>
          Learn More
          </Button>

          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                The Economy
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <div className="modals">
                <Bubbles />
              </div>
              <div className="modal-content">
                <p>
                  At the end of the day, the bottom line will likely
                  be what decides whether Universal Basic Income is a
                  viable solution to the poverty problem in America, so
                  let's look at the economic effects it could have.
                  <br /> <br />
                  The graph above shows the gdp of each US state in relation
                  to the state's minimum wage and average salary. These values
                  were used to see if there was a clear connection between the
                  state's minimum wage/average salary and the gdp. After
                  reviewing the data, it is clear that states that ensure all
                  workers earn a livable wage have higher GDPs.
                  <br /> <br />
                  The video also speaks on this when it talks about how
                  working-class citizens who are given additional funds
                  through a Universal
                  Basic Income boost the economy more than if that same money
                  were to go to members of  the wealthy upper class. Which means
                  that establishing a Universal Income could potentially boost
                  the economy.

                </p>
              </div>
            </Modal.Body>
          </Modal>
        </>
    );
  }
}

export default Modals;
