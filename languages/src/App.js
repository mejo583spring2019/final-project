import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// Bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";

// Components
import About from "./components/About";
import Pick from "./components/Pick";
import Resources from "./components/Resources";

// Stylesheets
import "./styles.css";

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
              <h1 id="title">Did you know that only one in five Americans<br />
                speak a second language?</h1>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <img
                id="earth-title"
                alt="earth"
                src={require("./media/title-planet.gif")}
                width="550"
                height="550"
                className="center-block"
              />
            </Col>
          </Row>
          <Row id="title-text">
            <Col><br /><strong>It"s true.</strong> Less than 25% of people
             living in the United States speak a second language (compare
              that to citizens of countries like Denmark and Sweden, who
               speak an average of three by the time they are adults). As
                our world becomes increasingly interconnected, the need
                 for multilingualism will only continue to grow as
                  people learn to operate in an international context.
                   But when the majority of the population cannot
                    communicate, <strong>how can English-speakers keep up? </strong></Col>
            <Col><br />Research has shown correlation between
             bilingualism and higher intelligence, memory skills,
              academic performance, networking skills, and marketability.
               When knowing a second language reaps nothing but benefits,
                <strong>why not take the leap to learn?</strong> We're
             here to guide the everyday English speaker on their
              journey to becoming a polyglot, whether that journey
               begins with something as simple as Spanish or as
                challenging as Chinese. Explore our site and
                 discover which language will be your next
                      best friend.</Col>
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
          <Navbar collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
            sticky="top">
            <Navbar.Brand href="#/">
              <img
                alt="earth"
                src={require("./media/planet-icon.png")}
                width="60"
                height="60"
                className="d-inline-block align-center"
              />
              {"Polyglot"}
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
                  <img src={require("./media/tianasama-link.png")} alt="tianasama bart simpson link" />
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
