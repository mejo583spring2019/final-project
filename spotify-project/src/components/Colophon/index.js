import React, { Component } from "react";
import "./styles.css";

/**
 * creates and exports Colophon component
 */
export default class Colophon extends Component {
  /**
   * renders aforementioned colophon in a div
   * @return {object} colophon
   */
  render() {
    return (
      <div id="ColophonContainer">
        <h1 id="ColophonTitle">Colophon</h1>
        <div id="ColophonText">
          <p class="ColophonParagraph">This page displays 2017 Spotify data
          from two different datasets - One showing the top 200 songs from every
          day across 54 countries, the other showing the top 100 overall songs
          of 2017. I chose this idea for my project
          because I am a music enthusiast and Spotify is
          my platform of choice, and I wanted to visualize
          the similarities and differences in music taste
          around the world in some fashion.</p>
          <p class="ColophonParagraph">This project was created primarily using
          ReactJS. Other tools used include NodeJS, Tabulator, and Git. All
          swork was completed on a Dell XPS 15 with VScode.</p>
          <p class="ColophonParagraph"> The country SVGs used in this project
          were retrieved from the following links:
          <a href={"https://commons.wikimedia.org/wiki/Category:SVG_maps_of_Indonesia#/media/File:Indonesia_Blankmap.svg"}> Indonesia, </a>
          <a href={"https://en.wikipedia.org/wiki/File:Germany-Outline.svg#/media/File:Germany-Outline.svg"}> Germany, </a>
          <a href={"https://commons.wikimedia.org/wiki/Category:Blank_maps_of_the_United_States#/media/File:US_mark.svg"}> USA, </a>
          <a href={"https://www.svgrepo.com/svg/49710/brazil-map"}> Brazil, </a>
          <a href={"https://www.pinclipart.com/pindetail/TJThxT_svg-clip-art-wiki-japan-map-vector-png/"}> &#38;  Japan</a>. These were further edited in Adobe Illustrator
          for stylization and the addition of text. Record SVG Icon made by
          Freepik from www.flaticon.com. Montserrat font family
          retrieved from GoogleFonts.</p>
          <p class="ColophonParagraph">Most data was
          converted to JSON using csvtojson for npm.
          Utility scripts were then used to clean the data
          in the case of the larger dataset. Most data from
          the larger dataset ended up being hardcoded due to
          issues with the tree structure and some changes
          in plans. The smaller data set was fed straight
          into tabulator from its JSON file, which sorted it
          into a reactive table. Both datasets were retrieved
          from Kaggle.com, click the following links to
          see more:
          <a href={"https://www.kaggle.com/nadintamer/top-tracks-of-2017"}> Top 100 2017,</a>
          <a href={"https://www.kaggle.com/edumucelli/spotifys-worldwide-daily-song-ranking/version/3"}>Spotify Worldwide Daily Song Ranking</a>
          </p>
          <p className="ColophonParagraph">Image Sources:
            <a href={"https://en.wikipedia.org/wiki/Shape_of_You"}> Shape of You Cover,</a>
            <a href={"http://time.com/5244082/ed-sheeran-songwriter-movie-interview/"}> Ed Sheeran,</a>
            <a href={"https://en.wikipedia.org/wiki/Despacito#Justin_Bieber_remix_version"}> Despacito Covers,</a>
            <a href={"https://en.wikipedia.org/wiki/Something_Just_like_This"}> Something Just Like This Cover,</a>
            <a href={"https://en.wikipedia.org/wiki/I%27m_the_One_(DJ_Khaled_song)"}> I'm the One cover,</a>
            <a href={"https://en.wikipedia.org/wiki/Humble_(song)"}> HUMBLE. cover,</a>
            <a href={"https://en.wikipedia.org/wiki/It_Ain%27t_Me"}> It Ain't Me cover,</a>
            <a href={"https://en.wikipedia.org/wiki/Unforgettable_(French_Montana_song)"}> Unforgettable cover,</a>
            <a href={"https://en.wikipedia.org/wiki/That%27s_What_I_Like_(Bruno_Mars_song)"}> That's What I Like cover,</a>
            <a href={"https://en.wikipedia.org/wiki/I_Don%27t_Wanna_Live_Forever"}> I Don't Wanna Live Forever cover</a>
            <a href={"https://ui-ex.com/explore/drake-transparent-little/"}> Drake,</a>
            <a href={"https://ohitstransparent.tumblr.com/post/160046090541/ed-sheeran"}> Ed Sheeran 2,</a>
            <a href={"https://ohitstransparent.tumblr.com/post/160046080091/the-chainsmokers"}> The Chainsmokers,</a>
            <a href={"http://www.stickpng.com/img/music-stars/martin-garrix/martin-garrix-serious"}> Martin Garrix,</a>
            <a href={"http://www.stickpng.com/img/music-stars/bruno-mars/hat-bruno-mars"}> Bruno Mars,</a>
            <a href={"https://ohitstransparent.tumblr.com/post/160164362086/calvin-harris"}> Calvin Harris,</a>
            <a href={"http://www.stickpng.com/img/music-stars/various/clean-bandit"}> Clean Bandit,</a>
            <a href={"https://sitejerk.com/explore/dj-khaled-transparent.html"}> DJ Khaled,</a>
            <a href={"https://www.seekpng.com/ipng/u2e6y3r5i1o0i1a9_imagine-dragons-imagine-dragons-no-background/"}> Imagine Dragons,</a>
            <a href={"http://www.stickpng.com/cat/music-stars/kendrick-lamar?page=1"}> Kendrick Lamar,</a>
            <a href={"https://www.pinterest.com/pin/644577765392055237/?lp=true"}> Khalid,</a>
            <a href={"http://www.stickpng.com/img/music-stars/luis-fonsi/luis-fonsi-suit"}> Luis Fonsi,</a>
            <a href={"http://www.organizetube.com/folder/414a80f3c014a6ab125136ca8ea45462f4d93d43"}> Maroon 5,</a>
            <a href={"https://picsart.com/i/sticker-postmalone-post-malone-sticker-png-singer-artist-286350231058211"}> Post Malone,</a>
            <a href={"http://www.stickpng.com/img/music-stars/the-weeknd/the-weeknd-posing"}> The Weeknd,</a>
            <a href={"http://www.pngmart.com/image/tag/zayn-malik"}> and ZAYN.</a>
          </p>
        </div>
        <div id="PadDiv"></div>
      </div>
    );
  }
}

