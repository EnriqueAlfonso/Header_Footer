const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();

const path_public = path.join(__dirname, "./public");

app.listen(3000, () => console.log("Port: 3000"));

app.use(express.static(path_public));

app.get("/", (required, response) => {
    let path_producto = path.join(__dirname, "./views/index.html");

    response.sendFile(path_producto);
});

app.get("/producto", (required, response) => {
    let path_producto = path.join(__dirname, "./views/producto.html");

    response.sendFile(path_producto);
});

app.get("/pago", (required, response) => {
    let path_producto = path.join(__dirname, "./views/pago.html");

    response.sendFile(path_producto);
});
