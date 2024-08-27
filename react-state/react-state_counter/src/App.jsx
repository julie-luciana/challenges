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
            console.log("minus 🤔");
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("plus 🤔");
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
