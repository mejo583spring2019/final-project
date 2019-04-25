import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import Chart from "./highchart.js";
import background from "./img/background.png";


const SectionWipesStyled = styled.div`
  overflow: hidden;
  .panel {
    height: 100vh;
    width: 100vw;
    text-align: center;
  }
  
  .panel span {
    position: relative;
    display: inline;
    overflow: visible;
    top: 50%;
    font-size: 12px;
  }
  
  .panel.blue {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-postion: 50% 50%;
    background-size: cover;
    background-attachment: fixed;
  }
  
  .panel.turqoise {
    background-color: white;
    padding-top: 20px;
  }
  
  .panel.green {
    background-color: #22d659;
    margin-bottom: 800px;
  }
  
  .panel.bordeaux {
    background-color: #953543;
  }

  #got{
      padding-top: 12%;
      max-width: 70%;
  }

  #frontTitle{
      font-family: Times New Roman;
      font-size: 80px;
      virtical-align: bottom;
      margin-bottom: 3px;
      padding-bottom: 3px;
      padding-top: 80px;
      margin-top: 10%;
      color: black;
  }

`;

const SectionWipes = () => (
  <SectionWipesStyled>
    <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
      <Scene pin>
        <div className="panel blue">
          <img id="got" src={require("./img/got.png")} alt="Game of Thrones Logo"></img>
          <p id="frontTitle">Data visualization</p>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel green"> <p>Hi there!</p> </div>
      </Scene>
      <Scene pin>
        <div className="panel turqoise"> <Chart></Chart> </div>
      </Scene>
      <Scene pin>
        <div className="panel bordeaux"><span>Panel</span></div>
      </Scene>
    </Controller>
  </SectionWipesStyled>
);

export default SectionWipes;
