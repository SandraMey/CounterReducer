import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    counter: state
  });
  
const CounterComponent = ({ counter, dispatch }) => (
<div>
    <p>{counter}</p>
    <button
    onClick={() => dispatch({ type: 'INCREMENT' })}
    >
    Increment
    </button>
    <button
    onClick={() => dispatch({ type: 'DECREMENT' })}
    >
    Decrement
    </button>
    <button
    onClick={() => dispatch({ type: 'DECREMENTBYTEN' })}
    >
    DecrementByTen
    </button>
    <button
    onClick={() => dispatch({ type: 'INCREMENTBYTEN' })}
    >
    IncrementByTen
    </button>
    <button
    onClick={() => dispatch({ type: 'RESET' })}
    >
    Reset
    </button>
</div>
);

export default connect(mapStateToProps)(CounterComponent);