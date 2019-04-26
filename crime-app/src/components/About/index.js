import React, { Component } from 'react';
import "./styles.css";

class About extends Component {
    render() {
        return (
            <div className="backImg">
                <h1>Property Crime in The United States</h1>
                <div className="maxWidth">
                    <p>
                        Property crime in the United States is the most common type of crime to happen
                        in the nation compared to violent crimes. Property crime offenses can range
                        from larceny, burglary, motor vehicle theft, ect. According to John Gramlich from
                        the Pew Research Center, the FBI has reported a 50 percent drop in property crime
                        offenses between 1993 and 2017. BJS reported a 69 percent drop in property crime
                        over this time period.
                    </p>
                    <p>
                        This project was created in order to show data related to property crime in the
                        United States in an easier format from the Federal Bureau of Investigation database
                        to users. The crime discussed in this project will be based on the top three most
                        common property crimes that occur in the United States. These crimes include larceny,
                        burglary and motor vehicle theft respectively.
                    </p>
                </div>
            </div >
        );
    }
}

export default About;                           