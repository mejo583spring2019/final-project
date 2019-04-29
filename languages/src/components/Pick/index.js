import React, { Component } from "react";


// Stylesheets
import "./styles.css";

// Bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

// Components and data
import Hour from "../Hour";
import Week from "../Week";
import Map from "../Map";
import category1 from "../Data/category1.js";
import category2 from "../Data/category2.js";
import category3 from "../Data/category3.js";
import category4 from "../Data/category4.js";


// COMPONENT CODE BEGINS
/**
 * About page describes the different categories
 * of language data.
 *  @return {any} JSX content
 */
class About extends Component {
  /**
 * Renders Pick page.
 * @return {any} JSX
 */
  render() {
    return (
      <div>
        <div id="title-card">
          <h1><br />Picking a language</h1>
        </div>
        <Container>
          <Row>
            <Col id="intro">
              <p> <strong>So you"re ready to begin
                 learning a second language.</strong> But
                  how do you know which is right for you? </p>
              <p>Use our interactive graphs below to
                 discover which languages might best
                  fit your schedule or travel plans.
                   Then, head over to our resources
                    section to find the tools that will
                     help you master your skills.
              <em className="blue"> Keep in mind
                         that the information below is based
                          on averages; the ability of an
                           individual to learn a new language
                            may vary based on background,
                             natural ability, and quality of
                           instruction.</em></p>
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
                    <Nav.Link eventKey="first">By region</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">By week</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">By hour</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              {/* CHART ONE - MAP*/}
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <h1 className="section-header">By region</h1>
                    <Row>
                      <Col className="caption"><p>Determines
                         which regions of the world contain the
                          highest concentration of each level of
                           language difficulty. For example, Europe
                            contains the highest concentration of
                             World (or Category I) languages.</p></Col>
                    </Row>
                    <Row>
                      <Col sm={6}>
                        <h4>I. World languages</h4>
                        <Map data={category1} />
                        <br />
                        <h4>II. Moderate languages</h4>
                        <Map data={category2} />
                        <br />
                      </Col>
                      <Col sm={6}>
                        <h4>III. Difficult languages</h4>
                        <Map data={category3} />
                        <br />
                        <h4>IV. Advanced languages</h4>
                        <Map data={category4} />
                        <br />
                      </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </Tab.Pane>

                  {/* CHART TWO */}
                  <Tab.Pane eventKey="second">
                    <h1 className="section-header">By week</h1>
                    <Row>
                      <Col className="caption"><p>Estimates
                         the number of weeks it takes to
                          learn a particular language.</p></Col>
                    </Row>
                    <Row>
                      <Col className="chart"><Week /></Col>

                    </Row>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </Tab.Pane>

                  {/* CHART THREE*/}
                  <Tab.Pane eventKey="third">
                    <h1 className="section-header">By hour</h1>
                    <Row>
                      <Col className="caption"><p>Estimates
                         the number of hours it takes to
                          learn a particular language.</p></Col>
                    </Row>
                    <Row>
                      <Col><Hour /></Col>

                    </Row>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
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
