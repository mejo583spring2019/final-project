import React, { Component } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import PackedChart from "../PackedChart";

const ClassToggleStyled = styled.div`
  .contained {
    position: relative;
    margin-bottom: 1rem;
    width: 70vw;
    text-align: center;
    margin: 15% 0;
    font-size: 1.5rem;
  }

  .graph {
    position: absolute;
    padding-top: 8%;
    top: 0;
    left: 0;
    bottom: auto;
    width: 100%;
  }
  
  .graph-scroll-fixed .graph {
    position: fixed;
    top: 0px;
    width: 70vw;
    left: 0;
    right: 0;
  }

  #nc-map-container {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  #nc-map {
    height: 455px;
    width: 100%;
    margin: auto;

    &img {
      height: 100%;
      width: 100%;
    }
  }

  .graph__prose {
    z-index: 3;
    max-width: 70%;
    position: relative;
    margin: 0 auto;

    p {
      margin: 0;
      background-color: rgba(255,255,255,0.8);
      padding: 1%
    }
  }

  .trigger:first-of-type {
    padding-top: 0px; 
    padding-bottom: 25vh;
  }

  .img__box {
    width: 80vw;
    padding-top: 0px;
    margin-bottom: 30vh;

    &img {
      width: 100%;
      margin: 0 auto;
    }
  }

  .text__box {
    min-width: 50vw;
    width: 680px;
    padding: 2%;
    margin-bottom: 20vh;
  }

  .graph__prose>div {
    line-height: 1.6;
  }
`;

/** Hello there */
class ClassToggle extends Component {
  /** Render out a Controller with scenes in it
   * @return {any} <Controller><Scene>JSX</Scene></Controller>
   */
  render() {
    return (
      <ClassToggleStyled>
        <Controller>
          <Scene
            classToggle={[".contained", "graph-scroll-fixed"]}
            triggerElement=".trigger"
            duration={"150%"}
          >
            <div className="contained">
              <div className="graph" id="nc-map-container">
                <div id="nc-map">
                  <img src="./img/nc-outline.svg" alt="a map of NC" />
                </div>
              </div>
              <div className="graph__prose flex-column">
                <div className="trigger"></div>
                <div className="trigger img__box">
                  <img src="./img/site_logo.png" alt="UNC Systems Logo" />
                </div>
                <div className="trigger text__box">
                  <p>
                    The UNC System
                  </p>
                </div>
                <div className="trigger">
                  <PackedChart />
                </div>
              </div>
            </div>
          </Scene>
        </Controller>
      </ClassToggleStyled >
    );
  }
}

export default ClassToggle;
