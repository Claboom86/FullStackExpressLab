"use strict";

const express = require("express");
const app = express();
const cartItems = require("./cart-items");

app.use(express.static("./public"));
app.use(express.json());
app.use("/", cartItems);


app.listen(3000, () => {
    console.log(`Server is running on PORT: 3000`);
});
