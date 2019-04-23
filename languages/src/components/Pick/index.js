import React, { Component } from "react";
// Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

// Stylesheets
import "./styles.css";

// COMPONENT CODE BEGINS
/**
 * About page describes the different categories
 * of language data.
 *  @return {any} JSX content
 */
class About extends Component {
  render() {
    return (
      <div>
        <div id="title-card">
          <h1><br />Picking a language</h1>
        </div>
        <Container>
          <Row>
            <Col id="intro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla nec enim vel fringilla. Vestibulum cursus fermentum ante a posuere. Mauris eget ligula non magna convallis varius. In dapibus gravida ex. Phasellus iaculis sem ullamcorper purus finibus, ac porta mi pretium.
            </Col>
          </Row>
        </Container>

        {/* Tabs */}
        <div id="category-tabs">
          <Tab.Container defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">By hour</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">By week</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">By location</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Advanced</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <h1 className="section-header">By hour</h1>
                    <Row>
                      <Col className="caption"><p>World languages denotes those languages that are easiest for English speakers to learn. Nullam fringilla nec enim vel fringilla. Vestibulum cursus fermentum ante a posuere. Mauris eget ligula non magna convallis varius.</p></Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3 className="small-header">The data:</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col></Col>
                      <Col></Col>
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <h1 className="section-header">By week</h1>
                    <Row>
                      <Col className="caption"><p>Moderate languages denotes those languages that are moderately difficult for English speakers to learn. Nullam fringilla nec enim vel fringilla. Vestibulum cursus fermentum ante a posuere. Mauris eget ligula non magna convallis varius.</p></Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3 className="small-header">The data:</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col></Col>
                      <Col></Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <h1 className="section-header">By location</h1>
                    <Row>
                      <Col className="caption"><p>Hard languages denotes those languages that are moderately difficult for English speakers to learn. Nullam fringilla nec enim vel fringilla. Vestibulum cursus fermentum ante a posuere. Mauris eget ligula non magna convallis varius.</p></Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3 className="small-header">Such languages include:</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col></Col>
                      <Col></Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <h1 className="section-header">Advanced languages</h1>
                    <Row>
                      <Col className="caption"><p>Advanced languages denotes those languages that are moderately difficult for English speakers to learn. Nullam fringilla nec enim vel fringilla. Vestibulum cursus fermentum ante a posuere. Mauris eget ligula non magna convallis varius.</p></Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3 className="small-header">Such languages include:</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col></Col>
                      <Col></Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    );
  }
}
export default About;