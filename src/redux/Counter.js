// components/Counter.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions';

class Counter extends React.Component {
  render() {
    const { count, increment, decrement } = this.props;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
