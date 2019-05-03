import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Poverty from "../table/bar";
import "./modals.css";

/** creates class Modals as a component */
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
  /** renders the Modal
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
              <Modal.Title id="example-custom-modal-styling-title centers">
                Poverty in America
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <div className="modals">
                <Poverty />
              </div>
              <div className="modal-content">
                <p>
                  As the chart above illustrates, poverty is anything
                  but extinct in America. Currently, 15% of Americans
                  live below the poverty line and when you include
                  areas like Puerto Rico and the American Somoan Islands
                  that number increases significantly.
                  <br /><br />
                  One other important thing to note from this chart is
                  that the District of Columbia has one of the
                  highest poverty rates despite also having the
                  highest average salary for a state/territory
                  besides Maryland. This validates the assumption
                  made on the first card regarding class disparity in
                  America.
                </p>
              </div>
            </Modal.Body>
          </Modal>
        </>
    );
  }
}

export default Modals;
