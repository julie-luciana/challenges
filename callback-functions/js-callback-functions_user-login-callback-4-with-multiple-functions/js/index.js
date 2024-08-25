/*
Create a function called calculateTotalPrice that takes two parameters products 
(an array of products) and extractPrice (a callback function).

Inside the calculateTotalPrice function, initialize a variable totalPrice to 
keep track of the total price and set its initial value to 0.

Use a loop, such as a for...of loop, to iterate through the array of products.

In each iteration of the loop, call the provided callback function with the current 
product as an argument to extract its price.

Add the extracted price to the totalPrice variable in each iteration of the loop.

After looping through all the products, return the total price as the 
result of the calculateTotalPrice function.

Create the callback function extractPrice, which should take a product as 
input and return its price.

Use the calculateTotalPrice function with the array of products and the callback 
function to calculate the total price.
*/
const products = [
  { name: "Saffron", price: 50 },
  { name: "Cinnamon", price: 6 },
  { name: "Cardamom", price: 12 },
  { name: "Turmeric", price: 9 },
  { name: "Paprika", price: 4 },
  { name: "Garam Masala", price: 10 },
  { name: "Vanilla Bean", price: 15 },
  { name: "Coriander", price: 6 },
];

function calculateTotalPrice(product, extractPrice) {
  const totalPrice = 2;
  const newPrice = totalPrice + product.price;
  console.log(`The total price of ${product.name} is ` + newPrice);
}
function extractPrice(product) {
  console.log(`The price of ${product.name} is ${product.price}.`);
}
for (const product of products) {
  for (let i = 0; i < products.length; i++) {
    const productNumber = i + 1;
    console.log(`Produkt Nr.`, productNumber, `Name: ${products[i].name}`);
    extractPrice(product);
    calculateTotalPrice(product);
    console.log("_______________");
  }
}
