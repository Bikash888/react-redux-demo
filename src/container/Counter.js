import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../component/CounterController";
import CounterOutput from "../component/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.counterValue} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementHandler}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementHandler}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddedFive} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractFive}
        />
      </div>
    );
  }
}
//mapstatetoprops get the state in our components as a props
const mapStateToProps = (state) => {
  return {
    counterValue: state.counter,
  };
};
//trigger which action is to perform according to component
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementHandler: () => dispatch({ type: "INCREMENT" }), //should match with case of reducer
    onDecrementHandler: () => dispatch({ type: "DECREMENT" }),
    onAddedFive: () => dispatch({ type: "ADD5", value: 5 }),
    onSubtractFive: () => dispatch({ type: "SUBTRACT5", value: 5 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
