//Import
import { useEffect, useState } from "react";
import "./PokemonList.css";
export default function PokemonList() {
  // useState
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  // useEffekt

  useEffect(() => {
    async function loadPokemon(offset) {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
        );
        const data = await response.json();
        setPokemon(data.results);
        setNext(data.next);
        setPrevious(data.previous);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon(offset);
  }, [offset]);

  // Event Handler for navigation
  const handleNextPage = () => {
    if (next) {
      setOffset(offset + 20);
    }
  };

  const handlePreviousPage = () => {
    if (previous) {
      setOffset(offset - 20);
    }
  };
  // rendering UI
  return (
    <main>
      <button
        type="button"
        className="button"
        onClick={handlePreviousPage}
        disabled={!previous}
      >
        Previous Page
      </button>
      <button
        type="button"
        className="button"
        onClick={handleNextPage}
        disabled={!next}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name} className="pokemon">
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}
