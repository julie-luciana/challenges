import { volumes } from "resources/lib/data";
import Link from "next/link";

export default function TheReturnOfTheKings() {
  const volume = volumes.find(
    (volume) => volume.slug === "the-return-of-the-king"
  );
  return (
    <>
      <Link href="/volumes"> ← All Volumes </Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>

      <ul>
        {volume && volume.books ? (
          volume.books.map((book, index) => (
            <li key={index}>
              <strong>{book.ordinal}:</strong> {book.title}
            </li>
          ))
        ) : (
          <p>No books</p>
        )}
      </ul>
    </>
  );
}
