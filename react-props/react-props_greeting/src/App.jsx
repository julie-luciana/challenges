import "./App.css";

export default function App() {
  return (
    <>
      <Greeting name="Jan" />
      <Greeting name="Test" />
    </>
  );
}

function Greeting({ name }) {
  const coaches = ["Jan", "Klaus"];
  return <h1>Hello {coaches.includes(name) ? "coach" : name}</h1>;
}
