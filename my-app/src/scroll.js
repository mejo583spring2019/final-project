import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import Chart from "./highchart.js";
import background from "./img/background.png";
import Barchart from "./barchart.js";


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
  
  .panel.first {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-postion: 50% 50%;
    background-size: cover;
    background-attachment: fixed;
  }
  
  .panel.graphic {
    background-color: #F2D8A7;
    margin-bottom: 300px;
  }
  
  .panel.grey {
    background-color: #343434;
    margin-bottom: 300px;

  }
  
  .panel.blue {
    background-color: #4B666B;
    height: 120vh !important;
  }

  .panel.red {
    background-color: rgba(151, 69, 70, 1);
    height: 120vh !important;
  }

  #got{
      padding-top: 12%;
      max-width: 70%;
  }

  #characters{

  }

  #frontTitle{
      font-family: Times New Roman;
      font-size: 70px;
      virtical-align: bottom;
      margin-bottom: 3px;
      padding-bottom: 3px;
      padding-top: 80px;
      margin-top: 10%;
      color: black;
  }

  #heroIntro{
    font-family: Times New Roman;
    font-size: 45px;
    padding-top: 30px;
    padding-left: 13%;
    padding-right: 13%;
    padding-bottom: 1px;
    margin-bottom: 1px;
    color: #fffaf0;
  }

  #chartText{
    font-family: Times New Roman;
    font-size: 20px;
    padding-top: 20px;
    margin-top: 1px;
    padding-left: 10%;
    padding-right: 10%;
    color: #fffaf0; 
    text-align: left;
  }


`;

const SectionWipes = () => (
  <SectionWipesStyled>
    <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
      <Scene pin>
        <div className="panel first">
          <img id="got" src={require("./img/got.png")} alt="Game of Thrones Logo"></img>
          <p id="frontTitle">Data visualization</p>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel grey">
          <p id="heroIntro">All of our Game of Thrones heroes are deadly,
          but who has been the most dangerous?</p>
          <p id="chartText">The following charts demonstrate which heroes
           and houses have been the most ruthless in their quest for the
           Iron Throne. <br/> <br/>In the first chart, Deadliest Houses,
           murders are tallied according to deaths the characters have directly
           inflicted. Deaths characters "ordered" or deaths of people who
           were not named characters in the TV show script do not count.
           Click and drag the characters between houses if you disagree with the
           original placement (for example, you may want to move Jon Snow
           out of House Stark...). <br/><br/> In the second chart, Deadliest
           Characters, murders are tallied according to all on-screen kills
           as well as prominent off-screen kills that are confirmed or assumed.
          <br/> <br/><strong> WARNING: </strong> These charts are updated
           through season 8 episode 2 and they do contain spoilers!</p>
          <img id="characters" src={require("./img/characters.png")} alt="Game of Thrones characters artwork"></img>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel graphic"> <Chart></Chart> </div>
      </Scene>
      <Scene pin>
        <div className="panel blue"> <Barchart></Barchart></div>
      </Scene>
      <Scene pin>
        <div className="panel red"></div>
      </Scene>
    </Controller>
  </SectionWipesStyled>
);

export default SectionWipes;
