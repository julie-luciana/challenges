import Counter from "./components/Counter";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);
  function incrementPeople() {
    setPeople(people + 1);
  }
  function decrementPeople() {
    setPeople(people - 1);
  }
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onAddPerson={incrementPeople} onRemovePerson={decrementPeople} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
