/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import Tabulator from "tabulator-tables"; // import Tabulator library
import "tabulator-tables/dist/css/tabulator.min.css";
// import Tabulator stylesheet


class Table extends Component {
    el = React.createRef();
    tabulator = null; // variable to hold your table
    tableData = [
      {id:
        1, name: "Billy Bob",
      age: 12,
      gender: "male",
      height: 95,
      col: "red",
      dob: "14/05/2010"},
      {id: 2,
        name: "Jenny Jane",
        age: 42,
        gender: "female",
        height: 142,
        col: "blue",
        dob: "30/07/1954"}, {
        id: 3,
        name: "Steve McAlistaire",
        age: 35,
        gender: "male",
        height: 176,
        col: "green",
        dob: "04/11/1982"},
    ]; // data for table to display
    columns = [
      {
        title: "Name",
        field: "name",
        sorter: "string",
        width: 200,
        editor: true}, {
        title: "Age",
        field: "age",
        sorter: "number",
        align: "right",
        formatter: "progress"}, {
        title: "Gender",
        field: "gender",
        sorter: "string",
        cellClick: function(e, cell) {
        // eslint-disable-next-line no-console
          console.log("cell click");
        } },
      { title: "Height",
        field: "height",
        formatter: "star",
        align: "center",
        width: 100,
      }, {
        title: "Favourite Color",
        field: "col",
        sorter: "string",
      }, {
        title: "Date Of Birth",
        field: "dob",
        sorter: "date",
        align: "center"}, {
        title: "Cheese Preference",
        field: "cheese",
        sorter: "boolean",
        align: "center",
        formatter: "tickCross"},
    ]; // column definition

    componentDidMount() {
      // instantiate Tabulator when element is mounted
      this.tabulator = new Tabulator(this.el, {
        data: this.tableData, // link data to table
        reactiveData: true, // enable data reactivity
        columns: this.columns, // define table columns
      });
    }

    render() {
      return <div ref={(el) => (this.el = el)} />;
    }
}


export default Table;
