import {useSelector, useDispatch} from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () =>{
    dispatch({type : 'INCREMENT'});
  }

  const increaseHandler = () =>{
    dispatch({type : 'INCREASE', val:5});
  }

  const decrementHandler = () =>{
    dispatch({type : 'DECREMENT'});
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{ counter }</div>
      <div>
        <button className={classes.m10} onClick={incrementHandler}>Increment</button>
        <button className={classes.m10} onClick={increaseHandler}>Increase by 5</button>
        <button className={classes.m10} onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
