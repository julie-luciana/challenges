// import { products } from "../../../lib/products";
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
