import React, { Component } from "react";
import Table from "./Table";

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
       
        <div className={`cliks-${count}`}>{count} clicks</div>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          increment
        </button>

        <h1>Article Details</h1>
        <Table />
      </div>
    );
  }
}
