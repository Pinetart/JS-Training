const prices = [20, 10, 30, 25, 15, 40, 80, 6];

// const salePrices = prices.map((price) => price / 2);
// console.log(salePrices)

const products = [
  { name: "gold star", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 30 },
  { name: "banana skin", price: 10 },
  { name: "red shells", price: 50 },
];

const saleProducts = products.map((product) => {
  if (product.price > 30) {
    // product.price = product.price / 2;
    // return product
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});

console.log(saleProducts, products);
