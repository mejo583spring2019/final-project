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
class Resources extends Component {
  render() {
    return (
      <div>
        <div id="title-card">
          <h1><br />Resources</h1>
        </div>
        <Container>
          <Row>
            <Col id="intro">
              <strong>Strong language skills begin with a strong education.</strong> Check out the resources below to get started on your journey to learning a new language.
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
                    <Nav.Link eventKey="first">General resources</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">By language</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <h1 className="section-header">General resources</h1>
                    <Row>
                      <Col>
                        <p>French</p>
                        <p>French</p>
                      </Col>
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <h1 className="section-header">By language</h1>
                    <Row>
                      <Col>
                        <p>French</p>
                      </Col>
                      <Col>
                        <p>French</p>
                        <p>French</p>
                      </Col>
                      <Col>
                        <p>French</p>
                        <p>French</p>
                      </Col>
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
export default Resources;