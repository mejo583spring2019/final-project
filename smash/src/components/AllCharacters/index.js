import React, { Component } from 'react';
import Chart from "chart.js";
import { Bar, Line, Pie } from 'react-chartjs-2';

class AllCharacters extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      chartData: {},
      charLinks: []
    };
  }

  chartRef = React.createRef();

  componentDidMount() {

    fetch("http://beta-api-kuroganehammer.azurewebsites.net/api/characters/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
            chartData: {
              labels: result.map(item => (item.DisplayName)),
              datasets: [
                {
                  label: "number",
                  data: result.map(item => (item.OwnerId)),
                  backgroundColor: result.map(item => (item.ColorTheme))
                }
              ]
            }
          });
          // console.log(result[0].Links[2].Href);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    // Chart.js stuff

  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="chart">
            <Bar
              data={this.state.chartData}
              width={100}
              height={500}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
      );
    }
  }
}

export default AllCharacters;