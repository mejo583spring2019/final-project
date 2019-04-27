import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import byState from "../../data/byState/byState";

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import "./styles.css";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

class BarChart extends Component {
    chartData1 = this.getAllData(byState);
    chartData2 = this.getTop5Data(byState);
    chartData3 = this.getBottom5Data(byState);

    percentTotal = this.getTotalPercent(byState);

    getAllData(data) {
        let chartData = [];

        var color =
        {
            color: "#AF9154",
        }

        for (var i = 0; i < data.length; i++) {
            chartData[i] = {
                y: (data[i].total_crime / data[i].population) * 100,
                label: data[i].state,
                color: color.color,
            }

            chartData[i].y = parseFloat(Number.parseFloat(chartData[i].y).toFixed(2));
        }
        return chartData;
    }

    getTotalPercent(data) {
        let total = 0;
        let totalPop = 0;

        for (var i = 0; i < data.length; i++) {
            total = total + parseInt(data[i].total_crime);
            totalPop = totalPop + parseInt(data[i].population);
        }

        let totalPercent = (total / totalPop) * 100;
        totalPercent = parseFloat(Number.parseFloat(totalPercent).toFixed(2));

        return totalPercent;
    }

    getTop5Data(data) {
        let chartData = [];

        var color =
        {
            color: "#AF9154",
        }

        const top5 = Object.values(data)
            .sort((a, b) => ((b.total_crime / b.population) * 100) - ((a.total_crime / a.population) * 100))
            .slice(0, 5);

        console.log(top5);

        for (var i = 0; i < top5.length; i++) {
            chartData[i] = {
                y: (top5[i].total_crime / top5[i].population) * 100,
                label: top5[i].state,
                color: color.color,
            }
            chartData[i].y = parseFloat(Number.parseFloat(chartData[i].y).toFixed(2));
        }
        return chartData;
    }

    getBottom5Data(data) {
        let chartData = [];

        var color =
        {
            color: "#AF9154",
        }

        const top5 = Object.values(data)
            .sort((a, b) => ((a.total_crime / a.population) * 100) - ((b.total_crime / b.population) * 100))
            .slice(0, 5);

        console.log(top5);

        for (var i = 0; i < top5.length; i++) {
            chartData[i] = {
                y: (top5[i].total_crime / top5[i].population) * 100,
                label: top5[i].state,
                color: color.color,
            }
            chartData[i].y = parseFloat(Number.parseFloat(chartData[i].y).toFixed(2));
        }
        return chartData;
    }

    addSymbols(e) {
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
        if (order > suffixes.length - 1)
            order = suffixes.length - 1;
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }



