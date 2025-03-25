import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";
export default function Volumes() {
  const router = useRouter();
  function handleRandomVolume() {
    function getRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    const randomVolume = getRandomElement(volumes);
    console.log("randomVolume: ", randomVolume);
    router.push(`/volumes/${randomVolume.slug}`);
  }
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomVolume}>random volume</button>
    </>
  );
}
