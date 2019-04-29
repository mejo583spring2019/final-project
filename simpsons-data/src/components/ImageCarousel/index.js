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
      infinite: false,
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
      <div>
        <h2> Meet the true faces of the your favorite show.</h2>
        <Slider {...settings}>
          <div>
            <img src="http://static.tvmaze.com/uploads/images/medium_portrait/0/963.jpg" alt="Dan Castellaneta" />
            <h3>Dan Castellaneta</h3>
          </div>
          <div>
            <img src="http://static.tvmaze.com/uploads/images/medium_portrait/0/967.jpg" alt="Julie Kavner" />
            <h3>Julie Kavner</h3>
          </div>
          <div>
            <img src="http://static.tvmaze.com/uploads/images/medium_portrait/2/7324.jpg" alt="Yeardley Smith" />
            <h3>Yeardley Smith</h3>
          </div>
          <div>
            <img src="http://static.tvmaze.com/uploads/images/medium_portrait/0/968.jpg" alt="Nancy Cartwright" />
            <h3>Nancy Cartwright</h3>
          </div>
          <div>
            <img src="http://static.tvmaze.com/uploads/images/medium_portrait/0/966.jpg" alt="Harry Shearer" />
            <h3>Harry Shearer</h3>
          </div>
          <div>
            <img src="http://static.tvmaze.com/uploads/images/medium_portrait/0/964.jpg" alt="Hank Azaria" />
            <h3>Hank Azaria</h3>
          </div>
          <div>
            <img src="http://static.tvmaze.com/uploads/images/medium_portrait/41/102553.jpg" alt="Pamela Hayden" />
            <h3>Pamela Hayden</h3>
          </div>
          <div>
            <img src="http://static.tvmaze.com/uploads/images/medium_portrait/123/307705.jpg" alt="Tress MacNeille" />
            <h3>Tress MacNeille</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
export default Responsive;
