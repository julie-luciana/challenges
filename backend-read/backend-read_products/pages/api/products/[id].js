//import { products } from "../../../lib/products";
import dbConnect from "@/db/connect";
import Product from "@/db/models/Products";
/* ALT: 
export default function handler(request, response) {
  const { id } = request.query;

  const product = products.find((product) => product.id === id);

  if (!product) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(product);
}
  */

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  const product = await Product.findById(id);

  if (!product) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(product);
}

/**
 * // import { products } from "../../../lib/products";
import dbConnect from "@/db/connect";
import Product from "@/db/models/Products";

export default async function handler(request, response) {
  console.log("Connecting to database...");
  await dbConnect();
  console.log("Connected to database");

  if (request.method === "GET") {
    try {
      const products = await Product.find();
      console.log("Products found:", products);
      return response.status(200).json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      return response.status(500).json({ message: "Error fetching products" });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}

 */
