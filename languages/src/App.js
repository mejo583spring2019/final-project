import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// Bootstrap
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
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
                    communicate, <strong>how can English-speakers
                       keep up?</strong></Col>
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
   * @param {any} props
   * @param {any} context
   */
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }
  /**
 * Sets up handle Close method
 */
  handleClose() {
    this.setState({ show: false });
  }
  /**
 * Sets up handle Show method
 */
  handleShow() {
    this.setState({ show: true });
  }

  /**
     * Renders app.
     * @return {any} JSX content
     */
  render() {
    return (
      <div>
        <div id="#myNavbar">
          <Navbar
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
            <Navbar.Collapse id="responsive-navbar-nav" className="myNavbar">
              <Nav className="mr-auto">
                <Nav.Link href="#/">home</Nav.Link>
                <Nav.Link href="#/about">about </Nav.Link>
                <Nav.Link href="#/pick">pick a language</Nav.Link>
                <Nav.Link href="#/resources/">resources</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link><Button variant="primary" onClick={this.handleShow}>
                  Colophon
                </Button>
                </Nav.Link>
                <Nav.Link eventKey={2} href="https://www.github.com/tianasama" target="_blank" rel="noopener noreferrer">
                  <img src={require("./media/tianasama-link.png")}
                    alt="tianasama bart simpson link" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Modal size="lg" show={this.state.show}
            onHide={this.handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
              <Modal.Title>Colophon</Modal.Title>
            </Modal.Header>
            <Modal.Body><h4>About this site</h4><p>This site is hosted on <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">Github Pages</a>. It was created in April 2019 on a Macbook Pro using <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a> and associated libraries including <a href="https://react-bootstrap.github.io" target="_blank" rel="noopener noreferrer">Bootstrap</a>, <a href="https://www.chartjs.org" target="_blank" rel="noopener noreferrer">Chart.js</a>, and <a href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer">Router</a>. The graphics were sourced via <a href="https://tenshiikisu.tumblr.com" target="_blank" rel="noopener noreferrer">Tenshiikisu</a>, <a href="https://pixels.com/featured/pixel-earth-martin-capek.html" target="_blank" rel="noopener noreferrer">Martin Capek</a>, <a href="http://www.exquisite-eye.com" target="_blank" rel="noopener noreferrer">Exquisite Eye</a> and <a href="http://pixelartmaker.com" target="_blank" rel="noopener noreferrer">Pixel Art Maker</a> and manipulated using <a href="https://adobe.com" target="_blank" rel="noopener noreferrer">Adobe</a> Illustrator and Photoshop. The typeface is VT323 by <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">Google Fonts</a>.
            </p><h4>Data</h4><p>Data used by this site was collected by the Foreign Service Institute and pulled from <a href="https://data.world/dataremixed/language-difficulty-ranking/workspace/file?filename=Foreign+Service+Institute+language+assignments+to+3S%2F3R.xlsx" target="_blank" rel="noopener noreferrer">data.world</a>. Read the full study <a href="https://www.state.gov/documents/organization/247092.pdf" target="_blank" rel="noopener noreferrer">here</a> and access additional information about the Foreign Service Institute <a href="https://www.state.gov/m/fsi/" target="_blank" rel="noopener noreferrer">here</a>. Categorization of data into individual regions was manually inserted into the original data based on the largest concentration of native speakers worldwide.</p><h4>Author</h4>Polyglot was designed and developed by <a href="https://www.tianaisonline.com" target="_blank" rel="noopener noreferrer">Tiana Attride</a>. For more projects by this author, please visit <a href="https://github.com/tianasama" target="_blank" rel="noopener noreferrer">tianasama</a> on Github.</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
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
