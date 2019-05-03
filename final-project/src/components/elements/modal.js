import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Chart from "../table/chart";
import "./modals.css";

/** creates class Modal */
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
          <Button variant="primary" onClick={this.handleShow}>
            Learn More
          </Button>

          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title center">
                The American Class Divide
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <div className="modals">
                <Chart />
              </div>
              <div className="modal-content">
                <p>
                  As you can see from the chart above,
                  there are some states (like Maryland
                  and Hawaii) where average salary
                  are significantly above the poverty line. However, that
                  doesn't mean that all of the people from these
                  states are living above the poverty line; instead,
                  it could simply indicate that there is a large disparity
                  between the wealthiest individuals and the working class.
                  <br /><br />
                  Additionally, as the video mentioned, the Universal Basic
                  Income will help more than just those living below the
                  poverty line. It will also help those who are middle class
                  to have more spending money, encourage people to work
                  jobs that they might not have otherwise chosen and allow
                  those needing to stay home for any number of reasons to do so.
                </p>
              </div>
            </Modal.Body>
          </Modal>
        </>
    );
  }
}

export default Modals;
