const app = require("express").Router();
const lojas = require("./lojas")
const produtos = require("./produtos")
const lojasSwagger = require("./swagger/lojas");
const produtosSwagger = require("./swagger/produtos");

/**
 * Rota para a página principal
 */
app.get("/", (req, res) => {
    res.render("home/index");
});

app.use(lojas);
app.use(produtos);
app.use(lojasSwagger);
app.use(produtosSwagger);

module.exports = app;
