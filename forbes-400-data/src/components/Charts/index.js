import React, { Component } from "react";
import ScoreFilter from "../ScoreFilter";

import "./styles.css";

/** Charts displays the article and all charts
 */
class Charts extends Component {
  el = React.createRef();

  /** Presents group chart
   * @return {html} Group chart HTML
   */
  render() {
    return (
      <div>
        <div className="header">
          <h1 className="title">Debunking the
            <span className="title-highlight">2018 Forbes 400</span>
            Philanthropy Score</h1>
        </div>
        <div className="text-container">
          <h2 className="heading">Forbes' New Focus on Giving</h2>
          <p>The <a href="https://www.forbes.com/forbes-400/#7689e2ab7e2f" target="_blank" rel="noopener noreferrer">Forbes 400</a> is an annual report of the wealthiest people in the United States, ranked in order of highest total net worth. All of the 2018 Forbes 400 members are billionaires, with net worth ranging from $2.1 billion to $3.8 billion for the bottom 200 to No. 1 Jeff Bezos' $160 billion. In the latest 2018 list, Forbes revealed a new "philanthropy score" as an additional ranking that supposedly measures the generosity of the billionaires. With the exception of 46 members who had no identifiable charitable giving information, Forbes gave each list member a philanthropy score between one and five with a higher score indicating greater generosity.</p>
          <p>The philanthropy scores were determined by estimating each member's total lifetime giving and then calculating that amount as a percentage of their total net worth. After designating score ranges between one and five for both lifetime giving and percentage giving, Forbes rated list members and used the two scores to determine the overall philanthropy scores. "We weighted these two factors equally and scored people accordingly," said Forbes staff reporter Deniz Cam in an <a href="https://www.forbes.com/sites/denizcam/2018/10/03/the-new-forbes-400-philanthropy-score-measuring-billionaires-generosity/" target="_blank" rel="noopener noreferrer">article</a> about the new scoring system.</p>
          <h2 className="heading">Discrepancies and Poor Transparency</h2>
          <p>This new score appears to be a great addition to the Forbes 400,
            but with further analysis it is evident that Forbes' public data
            has inaccuracies. According to the Forbes article, "Only 29 of
            America’s 400 richest were given the highest possible score. To
            get to that recognition, a person had to give away at least $1
            billion and/or 20% of their total net worth." Upon inspection of
            the data, however, you will see that David Rubenstein, whose total
            lifetime giving and percentage giving are $0.675 billion and 19%
            respectively, received a score of five without meeting Forbes'
            requirements. You may also note that Michael Dell has a five with
            a total lifetime giving of $1.563 billion but only as 5% of his
            total net worth. These are just two of many inconsistencies in the
            data.</p>
          <p>In the same article mentioned above, Cam said that some individuals
            were bumped up or down in their score based on factors like "whether
            they had signed the Giving Pledge, whether they had pledged
            significant donations, how personally involved they were in their
            charitable giving and how quickly and effectively their private
            foundations distributed dollars." These additional factors seem to
            be subjective, undermining the reliability of the entire scoring
            system. Forbes has also failed to release any public data for the
            extra factors, and on top of that, the data for list members' total
            lifetime giving and percentage giving is only provided for 46 out
            of 400 members.</p>
        </div>
        <ScoreFilter />
      </div>
    );
  }
}

export default Charts;
