import React, { Component } from "react";

/**
 * Creates IDTable component
 */
class IDTable extends Component {
  /**
   * renders respective hardcoded datatable
   * @return {object} respective data table
   */
  render() {
    return (
      <table id="IDTable">
        <tbody>
          <tr>
            <th className="CDHeader">Chart Position</th>
            <th className="CDHeader">January</th>
            <th className="CDHeader">February</th>
            <th className="CDHeader">March</th>
            <th className="CDHeader">April</th>
            <th className="CDHeader">May</th>
            <th className="CDHeader">June</th>
            <th className="CDHeader">July</th>
            <th className="CDHeader">August</th>
            <th className="CDHeader">September</th>
            <th className="CDHeader">October</th>
            <th className="CDHeader">November</th>
            <th className="CDHeader">December</th>
          </tr>
          <tr className="CDRow">
            <td className="PositionCol">1</td>
            <td className="CDDatum">
              <p className="DatumTitle">Closer</p>
              <p className="DatumArtist">The Chainsmokers</p>
              <p className="DatumStreams">45330 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Shape of You</p>
              <p className="DatumArtist">Ed Sheeran</p>
              <p className="DatumStreams">82798 Streams </p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Something Just Like This</p>
              <p className="DatumArtist">The Chainsmokers</p>
              <p className="DatumStreams">120682 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Something Just Like This</p>
              <p className="DatumArtist">The Chainsmokers</p>
              <p className="DatumStreams">83722 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Something Just Like This</p>
              <p className="DatumArtist">The Chainsmokers</p>
              <p className="DatumStreams">82329 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Despacito - Remix</p>
              <p className="DatumArtist">Luis Fonsi</p>
              <p className="DatumStreams">99621 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Despacito - Remix</p>
              <p className="DatumArtist">Luis Fonsi</p>
              <p className="DatumStreams">98973 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Despacito - Remix</p>
              <p className="DatumArtist">Luis Fonsi</p>
              <p className="DatumStreams">78081 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Akad</p>
              <p className="DatumArtist">Payung Teduh</p>
              <p className="DatumStreams">148564 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Too Good At Goodbyes - Edit</p>
              <p className="DatumArtist">Sam Smith</p>
              <p className="DatumStreams">118582 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Havana</p>
              <p className="DatumArtist">Camila Cabello</p>
              <p className="DatumStreams">110177 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Havana</p>
              <p className="DatumArtist">Camila Cabello</p>
              <p className="DatumStreams">109233 Streams</p>
            </td>
          </tr>
          <tr className="CDRow">
            <td className="PositionCol">2</td>
            <td className="CDDatum">
              <p className="DatumTitle">Say You Won't Let Go</p>
              <p className="DatumArtist">James Arthur</p>
              <p className="DatumStreams">40815 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Paris</p>
              <p className="DatumArtist">The Chainsmokers</p>
              <p className="DatumStreams">61267 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Shape of You</p>
              <p className="DatumArtist">Ed Sheeran</p>
              <p className="DatumStreams">99198 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Shape of You</p>
              <p className="DatumArtist">Ed Sheeran</p>
              <p className="DatumStreams">82906 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Shape of You</p>
              <p className="DatumArtist">Ed Sheeran</p>
              <p className="DatumStreams">77820 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">I'm the One</p>
              <p className="DatumArtist">DJ Khaled</p>
              <p className="DatumStreams">71903 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">2U (feat. Justin Bieber)</p>
              <p className="DatumArtist">David Guetta</p>
              <p className="DatumStreams">65373 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">2U (feat. Justin Bieber)</p>
              <p className="DatumArtist">David Guetta</p>
              <p className="DatumStreams">72594 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Look What You Made Me Do</p>
              <p className="DatumArtist">Taylor Swift</p>
              <p className="DatumStreams">86459 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Akad</p>
              <p className="DatumArtist">Payung Teduh</p>
              <p className="DatumStreams">110234 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Too Good At Goodbyes - Edit</p>
              <p className="DatumArtist">Sam Smith</p>
              <p className="DatumStreams">109354 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Wolves</p>
              <p className="DatumArtist">Selena Gomez</p>
              <p className="DatumStreams">97149 Streams</p>
            </td>
          </tr>
          <tr className="CDRow">
            <td className="PositionCol">3</td>
            <td className="CDDatum">
              <p className="DatumTitle">All We Know</p>
              <p className="DatumArtist">The Chainsmokers</p>
              <p className="DatumStreams">39557 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Say You Won't Let Go</p>
              <p className="DatumArtist">James Arthur</p>
              <p className="DatumStreams">60281 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">It Ain't Me (with Selena Gomez)</p>
              <p className="DatumArtist">Kygo</p>
              <p className="DatumStreams">71672 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">That's What I Like</p>
              <p className="DatumArtist">Bruno Mars</p>
              <p className="DatumStreams">72225 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Good Life
              (with G-Eazy &#38; Kehlani)</p>
              <p className="DatumArtist">G-Eazy</p>
              <p className="DatumStreams">71446 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Attention</p>
              <p className="DatumArtist">Charlie Puth</p>
              <p className="DatumStreams">66432 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">I'm the One</p>
              <p className="DatumArtist">DJ Khaled</p>
              <p className="DatumStreams">59736 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Attention</p>
              <p className="DatumArtist">Charlie Puth</p>
              <p className="DatumStreams">70518 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">New Rules</p>
              <p className="DatumArtist">Dua Lipa</p>
              <p className="DatumStreams">68577 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">New Rules</p>
              <p className="DatumArtist">Dua Lipa</p>
              <p className="DatumStreams">81854 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Perfect</p>
              <p className="DatumArtist">Ed Sheeran</p>
              <p className="DatumStreams">100927 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Perfect</p>
              <p className="DatumArtist">Ed Sheeran</p>
              <p className="DatumStreams">94234 Streams</p>
            </td>
          </tr>
          <tr className="CDRow">
            <td className="PositionCol">4</td>
            <td className="CDDatum">
              <p className="DatumTitle">Let Me Love You</p>
              <p className="DatumArtist">DJ Snake</p>
              <p className="DatumStreams">35205 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">I Don’t Wanna Live Forever
              (feat. Taylor Swift)</p>
              <p className="DatumArtist">ZAYN</p>
              <p className="DatumStreams">53860 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">That's What I Like</p>
              <p className="DatumArtist">Bruno Mars</p>
              <p className="DatumStreams">66676 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Stay (with Alessia Cara)</p>
              <p className="DatumArtist">Zedd</p>
              <p className="DatumStreams">56296 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Symphony (feat. Zara Larsson)</p>
              <p className="DatumArtist">Clean Bandit</p>
              <p className="DatumStreams">70342 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Symphony (feat. Zara Larsson)</p>
              <p className="DatumArtist">Clean Bandit</p>
              <p className="DatumStreams">65871 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Attention</p>
              <p className="DatumArtist">Charlie Puth</p>
              <p className="DatumStreams">56791 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Mama</p>
              <p className="DatumArtist">Jonas Blue</p>
              <p className="DatumStreams">66099 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Back to You
              (feat. Bebe Rexha &#38; Digital Farm Animals)</p>
              <p className="DatumArtist">Louis Tomlinson</p>
              <p className="DatumStreams">66182 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Dusk Till Dawn - Radio Edit</p>
              <p className="DatumArtist">ZAYN</p>
              <p className="DatumStreams">78885 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">New Rules</p>
              <p className="DatumArtist">Dua Lipa</p>
              <p className="DatumStreams">93296 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Too Good At Goodbyes</p>
              <p className="DatumArtist">Sam Smith</p>
              <p className="DatumStreams">91842 Streams</p>
            </td>
          </tr>
          <tr className="CDRow">
            <td className="PositionCol">5</td>
            <td className="CDDatum">
              <p className="DatumTitle">Don't Wanna Know</p>
              <p className="DatumArtist">Maroon 5</p>
              <p className="DatumStreams">34084 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Bad Things (with Camila Cabello)</p>
              <p className="DatumArtist">Machine Gun Kelly</p>
              <p className="DatumStreams">47754 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Say You Won't Let Go</p>
              <p className="DatumArtist">James Arthur</p>
              <p className="DatumStreams">64783 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Symphony (feat. Zara Larsson)</p>
              <p className="DatumArtist">Clean Bandit</p>
              <p className="DatumStreams">55927 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Despacito - Remix</p>
              <p className="DatumArtist">Luis Fonsi</p>
              <p className="DatumStreams">69909 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Something Just Like This</p>
              <p className="DatumArtist">The Chainsmokers</p>
              <p className="DatumStreams">60137 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">There for You</p>
              <p className="DatumArtist">Martin Garrix</p>
              <p className="DatumStreams">53040 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Feels</p>
              <p className="DatumArtist">Calvin Harris</p>
              <p className="DatumStreams">63798 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Feels</p>
              <p className="DatumArtist">Calvin Harris</p>
              <p className="DatumStreams">58620 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Perfect</p>
              <p className="DatumArtist">Ed Sheeran</p>
              <p className="DatumStreams">71996 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Dusk Till Dawn - Radio Edit</p>
              <p className="DatumArtist">ZAYN</p>
              <p className="DatumStreams">83595 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">New Rules</p>
              <p className="DatumArtist">Dua Lipa</p>
              <p className="DatumStreams">79563 Streams</p>
            </td>
          </tr>
          <tr className="CDRow">
            <td className="PositionCol">6</td>
            <td className="CDDatum">
              <p className="DatumTitle">Starving</p>
              <p className="DatumArtist">Hailee Steinfeld</p>
              <p className="DatumStreams">30847 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Closer</p>
              <p className="DatumArtist">The Chainsmokers</p>
              <p className="DatumStreams">46603 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Paris</p>
              <p className="DatumArtist">The Chainsmokers</p>
              <p className="DatumStreams">61958 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">It Ain't Me (with Selena Gomez)</p>
              <p className="DatumArtist">Kygo</p>
              <p className="DatumStreams">51532 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">That's What I Like</p>
              <p className="DatumArtist">Bruno Mars</p>
              <p className="DatumStreams">68162 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Shape of You</p>
              <p className="DatumArtist">Ed Sheeran</p>
              <p className="DatumStreams">59526 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Mama</p>
              <p className="DatumArtist">Jonas Blue</p>
              <p className="DatumStreams">46519 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">I'm the One</p>
              <p className="DatumArtist">DJ Khaled</p>
              <p className="DatumStreams">63417 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Attention</p>
              <p className="DatumArtist">Charlie Puth</p>
              <p className="DatumStreams">56936 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Look What You Made Me Do</p>
              <p className="DatumArtist">Taylor Swift</p>
              <p className="DatumStreams">64203 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">What Lovers Do</p>
              <p className="DatumArtist">Maroon 5</p>
              <p className="DatumStreams">79919 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Dusk Till Dawn - Radio Edit</p>
              <p className="DatumArtist">ZAYN</p>
              <p className="DatumStreams">70901 Streams</p>
            </td>
          </tr>
          <tr className="CDRow">
            <td className="PositionCol">7</td>
            <td className="CDDatum">
              <p className="DatumTitle">Starboy</p>
              <p className="DatumArtist">The Weeknd</p>
              <p className="DatumStreams">30457 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Rockabye
              (feat. Sean Paul &#38; Anne-Marie)</p>
              <p className="DatumArtist">Clean Bandit</p>
              <p className="DatumStreams">44437 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Scared to Be Lonely</p>
              <p className="DatumArtist">Martin Garrix</p>
              <p className="DatumStreams">60637 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Scared to Be Lonely</p>
              <p className="DatumArtist">Martin Garrix</p>
              <p className="DatumStreams">46055 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Asal Kau Bahagia</p>
              <p className="DatumArtist">Armada</p>
              <p className="DatumStreams">59990 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">There for You</p>
              <p className="DatumArtist">Martin Garrix</p>
              <p className="DatumStreams">54106 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Shape of You</p>
              <p className="DatumArtist">Ed Sheeran</p>
              <p className="DatumStreams">46395 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Strip That Down</p>
              <p className="DatumArtist">Liam Payne</p>
              <p className="DatumStreams">58857 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">2U (feat. Justin Bieber)</p>
              <p className="DatumArtist">David Guetta</p>
              <p className="DatumStreams">54657 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Back to You
              (feat. Bebe Rexha &#38; Digital Farm Animals)</p>
              <p className="DatumArtist">Louis Tomlinson</p>
              <p className="DatumStreams">63170 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">How Long</p>
              <p className="DatumArtist">Charlie Puth</p>
              <p className="DatumStreams">79807 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">What Lovers Do (feat. SZA)</p>
              <p className="DatumArtist">Maroon 5</p>
              <p className="DatumStreams">70227 Streams</p>
            </td>
          </tr>
          <tr className="CDRow">
            <td className="PositionCol">8</td>
            <td className="CDDatum">
              <p className="DatumTitle">Bad Things (with Camila Cabello)</p>
              <p className="DatumArtist">Machine Gun Kelly</p>
              <p className="DatumStreams">29412 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Versace On The Floor</p>
              <p className="DatumArtist">Bruno Mars</p>
              <p className="DatumStreams">44093 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Stay (with Alessia Cara)</p>
              <p className="DatumArtist">Zedd</p>
              <p className="DatumStreams">59815 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Versace On The Floor</p>
              <p className="DatumArtist">Bruno Mars</p>
              <p className="DatumStreams">44652 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Stay (with Alessia Cara)</p>
              <p className="DatumArtist">Zedd</p>
              <p className="DatumStreams">59721 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">That's What I Like</p>
              <p className="DatumArtist">Bruno Mars</p>
              <p className="DatumStreams">52116 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Feels</p>
              <p className="DatumArtist">Calvin Harris</p>
              <p className="DatumStreams">58224 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Back to You
              (feat. Bebe Rexha &#38; Digital Farm Animals)</p>
              <p className="DatumArtist">Louis Tomlinson</p>
              <p className="DatumStreams">58224 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Mama</p>
              <p className="DatumArtist">Jonas Blue</p>
              <p className="DatumStreams">53756 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Havana</p>
              <p className="DatumArtist">Camila Cabello</p>
              <p className="DatumStreams">60007 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Wolves</p>
              <p className="DatumArtist">Selena Gomez</p>
              <p className="DatumStreams">79549 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">How Long</p>
              <p className="DatumArtist">Charlie Puth</p>
              <p className="DatumStreams">70150 Streams</p>
            </td>
          </tr>
          <tr className="CDRow">
            <td className="PositionCol">9</td>
            <td className="CDDatum">
              <p className="DatumTitle">I Don’t Wanna Live Forever
              (feat. Taylor Swift)</p>
              <p className="DatumArtist">ZAYN</p>
              <p className="DatumStreams">28572 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Scared to Be Lonely</p>
              <p className="DatumArtist">Martin Garrix</p>
              <p className="DatumStreams">43803 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">I Don’t Wanna Live Forever
              (feat. Taylor Swift)</p>
              <p className="DatumArtist">ZAYN</p>
              <p className="DatumStreams">58639 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Paris</p>
              <p className="DatumArtist">The Chainsmokers</p>
              <p className="DatumStreams">43211 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">It Ain't Me (with Selena Gomez)</p>
              <p className="DatumArtist">Kygo</p>
              <p className="DatumStreams">52881 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Good Life
              (with G-Eazy &#38; Kehlani)</p>
              <p className="DatumArtist">G-Eazy</p>
              <p className="DatumStreams">51195 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Symphony (feat. Zara Larsson)</p>
              <p className="DatumArtist">Clean Bandit</p>
              <p className="DatumStreams">44434 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">There for You</p>
              <p className="DatumArtist">Martin Garrix</p>
              <p className="DatumStreams">57595 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Friends (with BloodPop®)</p>
              <p className="DatumArtist">Justin Bieber</p>
              <p className="DatumStreams">51503 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">What Lovers Do (feat. SZA)</p>
              <p className="DatumArtist">Maroon 5</p>
              <p className="DatumStreams">60002 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Akad</p>
              <p className="DatumArtist">Payung Teduh</p>
              <p className="DatumStreams">70730 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Perfect Duet
              (Ed Sheeran &#38; Beyoncé)</p>
              <p className="DatumArtist">word</p>
              <p className="DatumStreams">word Streams</p>
            </td>
          </tr>
          <tr className="CDRow">
            <td className="PositionCol">10</td>
            <td className="CDDatum">
              <p className="DatumTitle">Alone</p>
              <p className="DatumArtist">Marshmello</p>
              <p className="DatumStreams">28562 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Don't Wanna Know</p>
              <p className="DatumArtist">Maroon 5</p>
              <p className="DatumStreams">40962 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Versace On The Floor</p>
              <p className="DatumArtist">Bruno Mars</p>
              <p className="DatumStreams">53838 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Say You Won't Let Go</p>
              <p className="DatumArtist">James Arthur</p>
              <p className="DatumStreams">39717 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Scared to Be Lonely</p>
              <p className="DatumArtist">Martin Garrix</p>
              <p className="DatumStreams">45754 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Stay (with Alessia Cara)</p>
              <p className="DatumArtist">Zedd</p>
              <p className="DatumStreams">49912 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Something Just Like This</p>
              <p className="DatumArtist">The Chainsmokers</p>
              <p className="DatumStreams">44297 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Thunder</p>
              <p className="DatumArtist">Imagine Dragons</p>
              <p className="DatumStreams">49592 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Havana</p>
              <p className="DatumArtist">Camila Cabello</p>
              <p className="DatumStreams">47735 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">DNA</p>
              <p className="DatumArtist">BTS</p>
              <p className="DatumStreams">55545 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Silence</p>
              <p className="DatumArtist">Marshmello</p>
              <p className="DatumStreams">67311 Streams</p>
            </td>
            <td className="CDDatum">
              <p className="DatumTitle">Silence</p>
              <p className="DatumArtist">Marshmello</p>
              <p className="DatumStreams">64579 Streams</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default IDTable;
