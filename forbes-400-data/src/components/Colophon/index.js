import React from "react";

import "./styles.css";

/** Colophon displays site information
 * @return {html} Colophon HTML
 */
function Colophon() {
  return (
    <div>
      <div className="header">
        <h1 className="title">Website <span
          className="title-highlight">Colophon</span>
        </h1>
      </div>
      <div className="text-container">
        <h2 className="heading">Description</h2>
        <p>This page provides information about
          how this website was created.</p>
        <p>This site was created using React and Node.</p>
        <h2 className="heading">Plugins</h2>
        <p>This website uses the plugins React Router and Chart.js.</p>
        <h2 className="heading">Data</h2>
        <p>The data for this project is publicly-sourced data
          from the 2018 Forbes 400 list. Data was converted from
          a data table to CSV and JSON files and parsed over to
          be presented graphically.</p>
      </div>
    </div>
  );
}

export default Colophon;
