import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
  decrementByAmount,
} from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const [inc, setInc] = useState(0);
  const [dec, setDec] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const addValue = Number(inc) || 0;
  const subValue = Number(dec) || 0;

  const resetAll = () => {
    setDec(0);
    setInc(0);
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
      <div>
        <input
          type="text"
          value={inc}
          onChange={(ev) => setInc(ev.target.value)}
        ></input>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
      </div>{" "}
      <div>
        <input
          type="text"
          value={dec}
          onChange={(ev) => setDec(ev.target.value)}
        ></input>
        <button onClick={() => dispatch(decrementByAmount(subValue))}>
          Subtract Amount
        </button>
      </div>{" "}
    </section>
  );
};

export default Counter;
