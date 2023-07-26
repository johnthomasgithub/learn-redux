import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
type counterType = {
  counter: {
    count: number;
  };
};
const Counter = () => {
  const count = useSelector((state: counterType) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  );
};

export default Counter;
