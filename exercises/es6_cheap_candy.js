"use strict";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
   ];

// Which candies costs less than $4.00?
let lessCostCandies = products.filter(item => item.price < 4.00).forEach((item) => console.log(`${item.product} ${item.price}`));

// Which candies has "M&M" its name?
let mmCandies = products.filter(item => item.product.includes("M&M")).forEach((item) => console.log(`${item.product}`));
// Do we carry "Swedish Fish"?

let findProduct = products.find((item) => item.product == "Swedish Fish");

if (findProduct) {
  console.log("We carry Swedish Fish.");
} else {
  console.log("We do not carry Swedish Fish.");
}
   