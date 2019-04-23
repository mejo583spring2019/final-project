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
        <h1 id="title">Resources</h1>
        <Container>
          <Row>
            <Col id="intro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla nec enim vel fringilla. Vestibulum cursus fermentum ante a posuere. Mauris eget ligula non magna convallis varius. In dapibus gravida ex.
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
                      <Col><p>World languages denotes those languages that are easiest for English speakers to learn. Nullam fringilla nec enim vel fringilla. Vestibulum cursus fermentum ante a posuere. Mauris eget ligula non magna convallis varius.</p></Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3 className="small-header">Such languages include:</h3>
                        <p>French</p>
                        <p>French</p>
                      </Col>
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <h1 className="section-header">By language</h1>
                    <Row>
                      <Col>Moderate languages denotes those languages that are moderately difficult for English speakers to learn. Nullam fringilla nec enim vel fringilla. Vestibulum cursus fermentum ante a posuere. Mauris eget ligula non magna convallis varius.<br /><br /><br /></Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>French</p>
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