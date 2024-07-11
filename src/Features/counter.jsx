import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
       <div>
        <h2>{count}</h2>
        <button onClick={() => dispatch(decrement())}>Dec</button>
        <button onClick={() => dispatch(increment())}>Inc</button>
      </div>
    </div>
  );
};

export default Counter;
