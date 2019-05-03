import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Colophon from "../elements/colophon";

/** creates class */
class Jumbotrons extends Component {
  /** renders the jumbotron
   * @return {any}
   */
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">The Future of Welfare</Nav.Link>
        </Nav>
        <Colophon />

      </Navbar>


    );
  }
}

export default Jumbotrons;
