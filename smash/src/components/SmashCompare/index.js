import React, { Component } from 'react';

class SmashCompare extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      charInfo: [],
      usrInput: "mario"
    };
  }

  fetchInfo() {
    fetch("http://beta-api-kuroganehammer.azurewebsites.net/api/characters/name/" + this.state.usrInput)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            charInfo: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    fetch("http://beta-api-kuroganehammer.azurewebsites.net/api/characters/name/" + this.state.usrInput + "/characterattributes")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  fetchInfoNew(newInput) {
    fetch("http://beta-api-kuroganehammer.azurewebsites.net/api/characters/name/" + newInput)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            charInfo: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    fetch("http://beta-api-kuroganehammer.azurewebsites.net/api/characters/name/" + newInput + "/characterattributes")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  componentDidMount() {
    this.fetchInfo();
  }

  handleChange(event) {
    this.setState({ isLoaded: false, items: [], charInfo: [], usrInput: event.target.value });
    this.fetchInfoNew(event.target.value);
  }

  render() {
    const { error, isLoaded, items, charInfo } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      let charAttrbs = [];
      let counter = 0;
      for (let i = 0; i < items.length; i++) {
        if (items[i].Name === "AerialJump"
          || items[i].Name === "AirAcceleration"
          || items[i].Name === "FallSpeed"
          || items[i].Name === "FullHop"
          || items[i].Name === "RunSpeed"
          || items[i].Name === "AirSpeed") {
          charAttrbs[counter] = items[i].Values[0].Value;
          counter++;
        }
      }

      let imgURL;

      /* In case the usual way of generating the URL doesn't work */
      if (charInfo.Name === "DonkeyKong") {
        imgURL = "http://kuroganehammer.com/images/smash4/logo2/DK.png";
      } else if (charInfo.Name === "BowserJr") {
        imgURL = "http://kuroganehammer.com/images/smash4/logo2/Bowser%20Jr.png";
      } else if (charInfo.Name === "CaptainFalcon") {
        imgURL = "http://kuroganehammer.com/images/smash4/logo2/Captain%20Falcon.png";
      } else if (charInfo.Name === "DiddyKong") {
        imgURL = "http://kuroganehammer.com/images/smash4/logo2/Diddy%20Kong.png";
      } else if (charInfo.Name === "DrMario") {
        imgURL = "http://kuroganehammer.com/images/smash4/logo2/Dr.%20Mario.png";
      } else if (charInfo.Name === "DuckHunt") {
        imgURL = "http://kuroganehammer.com/images/smash4/logo2/Duck%20Hunt.png";
      } else if (charInfo.Name === "KingDedede") {
        imgURL = "http://kuroganehammer.com/images/smash4/logo2/Perfect%20Dedede.png";
      } else if (charInfo.Name === "LittleMac") {
        imgURL = "http://kuroganehammer.com/images/smash4/logo2/Little%20Mac.png";
      } else if (charInfo.Name === "MetaKnight") {
        imgURL = "http://kuroganehammer.com/images/smash4/logo2/Meta%20Knight.png";
      } else if (charInfo.Name === "MegaMan") {
        imgURL = "http://kuroganehammer.com/images/smash4/logo2/Mega%20Man.png";
      } else if (charInfo.Name === "MiiBrawler") {
        imgURL = "http://kuroganehammer.com/images/smash4/logo2/Mii%20Brawler.png";
      } else if (charInfo.Name === "MiiGunner") {
        imgURL = "http://kuroganehammer.com/images/smash4/logo2/Mii%20Gunner.png";
      } else if (charInfo.Name === "MiiSwordfighter") {
        imgURL = "http://kuroganehammer.com/images/smash4/logo2/Mii%20Swordfighter.png";
      } else if (charInfo.Name === "MrGameWatch") {
        imgURL = "http://kuroganehammer.com/images/smash4/logo2/GameWatch.png";
      } else if (charInfo.Name === "RosalinaLuma") {
        imgURL = "http://kuroganehammer.com/images/smash4/logo2/Rosalina.png";
      } else if (charInfo.Name === "ToonLink") {
        imgURL = "http://kuroganehammer.com/images/smash4/logo2/Toon%20Link.png";
      } else if (charInfo.Name === "WiiFitTrainer") {
        imgURL = "http://kuroganehammer.com/images/smash4/logo2/Wii%20Fit%20Trainer.png";
      } else if (charInfo.Name === "ZeroSuitSamus") {
        imgURL = "http://kuroganehammer.com/images/smash4/logo2/Zero%20Suit%20Samus.png";
      } else { /* the usual way of generating the url */
        imgURL = "http://kuroganehammer.com/images/smash4/logo2/" + charInfo.Name + ".png"
      }

      console.log(imgURL);
      return (
        <div>
          <div id="charPicker">
            <select value={this.state.usrInput} onChange={this.handleChange.bind(this)} >
              <option value="bayonetta">Bayonetta</option>
              <option value="bowser" >Bowser</option>
              <option value="bowserjr">Bowser Jr.</option>
              <option value="captainfalcon" >Captain Falcon</option>
              <option value="charizard">Charizard</option>
              <option value="cloud" >Cloud</option>
              <option value="corrin">Corrin</option>
              <option value="darkpit" >Dark Pit</option>
              <option value="diddykong">Diddy Kong</option>
              <option value="donkeykong" >Donkey Kong</option>
              <option value="darkpit">Dark Pit</option>
              <option value="drmario" >Dr. Mario</option>
              <option value="duckhunt">Duck Hunt</option>
              <option value="falco" >Falco</option>
              <option value="fox">Fox</option>
              <option value="ganondorf" >Ganondork</option>
              <option value="greninja">Greninja</option>
              <option value="ike" >Ike</option>
              <option value="jigglypuff">Jigglypuff</option>
              <option value="kingdedede" >King Dedede</option>
              <option value="kirby">Kirby</option>
              <option value="link">Link</option>
              <option value="littlemac" >Little Mac</option>
              <option value="lucario">Lucario</option>
              <option value="lucas" >Lucas</option>
              <option value="lucina">Lucina</option>
              <option value="luigi" >Luigi</option>
              <option value="mario">Mario</option>
              <option value="marth" >Marth</option>
              <option value="megaman">Mega Man</option>
              <option value="metaknight">Meta Knight</option>
              <option value="mewtwo" >Mewtwo</option>
              <option value="miibrawler" >Mii Brawler</option>
              <option value="miigunner">Mii Gunner</option>
              <option value="miiswordfighter">Mii Swordfighter</option>
              <option value="mrgamewatch" >Mr. Game and Watch</option>
              <option value="ness">Ness</option>
              <option value="olimar" >Olimar</option>
              <option value="pac-man">Pac-Man</option>
              <option value="palutena">Palutena</option>
              <option value="peach" >Peach</option>
              <option value="pikachu">Pikachu</option>
              <option value="pit" >Pit</option>
              <option value="rob">Rob</option>
              <option value="robin" >Robin</option>
              <option value="rosalinaluma">Rosalina and Luma</option>
              <option value="roy" >Roy</option>
              <option value="ryu">Ryu</option>
              <option value="samus" >Samus</option>
              <option value="sheik">Sheik</option>
              <option value="shulk">Shulk</option>
              <option value="sonic" >Sonic</option>
              <option value="toonlink">Toon Link</option>
              <option value="villager" >Villager</option>
              <option value="wario">Wario</option>
              <option value="wiifittrainer" >Wii Fit Trainer</option>
              <option value="yoshi">Yoshi</option>
              <option value="zelda" >Zelda</option>
              <option value="zerosuitsamus">Zero Suit Samus</option>
            </select>
          </div>
          <div id="basic-info">
            <h1>{charInfo.DisplayName}</h1>
            <div id="char-picture">
              <img src={imgURL} alt={charInfo.DisplayName}></img>
            </div>
          </div>
          <div id="movement-info">
            <h2>Run Speed: {charAttrbs[4]}</h2>
            <h2>Ground Jump Height: {charAttrbs[3]}</h2>
            <h2>Aerial Jump Height: {charAttrbs[0]}</h2>
            <h2>Air Speed: {charAttrbs[5]}</h2>
            <h2>Air Acceleration: {charAttrbs[1]}</h2>
            <h2>Fall Speed: {charAttrbs[2]}</h2>
          </div>
        </div >
      );
    }
  }
}

export default SmashCompare;