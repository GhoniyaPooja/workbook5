"use strict";

let cart = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 },
];

//    let productName = [];
//    for (const product of cart) {
//     productName.push(product.item);
//    }


//******************Using the map ()*********************************** 
// function getProductName(product) {
//   return product.item;
// }
// let productName = cart.map(getProductName);


//************************Using function inside the map (function name not required)******************************
// let productName = cart.map(function (product) {
//     return product.item
// });


//***********************using arrow and forEach*******************************
let productName = cart.map((product) => product.item);
productName.forEach(function print(productName) {
    console.log(productName);
});
