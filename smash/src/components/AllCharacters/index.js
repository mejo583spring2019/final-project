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
    this.attrs = [];
    this.expectedCount = 0;
    this.initialResult = [];
    this.eachCharAttr = [];
    this.eachCharName = [];
  }

  chartRef = React.createRef();

  checkCount() {
    console.log("Checking count");
    if (Object.keys(this.attrs).length < this.expectedCount) {
      setTimeout(this.checkCount.bind(this), 100);
    } else {
      let cleanedAttrs = Object.values(this.attrs);
      for (let i = 0; i < 58; i++) {
        this.eachCharAttr[i] = cleanedAttrs[i][0].Values[0].Value;
        this.eachCharName[i] = cleanedAttrs[i][0].Owner;
      }
      console.log(cleanedAttrs);
      console.log("All loaded", this.attrs);
      let result = this.initialResult;
      this.setState({
        isLoaded: true,
        items: result,
        charAttributes: this.attrs,
        chartData: {
          labels: this.eachCharName,
          datasets: [
            {
              label: "Jump Height",
              data: this.eachCharAttr,
              backgroundColor: result.map(item => item.ColorTheme)
            }
          ]
        }
      });
    }
  }
  componentDidMount() {
    fetch("http://beta-api-kuroganehammer.azurewebsites.net/api/characters/")
      .then(res => res.json())
      .then(
        result => {
          this.expectedCount = result.length;

          this.initialResult = result;

          result.forEach(r => {
            let caLink = r.Links.filter(
              l => l.Rel === "characterattributes"
            ).map(x => x.Href)[0];
            fetch(caLink)
              .then(resp => resp.json())
              .then(json => {
                this.attrs[r.Name] = json;
              });
          });

          this.checkCount();
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
      return <div id="loading">Loading...</div>;
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