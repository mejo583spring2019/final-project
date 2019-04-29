/* eslint-disable require-jsdoc */ /* DELETE LATER */
import Table from "../Table";
import top100Data from "../../data/Top100data";
import "./styles.css";

class Top100Table extends Table {
    tableData = top100Data;
    height: "100px";
    columns = [
      {title: "Position", field: "position"},
      {title: "Name", field: "name"},
      {title: "Artist", field: "artists"},
      {title: "Danceability", field: "danceability"},
      {title: "Energy", field: "energy"},
      {title: "Key", field: "key"},
      {title: "Loudness", field: "loudness"},
      {title: "Mode", field: "mode"},
      {title: "Speechiness", field: "speechiness"},
      {title: "Acousticness", field: "acousticness"},
      {title: "Instrumentalness", field: "instrumentalness"},
      {title: "Liveness", field: "liveness"},
      {title: "Valence", field: "valence"},
      {title: "Tempo", field: "tempo"},
      {title: "Duration", field: "duration_ms"},
      {title: "Time Signature", field: "time_signature"},
    ];
}

export default Top100Table;
