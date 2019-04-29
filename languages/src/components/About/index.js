import React, { Component } from "react";
// Bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

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
          <h1><br />About</h1>
        </div>
        <Container>
          <Row>
            <Col id="intro">
              <p>The information on this website is based on
                 data pulled from the Foreign Language Institute.
                  The estimates assume that students are native
                   English speakers with no prior knowledge of
                    a second language, as well as that the students
                     have a high aptitude for classroom learning of
                      foreign languages.</p>
              <p>Languages are organized into four categories, each
                 of which varies in degree of difficulty for
                  native English speakers. The Foreign Language
                   Institute notes that languages within the same
                    category may vary in individual difficulty. </p>
              <p><em className="blue">Students should note
               that this list is not exhaustive.</em> This website
                    provides information and resources on the 70
                 most studied languages around the world.</p>
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
                    <Nav.Link eventKey="first">World languages</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Moderate languages</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Hard languages</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Advanced languages</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <img
                      className="measure"
                      alt="earth"
                      src={require("../../media/world.png")} />
                    <h1 className="section-header">World languages</h1>
                    <Row>
                      <Col className="caption"><p>Also known as Category I languages, world languages denotes those languages that are easiest for English speakers to learn and which closely cognate with English.</p></Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3 className="small-header">World languages include:</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col>Danish<br />Dutch<br />French</Col>
                      <Col>Italian<br />Norwegian<br />Portuguese</Col>
                      <Col>Romanian<br />Spanish<br />Swedish</Col>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <img
                      className="measure"
                      alt="earth"
                      src={require("../../media/moderate.png")} />
                    <h1 className="section-header">Moderate languages</h1>
                    <Row>
                      <Col className="caption"><p>Also known as Category II languages, moderate languages denotes those languages which take slightly longer for native English speakers to master.</p></Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3 className="small-header">Moderate languages include:</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col>German<br />Haitian</Col>
                      <Col>Indonesian<br />Malay</Col>
                      <Col>Swahili</Col>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="third">
                    <img
                      className="measure"
                      alt="earth"
                      src={require("../../media/difficult.png")} />
                    <h1 className="section-header">Hard languages</h1>
                    <Row>
                      <Col className="caption"><p>Also known as Category III languages, hard languages denotes those languages that are relatively difficult for English speakers to learn. Languages in this category, the largest of the four, have significant linguistic and/or cultural differences from English.</p></Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3 className="small-header">Hard languages include:</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col>Albanian<br />Amharic<br />Armenian<br />Azerbaijani<br />Bengali<br />Bulgarian<br />Burmese<br />Czech<br />Dari<br />Estonian<br />Farsi<br />Finnish<br />Georgian<br />Greek<br />Gujarati<br />Hausa<br />Hebrew</Col>

                      <Col>Hindi<br />Hungarian<br />Icelandic<br />Kazakh<br />Khmer<br />Kurdishh<br />Kyrgyz<br />Lao<br />Latvian<br />Lithuanian<br />Macedonian<br />Mongolian<br />Nepali<br />Pashto<br />Polish<br />Russian<br />Serbo-Croatian</Col>

                      <Col>Sinhala<br />Slovak<br />Slovenian<br />Somali<br />Tagalog<br />Tajiki<br />Tamil<br />Telugu<br />Thai<br />Tibetan<br />Turkish<br />Turkmen<br />Ukrainian<br />Urdu<br />Uzbek<br />Vietnamese</Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <img
                      className="measure"
                      alt="earth"
                      src={require("../../media/advanced.png")} />
                    <h1 className="section-header">Advanced languages</h1>
                    <Row>
                      <Col className="caption"><p>Also known as Category IV languages, advanced languages denotes those languages which are exceptionally difficult for native English speakers to learn. Languages in this category are likely to require over a year and a half to master.</p></Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3 className="small-header">Advanced languages include:</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col>Arabic<br />Chinese (Cantonese and Mandarin)</Col>
                      <Col>Japanese<br />Korean</Col>
                    </Row>
                    <br />
                    <br />
                    <br />
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