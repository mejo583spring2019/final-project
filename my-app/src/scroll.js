import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import Chart from "./highchart.js";

const SectionWipesStyled = styled.div`
  overflow: hidden;
  .panel {
    height: 100vh;
    width: 100vw;
    text-align: center;
  }
  
  .panel span {
    position: relative;
    display: block;
    overflow: visible;
    top: 50%;
    font-size: 80px;
  }
  
  .panel.blue {
    background-color: #3883d8;
  }
  
  .panel.turqoise {
    background-color: #38ced7;
  }
  
  .panel.green {
    background-color: #22d659;
    margin-bottom: 800px;
  }
  
  .panel.bordeaux {
    background-color: #953543;
  }
  .panel span {
      display: inline !important;
      font-size: 12px !important;
  }
`;

const SectionWipes = () => (
  <SectionWipesStyled>
    <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
      <Scene pin>
        <div className="panel blue"><span>Panel</span></div>
      </Scene>
      <Scene pin>
        <div className="panel turqoise"><Chart></Chart> </div>
      </Scene>
      <Scene pin>
        <div className="panel green"><span>Panel</span></div>
      </Scene>
      <Scene pin>
        <div className="panel bordeaux"><span>Panel</span></div>
      </Scene>
    </Controller>
  </SectionWipesStyled>
);

export default SectionWipes;
