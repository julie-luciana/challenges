//Import dbConnect from the db/connect.js file.
//Import the Product model

import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";
// Make the handler function async and await the connection to the database.
export default async function handler(request, response) {
  await dbConnect();
  // If the request.method is GET use the Product model to find all products and return them as a response
  if (request.method === "GET") {
    const products = await Product.find();
    response.status(200).json(products);
  }
}
