import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }

  // Add Post route
  // pages/api/index.js
  if (request.method === "POST") {
    try {
      /* Save the product data submitted by the form - accessible in request.body - to a variable called productData*/
      const productData = request.body;
      /* use Product.create with the productData to create a new document in our collection. 
      Wait until the new product was saved
      */
      await Product.create(productData);

      // respond with status 201
      response.status(201).json({ status: "Procuct created" });
    } catch (error) {
      // If an error occurs: Log the error to the console & respond with status 400
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
