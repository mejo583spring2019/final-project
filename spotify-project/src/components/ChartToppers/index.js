/* eslint-disable require-jsdoc */ /* REMOVE LATER */
import React, { Component } from "react";

import "./styles.css";

class ChartToppers extends Component {
  render() {
    return (
      <div id="ChartToppersContainer">
        <h1 id="ChartToppersTitle">
            CHART TOPPERS
        </h1>
        <div id="ChartToppersTitleUnderline"></div>
        <p id="ChartToppersIntro">
          Several artists released multiple songs that made it on
          Spotify's top 100 for the year, here they are:
        </p>
        <div id="ChartToppersGrid1">
          <div className="ChartToppersSpot Middle2" id="drk">
            <div class="ChartTopperTitleS">Drake</div>
            <div class="Records3"></div>
            <div class="ChartTopperArtistS" id="drkimg"></div>
          </div>
          <div className="ChartToppersSpot Top2" id="eds">
            <div className="ChartTopperTitleL" id="edsttl">Ed Sheeran</div>
            <div className="Records4" id="edsrec"></div>
            <div class="ChartTopperArtistL" id="edsimg"></div>
          </div>
          <div className="ChartToppersSpot Top2" id="chn">
            <div className="ChartTopperTitleL" id="chnttl">
                The Chainsmokers
            </div>
            <div className="Records4" id="chnrec"></div>
            <div class="ChartTopperArtistL" id="chnimg"></div>
          </div>
          <div className="ChartToppersSpot Middle2" id="mgx">
            <div class="ChartTopperTitleS">Martin Garrix</div>
            <div class="Records3"></div>
            <div class="ChartTopperArtistS" id="mgximg"></div>
          </div>
          <div className="ChartToppersSpot Bottom12" id="bms">
            <div className="Bottom12Title">Bruno Mars</div>
            <div className="Bottom12Records"></div>
            <div className="Bottom12Artist" id="bmsimg"></div>
          </div>
          <div className="ChartToppersSpot Bottom12" id="chs">
            <div className="Bottom12Title">Calvin Harris</div>
            <div className="Bottom12Records"></div>
            <div className="Bottom12Artist" id="chsimg"></div>
          </div>
          <div className="ChartToppersSpot Bottom12" id="cbt">
            <div className="Bottom12Title">Clean Bandit</div>
            <div className="Bottom12Records"></div>
            <div className="Bottom12Artist" id="cbtimg"></div>
          </div>
          <div className="ChartToppersSpot Bottom12" id="djk">
            <div className="Bottom12Title">DJ Khaled</div>
            <div className="Bottom12Records"></div>
            <div className="Bottom12Artist" id="djkimg"></div>
          </div>
          <div className="ChartToppersSpot Bottom12" id="ids">
            <div className="Bottom12Title">Imagine Dragons</div>
            <div className="Bottom12Records"></div>
            <div className="Bottom12Artist" id="idsimg"></div>
          </div>
          <div className="ChartToppersSpot Bottom12" id="klr">
            <div className="Bottom12Title">Kendrick Lamar</div>
            <div className="Bottom12Records"></div>
            <div className="Bottom12Artist" id="klrimg"></div>
          </div>
          <div className="ChartToppersSpot Bottom12" id="kld">
            <div className="Bottom12Title">Khalid</div>
            <div className="Bottom12Records"></div>
            <div className="Bottom12Artist" id="kldimg"></div>
          </div>
          <div className="ChartToppersSpot Bottom12" id="lfi">
            <div className="Bottom12Title">Luis Fonsi</div>
            <div className="Bottom12Records"></div>
            <div className="Bottom12Artist" id="lfiimg"></div>
          </div>
          <div className="ChartToppersSpot Bottom12" id="mr5">
            <div className="Bottom12Title">Maroon 5</div>
            <div className="Bottom12Records"></div>
            <div className="Bottom12Artist" id="mr5img"></div>
          </div>
          <div className="ChartToppersSpot Bottom12" id="pmn">
            <div className="Bottom12Title">Post Malone</div>
            <div className="Bottom12Records"></div>
            <div className="Bottom12Artist" id="pmnimg"></div>
          </div>
          <div className="ChartToppersSpot Bottom12" id="wkd">
            <div className="Bottom12Title">The Weeknd</div>
            <div className="Bottom12Records"></div>
            <div className="Bottom12Artist" id="wkdimg"></div>
          </div>
          <div className="ChartToppersSpot Bottom12" id="zyn">
            <div className="Bottom12Title">ZAYN</div>
            <div className="Bottom12Records"></div>
            <div className="Bottom12Artist" id="zynimg"></div>
          </div>
        </div>

      </div>
    );
  }
}

export default ChartToppers;
