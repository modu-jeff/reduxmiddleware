import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import {
  decrease,
  decreaseAsync,
  increase,
  increaseAsync,
} from "./store/counter";
import { AppDispatch } from "./store";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter.value);

  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseAsync = () => {
    dispatch(increaseAsync());
  };
  const onDecreaseAsync = () => {
    dispatch(decreaseAsync());
  };
  return (
    <div className="App">
      <div>count is {count}</div>
      <button onClick={onDecreaseAsync}>-1Async</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onIncreaseAsync}>+1Async</button>
    </div>
  );
}

export default App;