    render() {
        const options1 = {
            animationEnabled: true,
            backgroundColor: "transparent",
            toolTip: {
                fontFamily: "primary",
                fontSize: 21,
                fontColor: "#876933",
            },
            axisX: {
                title: "States and District of Columbia",
                titleFontColor: "#F3E6C3",
                titleFont: "primary",
                labelFormatter: function () {
                    return " ";
                },
                labelFontFamily: "secondary",
                gridThickness: 0,
            },
            axisY: {
                title: "Percent By Population",
                titleFontColor: "#F3E6C3",
                labelFontColor: "#F3E6C3",
                labelFontFamily: "secondary",
                labelFontSize: 16,
                gridThickness: 0,
            },
            data: [
                {
                    type: "column",
                    dataPoints: this.chartData1,
                    toolTipContent: "{label}: {y}%",
                }
            ]
        }

        const options2 = {
            animationEnabled: true,
            colorSet: "crimeShade",
            theme: "light2",
            backgroundColor: "transparent",
            toolTip: {
                fontFamily: "primary",
                fontSize: 21,
                fontColor: "#876933",
            },
            axisX: {
                title: "Five Worst States",
                titleFontColor: "#F3E6C3",
                titleFont: "primary",
                labelFormatter: function () {
                    return " ";
                },
                labelFontFamily: "secondary",
                gridThickness: 0,
            },
            axisY: {
                title: "Percent By Population",
                titleFontColor: "#F3E6C3",
                labelFontColor: "#F3E6C3",
                labelFontFamily: "secondary",
                labelFontSize: 16,
                gridThickness: 0,
            },
            data: [{
                type: "bar",
                dataPoints: this.chartData2,
                toolTipContent: "{label}: {y}%",
            }]
        }

        const options3 = {
            animationEnabled: true,
            colorSet: "crimeShade",
            theme: "light2",
            backgroundColor: "transparent",
            toolTip: {
                fontFamily: "primary",
                fontSize: 21,
                fontColor: "#876933",
            },
            axisX: {
                title: "Five Best States",
                titleFontColor: "#F3E6C3",
                titleFont: "primary",
                labelFormatter: function () {
                    return " ";
                },
                labelFontFamily: "secondary",
                gridThickness: 0,
            },
            axisY: {
                title: "Percent By Population",
                titleFontColor: "#F3E6C3",
                labelFontColor: "#F3E6C3",
                labelFontFamily: "secondary",
                labelFontSize: 16,
                gridThickness: 0,
            },
            data: [{
                type: "bar",
                dataPoints: this.chartData3,
                toolTipContent: "{label}: {y}%",
            }]
        }


        return (
            <div className="backgroundColor">
                <div>
                    <h1 className="marPos">Crime By State</h1>
                    <div className="maxWidth">
                        <p>
                            Although crime is decreasing across the country, there are still some states that are well above
                            the national average. According to the Crime Solutions website, many communities have come up with
                            strategies to help reduce crimes. Some of these strategies include neighborhood watch, community policing,
                            urban or physical design, and comprehensive or multi-disciplinary efforts. Many of these strategies
                            could be adopted to help communities around the nation to reduce property crime.
                        </p>
                    </div>
                </div>

                <Tabs defaultActiveKey="profile1" transition={false} id="noanim-tab-example">
                    <Tab eventKey="profile1" title="All States" unmountOnExit="true">
                        <h2>Property Crime Report Rate By State</h2>
                        <div className="chartPos">
                            <CanvasJSChart options={options1} />
                        </div>
                        <div className="maxWidth">
                            <p>
                                Overall, the amount of property crime to occur in the United States by
                                population is around {this.percentTotal} percent, calculated from the data produced from
                                the FBI. This number was determined by taking the total amount of crime
                                that occurred in every state and divide it by the total population from
                                every state. Then, this number was multiplied by 100 to get a total percentage
                                of the population in the United States who reported a property crime.
                            </p>
                        </div>
                    </Tab>
                    <Tab eventKey="profile2" title="Worst States" unmountOnExit="true">
                        <h2>Worst States for Property Crime</h2>
                        <div className="chartPos">
                            <CanvasJSChart options={options2} />
                        </div>
                        <div className="maxWidth">
                            <p>
                                According to the report from the FBI in 2017, The worst place to experience
                                property crime in the nation is the District of Columbia, with 4.68 percent
                                of the population reporting a property crime in 2017. The worst state to
                                experience property crime in the United States is Hawaii. Around 3.8 percent
                                of the population of Hawaii reported a property crime during 2017.
                            </p>
                        </div>
                    </Tab>
                    <Tab eventKey="profile3" title="Best States" unmountOnExit="true">
                        <h2>Best States for Property Crime</h2>
                        <div className="chartPos">
                            <CanvasJSChart options={options3} />
                        </div>
                        <div className="maxWidth">
                            <p>
                                According to the report from the FBI in 2015, The best place to avoid property crime
                                in the nation is Vermont, with 1.41 percent of the population reporting a property
                                crime during 2015. Interestingly, the top five states that had the lowest property crime
                                reporting all fell below two percent.
                            </p>
                        </div>
                    </Tab>
                </Tabs>

                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

export default BarChart;