import React, { Component } from "react";
import Slider from "react-slick";
/** jsdoc comment */
class Responsive extends Component {
  /** jsdoc comment
               * @return {div}
               */
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="slider">
        <h2>Meet the cast that kept a show on-air for 30 years.</h2>

        <Slider {...settings}>
          <div>
            <img src="http://static.tvmaze.com/uploads/images/medium_portrait/0/963.jpg" alt="Dan Castellaneta" />
            <h3><a href="http://www.tvmaze.com/people/14854/dan-castellaneta" >Dan Castellaneta</a></h3>
          </div>
          <div>
            <img src="http://static.tvmaze.com/uploads/images/medium_portrait/0/967.jpg" alt="Julie Kavner" />
            <h3><a href="http://www.tvmaze.com/people/14855/julie-kavner" >Julie Kavner</a></h3>
          </div>
          <div>
            <img src="http://static.tvmaze.com/uploads/images/medium_portrait/2/7324.jpg" alt="Yeardley Smith" />
            <h3><a href="http://www.tvmaze.com/people/14857/yeardley-smith" >Yeardley Smith</a></h3>
          </div>
          <div>
            <img src="http://static.tvmaze.com/uploads/images/medium_portrait/0/968.jpg" alt="Nancy Cartwright" />
            <h3><a href="http://www.tvmaze.com/people/14856/nancy-cartwright" >Nancy Cartwright</a></h3>
          </div>
          <div>
            <img src="http://static.tvmaze.com/uploads/images/medium_portrait/0/966.jpg" alt="Harry Shearer" />
            <h3><a href="http://www.tvmaze.com/people/14859/harry-shearer" >Harry Shearer</a></h3>
          </div>
          <div>
            <img src="http://static.tvmaze.com/uploads/images/medium_portrait/0/964.jpg" alt="Hank Azaria" />
            <h3><a href="http://www.tvmaze.com/people/14858/hank-azaria" >Hank Azaria</a></h3>
          </div>
          <div>
            <img src="http://static.tvmaze.com/uploads/images/medium_portrait/41/102553.jpg" alt="Pamela Hayden" />
            <h3><a href="http://www.tvmaze.com/people/34651/pamela-hayden" >Pamela Hayden</a></h3>
          </div>
          <div>
            <img src="http://static.tvmaze.com/uploads/images/medium_portrait/123/307705.jpg" alt="Tress MacNeille" />
            <h3><a href="http://www.tvmaze.com/people/44735/tress-macneille" >Tress MacNeille</a></h3>
          </div>
        </Slider>
      </div>
    );
  }
}
export default Responsive;
