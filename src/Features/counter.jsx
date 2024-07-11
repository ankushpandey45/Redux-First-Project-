import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./CounterSlice";
// import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>{count}</h2>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Dec
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Inc
        </button>
      </div>
    </div>
  );
}
