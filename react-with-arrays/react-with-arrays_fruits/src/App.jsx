import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [];

  const fruit1 = {
    id: 1337,
    name: "🍌 Banana",
    color: "yellow",
  };
  const fruit2 = {
    id: 2,
    name: "🍒 Cherry",
    color: "red",
  };
  const fruit3 = {
    id: 3,
    name: "🥭 mango",
    color: "orange",
  };
  const fruit4 = {
    id: 4,
    name: "🫐 blueberry",
    color: "blue",
  };
  const fruit5 = {
    id: 5,
    name: "🥑 avocado",
    color: "green",
  };
  fruits.push(fruit1);
  fruits.push(fruit2);
  fruits.push(fruit3);
  fruits.push(fruit4);
  fruits.push(fruit5);
  console.log(fruits);

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card name={fruit.name} color={fruit.color} key={fruit.id} />
      ))}
    </div>
  );
}
