import “./App.css”;
import { useState } from “react”;
export default function App() {
  const [isActive, setIsActive] = useState(false);
  function handleClick() {
    setIsActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }
  return (
    <main>
      <div className={`box ${isActive ? “box--active” : “”}`} />
      <button onClick={handleClick}>
        {isActive ? “Deactivate” : “Activate”}
      </button>
    </main>
  );
}
// Bonus Task
/* the console.log is in the handleClick-function, which turns the state of
isActive and console.log’s the old/opposite value.
It is updated in the next call, but then it is updated again, thats why it’s always
vice vera.*/









