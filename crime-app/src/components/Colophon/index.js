import React, { Component } from "react";

/** My Class */
class Colophon extends Component {
  /** Renders the data onto the page.
  * @return {any} JSX content
  */
  render() {
    return (
      <div>
        <h1 className="marPos">Colophon</h1>
        <div className="maxWidth">
          <p>
            The reason I decided to create a website displaying visual data on
            how crime has changed over the years in the United States is because
            of a conversation I had with my family over dinner for my birthday.
            We argued about how crime is supposedly increasing in the United
            States, but I disagreed on the matter believing that crime is
            actually decreasing.
          </p>
          <p>
            I wanted to find actual data to help back up my beliefs and share it
            with whoever might be curious to know how crime has changed over the
            years in the country. I found data from the <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://ucr.fbi.gov/crime-in-the-u.s/2015/crime-in-the-u.s.-2015/resource-pages/downloads/download-printable-files">
              FBI’s
            </a> website database showing crime statistics relating to violent
            and non-violent crimes over the years. I also used various other
            sources such as articles to help capture a better picture as to why
            crime is falling in the United States and what crimes occur most
            commonly in the country.
          </p>
        </div>
        <h2>How Data Appear on the App</h2>
        <div className="maxWidth">
          <p>
            In order to get data to appear in the app, I cleaned the raw data
            from an excel sheet and converted it to a CSV file. From there I
            used <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://nodejs.org/api/fs.html">
              Node.js
            </a> to convert and clean up my data so that it could be read
            and used for <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://canvasjs.com/docs/charts/integration/react/">
              CanvasJS
            </a> charts. I also used several other tools to help make my
            website appear more organized to users who will likely view it.
          </p>
        </div>
        <h2>Frontend</h2>
        <div className="maxWidth">
          <ul>
            <p>
              <li>
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://reactjs.org/">
                  React
                </a> – JavaScript library
              </li>
            </p>
            <p>
              <li>
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://react-bootstrap.github.io/components/tabs/">
                  Bootstrap
                </a> – CSS framework
              </li>
            </p>
            <p>
              <li>
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.pexels.com/photo/man-lights-legs-silhouette-8827/">
                  Pexels
                </a> – Free images
              </li>
            </p>
            <p>
              <li>
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.dafont.com/">
                  DaFont
                </a> – Free fonts
              </li>
            </p>
          </ul>
        </div>
        <h2>Hosting</h2>
        <div className="maxWidth">
          <ul>
            <p>
              <li>
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://pages.github.com/">
                  GitHub Pages
                </a> – Fast, easy and affordable way for deployment
              </li>
            </p>
          </ul>
        </div>
        <h2>Computer</h2>
        <div className="maxWidth">
          <ul>
            <p>
              <li>MacBook Pro running MacOS High Sierra 10.13.6</li>
            </p>
          </ul>
        </div>
      </div >
    );
  }
}

export default Colophon;
