 import React,{Component} from "react";
 
 export default class  MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    render() {
      const { count } = this.state;
      return (
        <div>
          <div className={`clicks-${count}`}>
            {count} clicks
          </div>
          <button onClick={() => { this.setState({ count: count + 1 }); }}>
            Increment
          </button>
        </div>
      );
    }
  }
