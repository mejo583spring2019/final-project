import React, { Component } from "react";
import BubbleChart1 from "../BubbleChart1";
import BubbleChart2 from "../BubbleChart2";

import "./styles.css";

/** ScoreFilter creates a bubblechart
 * of data
 */
class ScoreFilter extends Component {
  /** Sets up our chart data
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      showAll: true,
      showNA: false,
      showS1: false,
      showS2: false,
      showS3: false,
      showS4: false,
      showS5: false,
    };
  }

  /** toggleAll shows all Forbes data with
   * on checkbox toggle
   */
  toggleAll() {
    const newState = {
      showAll: true,
      showNA: false,
      showS1: false,
      showS2: false,
      showS3: false,
      showS4: false,
      showS5: false,
    };
    this.setState(newState);
  }

  /** toggleNA shows Forbes data with N/A score
   * on checkbox toggle
   */
  toggleNA() {
    const newState = {
      showAll: false,
      showNA: true,
      showS1: false,
      showS2: false,
      showS3: false,
      showS4: false,
      showS5: false,
    };
    this.setState(newState);
  }

  /** toggleS1 shows Forbes data with score 1
   * on checkbox toggle
   */
  toggleS1() {
    const newState = {
      showAll: false,
      showNA: false,
      showS1: true,
      showS2: false,
      showS3: false,
      showS4: false,
      showS5: false,
    };
    this.setState(newState);
  }

  /** toggleS2 shows Forbes data with score 2
   * on checkbox toggle
   */
  toggleS2() {
    const newState = {
      showAll: false,
      showNA: false,
      showS1: false,
      showS2: true,
      showS3: false,
      showS4: false,
      showS5: false,
    };
    this.setState(newState);
  }

  /** toggleS3 shows Forbes data with score 3
   * on checkbox toggle
   */
  toggleS3() {
    const newState = {
      showAll: false,
      showNA: false,
      showS1: false,
      showS2: false,
      showS3: true,
      showS4: false,
      showS5: false,
    };
    this.setState(newState);
  }

  /** toggleS4 shows Forbes data with score 4
   * on checkbox toggle
   */
  toggleS4() {
    const newState = {
      showAll: false,
      showNA: false,
      showS1: false,
      showS2: false,
      showS3: false,
      showS4: true,
      showS5: false,
    };
    this.setState(newState);
  }

  /** toggleS5 shows Forbes data with score 5
   * on checkbox toggle
   */
  toggleS5() {
    const newState = {
      showAll: false,
      showNA: false,
      showS1: false,
      showS2: false,
      showS3: false,
      showS4: false,
      showS5: true,
    };
    this.setState(newState);
  }

  /** Presents score filter
   * @return {html} Score filter HTML
   */
  render() {
    return (
      <div>
        <div className="text-container">
          <h2 className="heading chart-heading">
            2018 Forbes 400 Philanthropy Scores:
            <span className="chart-subheading">
              Age vs. Total Net Worth
            </span>
          </h2>
          <span className="subheading">Filter by philanthropy score:</span>
          <div className="switch-field">
            <input type="checkbox" id="all-cb1"
              name="switch-score" value="all"
              checked={this.state.showAll}
              onChange={this.toggleAll.bind(this)} />
            <label htmlFor="all-cb1">All</label>
            <input type="checkbox" id="na-cb1"
              name="switch-score" value="na"
              checked={this.state.showNA}
              onChange={this.toggleNA.bind(this)} />
            <label htmlFor="na-cb1">N/A</label>
            <input type="checkbox" id="s1-cb1"
              name="switch-score" value="1"
              checked={this.state.showS1}
              onChange={this.toggleS1.bind(this)} />
            <label htmlFor="s1-cb1">1</label>
            <input type="checkbox" id="s2-cb1"
              name="switch-score" value="2"
              checked={this.state.showS2}
              onChange={this.toggleS2.bind(this)} />
            <label htmlFor="s2-cb1">2</label>
            <input type="checkbox" id="s3-cb1"
              name="switch-score" value="3"
              checked={this.state.showS3}
              onChange={this.toggleS3.bind(this)} />
            <label htmlFor="s3-cb1">3</label>
            <input type="checkbox" id="s4-cb1"
              name="switch-score" value="4"
              checked={this.state.showS4}
              onChange={this.toggleS4.bind(this)} />
            <label htmlFor="s4-cb1">4</label>
            <input type="checkbox" id="s5-cb1"
              name="switch-score" value="5"
              checked={this.state.showS5}
              onChange={this.toggleS5.bind(this)} />
            <label htmlFor="s5-cb1">5</label>
          </div>
        </div>
        <div className="text-container">
          <h4 className="chart-heading">Age vs. Total Net Worth &lt; $10B</h4>
        </div>
        <BubbleChart1 showAll={this.state.showAll}
          showNA={this.state.showNA}
          showS1={this.state.showS1}
          showS2={this.state.showS2}
          showS3={this.state.showS3}
          showS4={this.state.showS4}
          showS5={this.state.showS5} />
        <div className="text-container">
          <h4 className="chart-heading">Age vs. Total Net Worth &gt; $10B</h4>
        </div>
        <BubbleChart2 showAll={this.state.showAll}
          showNA={this.state.showNA}
          showS1={this.state.showS1}
          showS2={this.state.showS2}
          showS3={this.state.showS3}
          showS4={this.state.showS4}
          showS5={this.state.showS5} />
        <div className="text-container">
          <span className="details">*Two Forbes 400
          members not represented due to missing age data</span>
          <span className="subheading">Filter by philanthropy score:</span>
          <div className="switch-field">
            <input type="checkbox" id="all-cb2"
              name="switch-score" value="all"
              checked={this.state.showAll}
              onChange={this.toggleAll.bind(this)} />
            <label htmlFor="all-cb2">All</label>
            <input type="checkbox" id="na-cb2"
              name="switch-score" value="na"
              checked={this.state.showNA}
              onChange={this.toggleNA.bind(this)} />
            <label htmlFor="na-cb2">N/A</label>
            <input type="checkbox" id="s1-cb2"
              name="switch-score" value="1"
              checked={this.state.showS1}
              onChange={this.toggleS1.bind(this)} />
            <label htmlFor="s1-cb2">1</label>
            <input type="checkbox" id="s2-cb2"
              name="switch-score" value="2"
              checked={this.state.showS2}
              onChange={this.toggleS2.bind(this)} />
            <label htmlFor="s2-cb2">2</label>
            <input type="checkbox" id="s3-cb2"
              name="switch-score" value="3"
              checked={this.state.showS3}
              onChange={this.toggleS3.bind(this)} />
            <label htmlFor="s3-cb2">3</label>
            <input type="checkbox" id="s4-cb2"
              name="switch-score" value="4"
              checked={this.state.showS4}
              onChange={this.toggleS4.bind(this)} />
            <label htmlFor="s4-cb2">4</label>
            <input type="checkbox" id="s5-cb2"
              name="switch-score" value="5"
              checked={this.state.showS5}
              onChange={this.toggleS5.bind(this)} />
            <label htmlFor="s5-cb2">5</label>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreFilter;
