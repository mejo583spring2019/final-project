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
        <h1 id="title">About</h1>
        <Container>
          <Row>
            <Col id="intro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla nec enim vel fringilla. Vestibulum cursus fermentum ante a posuere. Mauris eget ligula non magna convallis varius. In dapibus gravida ex. Phasellus iaculis sem ullamcorper purus finibus, ac porta mi pretium. Maecenas ac tellus imperdiet, fermentum ipsum id, consequat libero. Vivamus sed ex id urna iaculis iaculis et ut ligula. Etiam tempus metus ut urna euismod, nec sodales sem sagittis. Vestibulum ac mi interdum, eleifend mauris ut, dignissim dolor.
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
                    <Nav.Link eventKey="first">World</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Moderate</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Hard</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Advanced</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <img className="category-image" alt="earth" src={require('../../media/planet.png')} />
                    <h1 className="section-header">World languages</h1>
                    <Row>
                      <Col><p>World languages denotes those languages that are easiest for English speakers to learn. Nullam fringilla nec enim vel fringilla. Vestibulum cursus fermentum ante a posuere. Mauris eget ligula non magna convallis varius.</p></Col>
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

                  <Tab.Pane eventKey="second">
                    <h1 className="section-header">Moderate languages</h1>
                    <Row>
                      <Col>Moderate languages denotes those languages that are moderately difficult for English speakers to learn. Nullam fringilla nec enim vel fringilla. Vestibulum cursus fermentum ante a posuere. Mauris eget ligula non magna convallis varius.</Col>
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
                  <Tab.Pane eventKey="third">
                    <h1 className="section-header">Hard languages</h1>
                    <Row>
                      <Col>Hard languages denotes those languages that are difficult for English speakers to learn. Nullam fringilla nec enim vel fringilla. Vestibulum cursus fermentum ante a posuere. Mauris eget ligula non magna convallis varius.</Col>
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
                      <Col>Advanced languages denotes those languages that are extremely difficult for English speakers to learn. Nullam fringilla nec enim vel fringilla. Vestibulum cursus fermentum ante a posuere. Mauris eget ligula non magna convallis varius.</Col>
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