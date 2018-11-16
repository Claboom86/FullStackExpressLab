"use strict";
const express = require("express")
const cartItems = express.Router();

const items = [
    {
        id: 0,
        product: "Apples",
        price: 3,
        quantity: 8
    },
    {
        id: 1,
        product: "Cheese",
        price: 4,
        quantity: 2
    },
    {
        id: 2,
        product: "Chips",
        price: 2,
        quantity: 1
    }
];

cartItems.get("/cart-items", (req, res) => {
    res.json(items);
});

// cartItems.post("/cart-items", (req, res) => {
//     items.push(req.body);
//     res.json(items);
// });

// cartItems.delete("/cart-items/:id", (req, res) => {
//     items.splice(req.params.id, 1);
//     res.json(items);
// });

// cartItems.put("/cart-items/:id", (req, res) => {
//     items[req.params.id] = req.body;
//     res.json(items);
// });

module.exports = cartItems;