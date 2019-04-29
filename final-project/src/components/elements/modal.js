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
            Chart card
          </Button>

          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Custom Modal Styling
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
                  and Hawaii) there are some states where

                </p>
              </div>
            </Modal.Body>
          </Modal>
        </>
    );
  }
}

export default Modals;
