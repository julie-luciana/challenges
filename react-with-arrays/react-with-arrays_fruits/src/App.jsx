import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍒 Cherry",
      color: "red",
    },
    {
      id: 3,
      name: "🥭 mango",
      color: "orange",
    },
    {
      id: 4,
      name: "🫐 blueberry",
      color: "blue",
    },
    {
      id: 5,
      name: "🥑 avocado",
      color: "green",
    },
  ];

  console.log(fruits.map((fruit) => fruit.name));

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card name={fruit.name} color={fruit.color} key={fruit.id} />
      ))}
    </div>
  );
}
