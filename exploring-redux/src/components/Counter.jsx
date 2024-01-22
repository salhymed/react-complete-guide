import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: 'increment' });
  };
  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
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
