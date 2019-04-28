/* eslint-disable require-jsdoc */ /* REMOVE LATER */
import React, { Component } from "react";

import "./styles.css";

class Top10 extends Component {
  render() {
    return (
      <div id="Top10Container">
        <h1 id="Top10Title">
          TOP 10
        </h1>
        <div id="Top10TitleUnderline"></div>
        <p id="Top10Intro">
          These are the <span id="IntroSpan">Top 10 Worldwide </span>
          songs of 2017. Click on a song to learn more!
        </p>
        <div id="Top10Grid">
          <div className="Top10Spot" id="A01">
            <div className="Top10SpotCover1">
              <div id="Number1NumDiv">
                <p id="Number1SpotNumber">#1</p>
              </div>
              <div id="Number1TitleDiv">
                <p id="Number1SpotTitle">Shape of You</p>
              </div>
              <div id="Number1ArtistDiv">
                <p id="Number1SpotArtist">Ed Sheeran</p>
              </div>
              <div id="Number1ArtworkDiv">
                <div id="Number1Artwork"></div>
              </div>
            </div>
          </div>
          <div className="Top10Spot" id="A02">
            <div className="Top10SpotCover2-4">
              <p className="Top10SpotNumber">#2</p>
              <p className="Top10SpotTitle">
                Despacito - Remix (Feat. Justin Bieber
                &amp; Daddy Yankee)
              </p>
              <p className="Top10SpotArtist">
                Luis Fonsi
              </p>
            </div>
          </div>
          <div className="Top10Spot" id="A03">
            <div className="Top10SpotCover2-4">
              <p className="Top10SpotNumber">#3</p>
              <p className="Top10SpotTitle">
                Despacito (Feat. Daddy Yankee)
              </p>
              <p className="Top10SpotArtist">
                Luis Fonsi
              </p>
            </div>
          </div>
          <div className="Top10Spot" id="A04">
            <div className="Top10SpotCover2-4">
              <p className="Top10SpotNumber">#4</p>
              <p className="Top10SpotTitle">
                Something Just Like This (Feat. Coldplay)
              </p>
              <p className="Top10SpotArtist">
                The Chainsmokers
              </p>
            </div>
          </div>
          <div className="Top10Spot" id="A05">
            <div className="Top10SpotCover5-10">
              <p className="Top10SpotNumber">#5</p>
              <p className="Top10SpotTitle">
                I'm the One (Feat. Justin Bieber, Quavo, Chance the Rapper,
                &amp; Lil Wayne)
              </p>
              <p className="Top10SpotArtist">
                DJ Khaled
              </p>
            </div>
          </div>
          <div className="Top10Spot" id="A06">
            <div className="Top10SpotCover5-10">
              <p className="Top10SpotNumber">#6</p>
              <p className="Top10SpotTitle">HUMBLE.</p>
              <p className="Top10SpotArtist">
                Kendrick Lamar
              </p>
            </div>
          </div>
          <div className="Top10Spot" id="A07">
            <div className="Top10SpotCover5-10">
              <p className="Top10SpotNumber">#7</p>
              <p className="Top10SpotTitle">
                It Ain't Me (Feat. Selena Gomez)
              </p>
              <p className="Top10SpotArtist">
                Kygo
              </p>
            </div>
          </div>
          <div className="Top10Spot" id="A08">
            <div className="Top10SpotCover5-10">
              <p className="Top10SpotNumber">#8</p>
              <p className="Top10SpotTitle">Unforgettable</p>
              <p className="Top10SpotArtist">
                French Montana
              </p>
            </div>
          </div>
          <div className="Top10Spot" id="A09">
            <div className="Top10SpotCover5-10">
              <p className="Top10SpotNumber">#9</p>
              <p className="Top10SpotTitle">That's What I Like</p>
              <p className="Top10SpotArtist">
                Bruno Mars
              </p>
            </div>
          </div>
          <div className="Top10Spot" id="A10">
            <div className="Top10SpotCover5-10">
              <p className="Top10SpotNumber">#10</p>
              <p className="Top10SpotTitle">
                I Don't Wanna Live Forever (Feat. Taylor Swift)
              </p>
              <p className="Top10SpotArtist">
                Zayn
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Top10;
