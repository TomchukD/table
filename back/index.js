const express = require('express');
const stores = require('./productsData');

const app = express();
const PORT = 3000;

function filterProducts(products, filters) {
    return products.filter(product => {
        return (!filters.category || product.category === filters.category) &&
            (!filters.inStock || product.inStock === (filters.inStock === 'true')) &&
            (!filters.minPrice || product.price >= parseFloat(filters.minPrice)) &&
            (!filters.maxPrice || product.price <= parseFloat(filters.maxPrice));
    });
}

app.get('/api/storeA/products', (req, res) => {
    const filters = req.query;
    const store = stores.find(s => s.storeId === 1);
    const filteredProducts = filterProducts(store.products, filters);
    res.json(filteredProducts);
});

app.get('/api/storeB/products', (req, res) => {
    const filters = req.query;
    const store = stores.find(s => s.storeId === 2);
    const filteredProducts = filterProducts(store.products, filters);
    res.json(filteredProducts);
});

app.get('/api/storeC/products', (req, res) => {
    const filters = req.query;
    const store = stores.find(s => s.storeId === 3);
    const filteredProducts = filterProducts(store.products, filters);
    res.json(filteredProducts);
});

app.get('/api/storeA/filters', (req, res) => {
    const filterConfig = [
        { label: "Category", name: "category", type: "select", options: [{ name: "Electronics", value: "Electronics" }, { name: "Books", value: "Books" }] },
        { label: "In Stock", name: "inStock", type: "checkbox", options: [{ name: "Available", value: "true" }, { name: "Out of stock", value: "false" }] },
        { label: "Minimum Price", name: "minPrice", type: "text" }
    ];
    res.json(filterConfig);
});

app.get('/api/storeB/filters', (req, res) => {
    const filterConfig = [
        { label: "Category", name: "category", type: "select", options: [{ name: "Clothing", value: "Clothing" }, { name: "Electronics", value: "Electronics" }] },
        { label: "In Stock", name: "inStock", type: "checkbox", options: [{ name: "Available", value: "true" }] },
        { label: "Maximum Price", name: "maxPrice", type: "text" }
    ];
    res.json(filterConfig);
});

app.get('/api/storeC/filters', (req, res) => {
    const filterConfig = [
        { label: "Category", name: "category", type: "select", options: [{ name: "Books", value: "Books" }, { name: "Electronics", value: "Electronics" }] },
        { label: "Price Range", name: "priceRange", type: "select", options: [{ name: "$0 - $50", value: "0-50" }, { name: "$50 - $100", value: "50-100" }, { name: "$100+", value: "100+" }] },
        { label: "In Stock", name: "inStock", type: "checkbox", options: [{ name: "Available", value: "true" }, { name: "Out of stock", value: "false" }] }
    ];
    res.json(filterConfig);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
