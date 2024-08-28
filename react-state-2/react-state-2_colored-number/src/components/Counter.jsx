import ColoredNumber from "./ColoredNumber";
import "./Counter.css";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
}
/**
 * You can use the following hints as guideline:

Looks like the Counter needs a state; can you think of an appropriate initial value?
You need to pass the current count to the ColoredNumber component as the value prop.
The buttons need to update the state accordingly, how can you achieve that?
 */
