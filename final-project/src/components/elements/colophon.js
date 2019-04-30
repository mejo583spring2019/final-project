import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

/** creates class Modal */
class Colophon extends Component {
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
            Colophon
          </Button>

          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title center">
Colophon              </Modal.Title>
            </Modal.Header>
            <Modal.Body>


              <div className="modal-content">
                <p>
                  This project was built by Torin Edwards as a part of
                  the UNC School of Media and Journalism's Advanced
                  Interactive Multimedia Course: MEJO 583 taught by
                  Professor Lee Trout. The base files for this site
                  were acquired by forking from the github page:
                  https://github.com/mejo583spring2019/final-project
                  .
                  <br /><br />
                  The charts were rendered using the ChartJS library
                  found at http://chartjs.org.
                  <br /><br />
                  The files were linted using ESLint based on Google's
                  configurations.
                  <br /><br />
                  The modals and numerous other layout elements of the page
                  (buttons, jumbotron and cards) were rendered using
                  React-Bootstrap.
                  <br /><br />
                  The Youtube iFrame is rendered using React-Youtube.
                  <br /><br />
                  Video created by the Youtube page Kurzgesagt – In a Nutshell

                </p>
              </div>
            </Modal.Body>
          </Modal>
        </>
    );
  }
}

export default Colophon;
