// DETAILSEITE PRODUKT - dynamische Produktseite
// Dynamische Produktdetailseite (Client-seitig)

import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Price: ${data.price}</p>
      <p>Description: {data.description}</p>
    </div>
  );
}
