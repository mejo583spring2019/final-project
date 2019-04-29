import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

/**
     * Creates Week component.
     * @return {any} Hour
     */
class Map extends Component {
  /**
 * Gets chart data
 * @return {any} data
 */
  getData() {
    const result = {};
    this.props.data.forEach((val) => {
      result[val.region] = 1 + (result[val.region] || 0);
    });


    return {
      datasets: [{
        data: Object.values(result),
        backgroundColor: ["#ff5959", "#C1EBF9", "#f1f242", "#007BFF"],
      }],
      labels: Object.keys(result),
      options: {
        responsive: true,
        maintainAspectRation: false,
      },
    };
  }

  /**
   * Renders component.
   * @return {any} JSX
   */
  render() {
    return (<div>
      <Pie data={this.getData()} style={{ width: 200, height: 100 }} />
    </div>);
  }
}

export default Map;
