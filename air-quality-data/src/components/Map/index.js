import React, { Component } from "react";
import * as d3 from "d3";
import countriesGeoDataSource from "../../data/worldMapData.geojson";
import aqData from "../../data/aqData.json";
import "./style.css";


class Map extends Component {
  constructor() {
    super();
    this.state = {
      worldData: [],
      worldData2016: [],
      countryProp: { name: " No Country Selected", airQuality: null },
      clickLocation: {},
    };
    this.geoData = countriesGeoDataSource.features;
    this.colorScale = d3.scaleLinear().domain([0, 204])
        .interpolate(d3.interpolateHcl)
        .range([d3.rgb("#fce3e3"), d3.rgb("#ba0803")]);
    this.width = 1000;
    this.height = 500;
  }

  projection() {
    return d3.geoMercator()
        .scale(100)
        .translate([800 / 2, 450 / 2]);
  }


  loadData() {
    fetch(countriesGeoDataSource)
        .then((response) => {
          if (response.status !== 200) {
            // console.log(`There was a problem: ${response.status}`);
            return;
          }
          response.json().then((countriesGeoDataSource) => {
            let completeData = [];
            completeData = countriesGeoDataSource.features;
            completeData.forEach((c) => {
              const geoCode = c.properties.ISO_A3;
              aqData[2016].forEach((p) => {
                if (geoCode === p.code) {
                  c.aq = p["PM2.5"];
                }
              });
            });
            // console.log(completeData);

            this.setState({
              worldData: countriesGeoDataSource.features,
              worldData2016: completeData,
            });
          });
        });
  }


  handleCountryClick() {
    return <div id="tooltip">
      <div>{`Country: ${this.state.countryProp.name}`}</div>
      <div>{`PM 2.5 Levels: ${Math.round(this.state.countryProp.airQuality)}`}</div>
    </div>;
  }

  componentDidMount() {
    this.loadData();
    // console.log(this.state.worldData2016)
  }
  render() {
    return (
      <div>
        <h2>2016 Global PM2.5 Levels</h2>
        <svg width={this.width} height={this.height} viewBox="0 0 800 450">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#fce3e3", stopOpacity: 1 }} />
              <stop offset="200%" style={{ stopColor: "#ba0803", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <g className="countries">
            {this.state.worldData2016.map((d, i) => (
              < path
                key={`path-${i}`}
                d={d3.geoPath().projection(this.projection())(d)}
                className="country"
                fill={
                  this.colorScale(this.state.worldData2016[i].aq)
                }
                onClick={(e) => {
                  // console.log("clientX: " + e.clientX +
                  //     " - clientY: " + e.clientY)
                  // console.log(`running on ${d.properties.ADMIN}`);
                  this.setState(
                      {
                        countryProp: { name: d.properties.ADMIN, airQuality: d.aq },
                        // clickLocation: { clickX: e.clientX, clickY: e.clientY }
                      });
                  // console.log(this.state.clickLocation.clickX)
                  // if (this.clickLocation) { this.handleCountryClick({}); }
                  this.handleCountryClick({});
                }}
                stroke="#FFFFFF"
                strokeWidth={0.5}
              />
            ))
            }
          </g>
          <g className="markers">
            <circle id="raleigh-marker"
              cx={this.projection()([-78, 56])[0]}
              cy={this.projection()([12, 35])[1]}
              r={5}
              fill="#a0a0a0"
              className="marker"
            />
            <text textAnchor="middle" x="195" y="175">Raleigh, NC, USA</text>
            <circle id="cph-marker"
              cx={this.projection()([12, 16])[0]}
              cy={this.projection()([56, 55])[1]}
              r={5}
              fill="#a0a0a0"
              className="marker"
            />
            <text textAnchor="middle" x="490" y="105">Copenhagen, DK</text>
          </g>
          <g id="legend"
          >
            <rect id="legend-bar" width={this.width / 2} height="20" style={{
              fill: "url(#gradient)",
              strokeWidth: .5,
              stroke: "#ffffff",
              y: 420,
              opacity: .9,
            }}
            />
            <text textAnchor="middle" x="10" y="436"> 0</text>
            <text textAnchor="middle" x="480" y="436"> 204</text>
          </g>

        </svg>

        <div>
          {this.handleCountryClick()}
        </div>
      </div >
    );
  }
}

export default Map;
