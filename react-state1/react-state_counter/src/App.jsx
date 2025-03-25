import "./App.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
            console.log("Minus");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
            console.log("🤔");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
