import React, { Component } from 'react';
import * as d3 from "d3";

class Map extends Component {
  el = React.createRef();

  /** Creates an SVG from D3 that will be appended to the page. */
  createSVG() {
    return d3.select("body")
      .append("svg")
      .attr("width", 960)
      .attr("height", 500);
  }

  /** Draws the map within the svg element.
   * @param {any} svg
  */
  drawChart(svg) {
    var projection = d3.geo.albersUsa()
      .scale(1070)
      .translate([width / 2, height / 2]);

    var path = d3.geo.path()
      .projection(projection);

    svg.append("rect")
      .attr("class", "background")
      .attr("width", 960)
      .attr("height", 500);

    let g = svg.append("g");

    d3.json("/mbostock/raw/4090846/us.json", function (error, us) {
      if (error) throw error;

      g.append("g")
        .attr("id", "states")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.states).features)
        .enter().append("path")
        .attr("d", path)
        .on("click", clicked);

      g.append("path")
        .datum(topojson.mesh(us, us.objects.states, function (a, b) { return a !== b; }))
        .attr("id", "state-borders")
        .attr("d", path);
    });
  }

  clicked(d) {
    var x, y, k;

    if (d && centered !== d) {
      var centroid = path.centroid(d);
      x = centroid[0];
      y = centroid[1];
      k = 4;
      centered = d;
    } else {
      x = width / 2;
      y = height / 2;
      k = 1;
      centered = null;
    }

    g.selectAll("path")
      .classed("active", centered && function (d) { return d === centered; });

    g.transition()
      .duration(750)
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
  }

  /** Once data has mounted onto the page
   * this will call render.
   */
  componentDidMount() {
    let svg = this.createSVG();
    this.drawChart(svg);
  };

  /** Renders a div that contains the map. 
   * @return {any} JSX content
  */
  render() {
    return (
      <h2> Zoomable Map</h2 > ,
      <div id="zoomablemap" ref={el => (this.el = el)} />
    );
  }
}

export default Map;
