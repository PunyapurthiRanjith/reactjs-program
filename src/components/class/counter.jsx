import { Component } from "react";
import { errorToast, infoToast, successToast } from "../toasts/toasts-functions";

class Counter extends Component {
  state = {
    count: 0,
  };
  incrementHandler = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        successToast(`The current count ${this.state.count}`,"top-right")
      }
    );
  };
  decrementHandler = () => {
    this.setState({
      count: this.state.count - 1,
    },
    ()=>{
      errorToast(`The current count ${this.state.count}`,"top-right")
    }
  );
  };
  resetHandler = () => {
    this.setState({
      count: 0,
    },
    ()=>{
      infoToast("The count is 0","top-right")
    }
  );
  };
  render() {
    return (
      <>
        <h1>Counter {this.state.count}</h1>
        <button onClick={this.incrementHandler}>Increment</button>
        <button onClick={this.decrementHandler}>Decrement</button>
        <button onClick={this.resetHandler}>Reset</button>
      </>
    );
  }
}

export default Counter;
