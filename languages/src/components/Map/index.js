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
        backgroundColor: ["#ff5959", "#C1EBF9", "#f1f242", "#007BFF"],
      }],
      labels: Object.keys(result),
    };
  }
  render() {
    return (<div>
      <Pie data={this.getData()} style={{ width: 400, height: 200 }} />
    </div>)

  }
}

export default Map;
