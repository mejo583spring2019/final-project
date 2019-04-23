import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

// React Router


// Components
import About from "./components/About";
import Hour from "./components/Hour";
import Week from "./components/Week";
import Map from "./components/Map";
import Table from "./components/Table";
import Pick from "./components/Pick";
import Resources from "./components/Resources";

// Stylesheets
import './styles.css';

/**
   * Renders home page.
   * @return {any} JSX content
   */
function Index() {
  return (
    <div id="mainBody">
      <div id="main">
        <Container>
          <Row>
            <Col>
              <h1 id="title">Did you know that only one in five Americans<br />speak a second language?</h1>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <img
                id="earth-title"
                alt="earth"
                src={require('./media/title-planet.gif')}
                width="550"
                height="550"
                className="center-block"
              />
            </Col>
          </Row>
          <Row id='title-text'>
            <Col><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu lectus ac purus lacinia consequat et ac nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec elit libero, elementum ut mi eget, tristique malesuada lorem. Proin semper in ante at mollis. Quisque eget sapien massa. Praesent ac sem vel libero tempor pellentesque. In non congue nulla. In non congue nulla. In non congue nulla.</Col>
            <Col><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu lectus ac purus lacinia consequat et ac nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec elit libero, elementum ut mi eget, tristique malesuada lorem. Proin semper in ante at mollis. Quisque eget sapien massa. Praesent ac sem vel libero tempor pellentesque. In non congue nulla. In non congue nulla. In non congue nulla.</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

/**
   * Creates app component.
   * @return {any} Tooltip JSX
   */
class App extends Component {
  /**
     * Renders app.
     * @return {any} JSX content
     */
  render() {
    return (
      <div>
        <div id="#myNavbar">
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Navbar.Brand href="#navTitle">
              <img
                alt="earth"
                src={require('./media/planet-icon.png')}
                width="60"
                height="60"
                className="d-inline-block align-center"
              />
              {'Polyglot'}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">home</Nav.Link>
                <Nav.Link href="#/about">about </Nav.Link>
                <Nav.Link href="#/pick">pick a language</Nav.Link>
                <Nav.Link href="#/resources/">resources</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="https://www.state.gov/documents/organization/247092.pdf" target="_blank" rel="noopener noreferrer">more info</Nav.Link>
                <Nav.Link eventKey={2} href="https://www.github.com/tianasama" target="_blank" rel="noopener noreferrer">
                  <img src={require('./media/tianasama-link.png')} alt="tianasama bart simpson link" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Router>
          <div>
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/pick/" component={Pick} />
            <Route path="/resources/" component={Resources} />
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
