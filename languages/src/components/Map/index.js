import React, { Component } from "react";
import { Pie } from 'react-chartjs-2';
import "./styles.css";


class Map extends Component {

  chartdata = this.getData();

  getData() {

    const result = {}
    this.props.data.forEach(val => {
      result[val.region] = 1 + (result[val.region] || 0)
    });

    return {
      datasets: [{
        data: Object.values(result),
      }],
      labels: Object.keys(result),
    };
  }
  render() {
    return (<div>
      <Pie data={this.getData()} />
    </div>)

  }
}

export default Map;
