import React, { Component } from "react";
import Tabulator from "tabulator-tables"; // import Tabulator library
import "tabulator-tables/dist/css/tabulator.min.css";
import albumList from "../../data/index";
import { truncateSync } from "fs";
// import Tabulator stylesheet

/** create table
 * @return {any}
*/
class Table extends Component {
    el = React.createRef();

    tabulator = null; // variable to hold your table
    tableData = albumList; // data for table to display
    columns = [
        { title: "Number", field: "number" },
        { title: "Year Released", field: "year" },
        { title: "Album Name", field: "album" },
        { title: "Artist Name", field: "artist" },
        { title: "Genre", field: "top_genre" }
    ]; // headers for table columns
    tableHeader = "Rolling Stone's Top 500 Albums (as of 2012)";

    /** instantiate Tabulator when element is mounted
      * @param {object} this.el
     */
    componentDidMount() {
        this.tabulator = new Tabulator(this.el, {
            height: "500px",
            resizableColumns: true,
            data: this.tableData, // link data to table
            reactiveData: true, // enable data reactivity
            columns: this.columns, // define table columns
        });
    }

    /** render header with table
     *  @return {any}
     */
    render() {
        return (
            <div>
                <h2>{this.tableHeader}</h2>
                <div ref={(el) => (this.el = el)} />
            </div>
        );
    }
}


export default Table;
