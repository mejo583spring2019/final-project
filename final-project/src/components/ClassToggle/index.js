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
    margin: 50% 0;
  }

  .graph {
    position: absolute;
    padding-top: 2%;
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

  .graph-scroll-below .graph {
    position: absolute;
    bottom: 0px;
    top: auto;
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
    max-width: 100%;
    width: 640px;
    position: relative;
    margin-left: auto;
    margin-right: auto;

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

  .text-box {
    padding-top: 0px;
    padding-bottom: 50vh;
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
            duration={"100%"}
          >
            <div className="contained">
              <div className="graph" id="nc-map-container">
                <div id="nc-map">
                  <img src="./img/nc-outline.svg" alt="a map of NC" />
                </div>
              </div>
              <div className="graph__prose">
                <div className="trigger"></div>
                <div className="trigger text-box">
                  <p>
                    This is a paragraph with some information in it!
                  </p>
                </div>
                <PackedChart />
              </div>
            </div>
          </Scene>
        </Controller>
      </ClassToggleStyled >
    );
  }
}

export default ClassToggle;
