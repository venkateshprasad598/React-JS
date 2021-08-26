import React from "react";
import { Component } from "react";

// LIFE CYCLE METHODS
class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      ignore: 0,
    };
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
  }
  static getDerivedStateFromProps(prop, state) {
    console.log(prop);
    console.log(state);
    return {
      count: prop.ignore,
    };
  }

  handleIncrease() {
    this.setState((pre) => {
      return {
        count: pre.count + 1,
      };
    });
  }
  handleDecrease() {
    this.setState((pre) => {
      return {
        count: pre.count - 1,
      };
    });
  }

  componentDidMount() {
    console.log("Component Mounted");
    console.log("-------------------");
  }

  render() {
    console.log(this.props.ignore);

    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handleIncrease}>increase</button>
        <button onClick={this.handleDecrease}> Decrease</button>
        {this.props.ignore}
      </div>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(nextState);
    console.log(this.props.ignore);
    if (this.props.ignore !== nextProps.ignore) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate(prevProps, prevState, Snapshot) {
    console.log("Component did update");
    console.log("-------------------");
  }
  componentWillUnmount() {
    console.log("Component did Unmount");
    console.log("-------------------");
  }
}
export default App1;
