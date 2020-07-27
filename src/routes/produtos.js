const app = require('express').Router();
const produtos = require('../controllers/produtos')

app.get("/listarprodutos/:lojaid", produtos.listarProdutosDaLoja);

app.get("/cadastrarproduto/:lojaid", produtos.cadastrarProduto);

app.post("/cadastrarproduto/salvar", produtos.salvarProdutoCadastrado);

app.get("/alterarproduto/:lojaid/:id", produtos.alterarProduto);

app.post("/alterarproduto/salvar/:id", produtos.salvarProdutoALterado);

app.post("/removerproduto/:lojaid", produtos.removerProduto);

module.exports = app;