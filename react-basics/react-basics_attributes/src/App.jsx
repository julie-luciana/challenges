import "./App.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">New here</h2>
      <label htmlFor="userInput"> Enter your name</label>
      <input id="userInput" type="text"></input>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
      >
        Text Content
      </a>
    </article>
  );
}
