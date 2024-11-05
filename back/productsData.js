const stores = [
  {
    storeId: 1,
    name: "Store A",
    products: [
      { id: 1, name: "Product A1", category: "Electronics", price: 100, inStock: true },
      { id: 2, name: "Product A2", category: "Electronics", price: 150, inStock: false },
      { id: 3, name: "Product A3", category: "Books", price: 20, inStock: true },
      { id: 4, name: "Product A4", category: "Clothing", price: 50, inStock: true },
      { id: 5, name: "Product A5", category: "Books", price: 15, inStock: false },
    ]
  },
  {
    storeId: 2,
    name: "Store B",
    products: [
      { id: 6, name: "Product B1", category: "Clothing", price: 55, inStock: true },
      { id: 7, name: "Product B2", category: "Electronics", price: 300, inStock: true },
      { id: 8, name: "Product B3", category: "Books", price: 25, inStock: false },
      { id: 9, name: "Product B4", category: "Clothing", price: 60, inStock: true },
      { id: 10, name: "Product B5", category: "Books", price: 30, inStock: true },
    ]
  },
  {
    storeId: 3,
    name: "Store C",
    products: [
      { id: 11, name: "Product C1", category: "Electronics", price: 200, inStock: true },
      { id: 12, name: "Product C2", category: "Books", price: 10, inStock: true },
      { id: 13, name: "Product C3", category: "Clothing", price: 70, inStock: false },
      { id: 14, name: "Product C4", category: "Electronics", price: 250, inStock: true },
      { id: 15, name: "Product C5", category: "Books", price: 18, inStock: false },
    ]
  }
];

module.exports = stores;
