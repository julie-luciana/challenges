import "./App.css";
/**Welcome to the React Universe!
Have a look at the [App.jsx](./src/App.jsx) file: you will find a default 
export function called `App` which returns a `<div>`.

Once running in your browser, the content of the `<div>` ("Say hello...") 
should be visible there as well.
Now, let us cherish a tradition and render "Hello world!". */

// Task 1

// Task 2: Create Your First Custom Component
export default function App() {
  return <HelloWorld />;
}

function HelloWorld() {
  return <h1>Hello world!</h1>;
}
