import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { counterActions } from '../store/counter';

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);

  const dispatch = useDispatch();
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const decreaseHandler = () => {
    dispatch(counterActions.increase(-5));
  };

  const isVisible = useSelector((state) => state.counter.isVisible);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isVisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increaseHandler}>+5</button>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={decreaseHandler}>-5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
// import React, { Component } from 'react'
// import {connect} from 'react-redux'

// export class Counter extends Component {

//   increment(){
//     this.props.increment();
//   }
//   decrement(){
//     this.props.decrement();
//   }
//   toggleCounterHandler(){}
//   render() {
//     return (
//       <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.increment.bind(this)}>+</button>
//         <button onClick={this.decrement.bind(this)}>-</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//     )
//   }
// }
// const mapStateToProps = state => {
//   return {
//     counter: state.counter

//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type:'increment'}),
//     decrement: () => dispatch({type:'decrement'})
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
