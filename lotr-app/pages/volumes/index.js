import Link from "next/link";

export default function Volumes() {
  return (
    <>
      <h1>Volumes-Page </h1>
      <p>Purpose: Display list with links to all volumes</p>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            the fellowship of the ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">the two towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            the return of the king
          </Link>
        </li>
      </ul>
    </>
  );
}
