/* eslint-disable require-jsdoc */ /* REMOVE LATER */
import React, { Component } from "react";

import "./styles.css";

class Top10 extends Component {
  render() {
    return (
      <div className="Top10Container">
        <p id="Top10Intro">Click on each track to find out more</p>
        <div className="Top10Grid">
          <div className="Top10Spot" id="A01">
            <div className="Top10SpotCover1">
              <p id="Number1SpotNumber">1</p>
              <p id="Number1SpotText">Shape of You by Ed Sheeran</p>
            </div>
          </div>
          <div className="Top10Spot" id="A02">
            <div className="Top10SpotCover2-4">
              <p className="Top10SpotNumber">#2</p>
              <p className="Top10SpotText">Despacito - Remix (Feat. Justin Bieber &amp; Daddy Yankee) by Luius Fonsi</p>
            </div>
          </div>
          <div className="Top10Spot" id="A03">
            <div className="Top10SpotCover2-4">
              <p className="Top10SpotNumber">#3</p>
              <p className="Top10SpotText">Despacito (Feat. Daddy Yankee) by Luis Fonsi</p>
            </div>
          </div>
          <div className="Top10Spot" id="A04">
            <div className="Top10SpotCover2-4">
              <p className="Top10SpotNumber">#4</p>
              <p className="Top10SpotText">Something Just Like This (Feat. Coldplay) by The Chainsmokers</p>
            </div>
          </div>
          <div className="Top10Spot" id="A05">
            <div className="Top10SpotCover5-10">
              <p className="Top10SpotNumber">#5</p>
              <p className="Top10SpotText">I'm the One (Feat. Justin Bieber, Quavo, Chance the Rapper, &amp; Lil Wayne) by DJ Khaled</p>
            </div>
          </div>
          <div className="Top10Spot" id="A06">
            <div className="Top10SpotCover5-10">
              <p className="Top10SpotNumber">#6</p>
              <p className="Top10SpotText">HUMBLE. by Kendrick Lamar</p>
            </div>
          </div>
          <div className="Top10Spot" id="A07">
            <div className="Top10SpotCover5-10">
              <p className="Top10SpotNumber">#7</p>
              <p className="Top10SpotText">It Ain't Me (Feat. Selena Gomez) by Kygo</p>
            </div>
          </div>
          <div className="Top10Spot" id="A08">
            <div className="Top10SpotCover5-10">
              <p className="Top10SpotNumber">#8</p>
              <p className="Top10SpotText">Unforgettable by French Montana</p>
            </div>
          </div>
          <div className="Top10Spot" id="A09">
            <div className="Top10SpotCover5-10">
              <p className="Top10SpotNumber">#9</p>
              <p className="Top10SpotText">That's What I Like by Bruno Mars</p>
            </div>
          </div>
          <div className="Top10Spot" id="A10">
            <div className="Top10SpotCover5-10">
              <p className="Top10SpotNumber">#10</p>
              <p className="Top10SpotText">I Don't Wanna Live Forever (Feat. Taylor Swift) by Zayn</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Top10;
