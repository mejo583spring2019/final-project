import React, { Component } from "react";
// Bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
          <Row>
            <Col className="links">
              <h2>General</h2>
              <h4>Rosetta Stone</h4>
              <p>Named for the ancient stone slab that helped decipher tktk,<a href="https://www.rosettastone.com" target="_blank" rel="noopener noreferrer">Rosetta Stone</a> has helped millions to learn new languages since its debut in 1992. As of April 2019 the software offers lessons in 28 languages, including Mandarin, Dutch, Russian, and more.</p>
              <h4>Duolingo</h4>
              <p>One of the most popular education apps on Apple's App Store,<a href="https://www.duolingo.com/" target="_blank" rel="noopener noreferrer">Duolingo*</a> offers lessons in over 30 languages to students on-the-go. Despite its limitations, the app </p>
              <h4>Babbel</h4>
              <p><a href="https://www.babbel.com/" target="_blank" rel="noopener noreferrer">Babbel*</a></p>
              <h4>Busuu</h4>
              <p><a href="https://www.busuu.com/" target="_blank" rel="noopener noreferrer">Busuu</a></p>
              <h4>Memrise</h4>
              <p><a href="https://www.memrise.com/" target="_blank" rel="noopener noreferrer">Memrise*</a></p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

            </Col>
            <Col className="links">
              <h2>By language</h2>
              <p>Online resources sorted by language.</p>
              <p><a href="https://www.reddit.com/r/languagelearning/wiki/index" target="_blank" rel="noopener noreferrer">Reddit</a></p>

              <p><a href="https://sites.google.com/site/links4languages/" target="_blank" rel="noopener noreferrer">Links4Languages</a></p>
              <p><a href="https://http://www.languagelinksdatabase.com/free-language-resources/" target="_blank" rel="noopener noreferrer">Language Links Database</a></p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p><em>*Available on mobile</em></p>
            </Col>
          </Row>
        </Container>


      </div>
    );
  }
}
export default Resources;