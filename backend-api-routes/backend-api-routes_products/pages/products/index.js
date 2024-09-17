/**
 * Wozu dient dieser Code?
Zweck: Dies ist die Frontend-Komponente, die auf der Route /products angezeigt wird.

Aufgabe: Der Code ruft die API-Route (/api/products) ab, um die Liste aller Produkte zu holen, und zeigt sie dem Benutzer an.

Verwendung: Die Komponente verwendet useSWR zum Abrufen der Daten und erstellt eine Liste, wobei für jedes Produkt ein Link zum jeweiligen Detail angezeigt wird.
Verbindung zur API-Route (/api/products):
Diese Komponente verwendet die API-Route, die du in pages/api/products/index.js definiert hast. Die API-Route liefert die Daten, die im Frontend angezeigt werden.
Die fetcher-Funktion holt die Daten von /api/products, und useSWR aktualisiert die Komponente, sobald die Daten geladen sind.
 */

import useSWR from "swr";
import Link from "next/link";

// Fetcher-Funktion definieren
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Products() {
  const { data, error } = useSWR("/api/products", fetcher);

  // Fehlerbehandlung für den Fall, dass die Daten nicht geladen werden
  if (error) {
    return <h1>Failed to load data</h1>;
  }

  // Ladeanzeige, solange die Daten noch nicht verfügbar sind
  if (!data) {
    return <h1>Loading...</h1>;
  }

  // Wenn die Daten erfolgreich geladen wurden, zeige die Produktliste an

  return (
    <ul>
      {data.map(({ category, currency, description, id, name, price }) => {
        return (
          <li key={id}>
            <Link href={`/products/${id}`}>
              <h1>{name}</h1>
            </Link>
            <p>{category}</p>
            <p>{description}</p>
            <p>
              {price}
              {currency}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
