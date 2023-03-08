import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prevState, prevProps) => {
      return { count: prevState.count + prevProps.diff };
    });
  };

  decrement = () => {
    this.setState((prevState, prevProps) => {
      return { count: prevState.count - prevProps.diff };
    });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>{this.state.count}</h1>
        <div>
          <button onClick={this.increment}>+{this.props.diff}</button>
          <button onClick={this.decrement}>-{this.props.diff}</button>
        </div>
      </div>
    );
  }
}
