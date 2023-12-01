import React, { Component } from "react";

export class Data extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
        };
    }

    incrementState = () => {
        this.setState((prev)=>({
            count: prev.count+1
        }))
    }

    decrementState = () => {
        this.setState((prev)=>({
            count: prev.count-1
        }))
    }

    resetState = () => {
        this.setState(()=>({
            count: 0
        }))
    }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <h2>{this.state.count}</h2>
        <div className="buttons">
          <button className="button" onClick={this.incrementState}>+</button>
          <button className="button" onClick={this.decrementState}>-</button>
          <button className="button" onClick={this.resetState}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Data;
