import React from "react";
import { render } from "react-dom";

/**
 * @return {map}
 */
class Map extends React.Component {
  /**
 * @return {map}
 */
  render() {
    return (
      <div>
        <img src={require("./img/faces.jpg")} usemap="#image-map" alt="game of thrones character faces"></img>
        <map name="image-map">
          <area target="_blank" alt="dany" title="dany" href="" coords="681,95,91" shape="circle"/>
          <area target="_blank" alt="jamie" title="jamie" href="" coords="960,255,86" shape="circle"/>
        </map>
      </div>
    );
  }
}
export default Map;
