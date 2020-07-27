const app = require('express').Router();
const produtos = require('../controllers/produtos')

/**
 * Rota para listar todos os produtos de uma loja.
 */
app.get("/listarprodutos/:lojaid", produtos.listarProdutosDaLoja);

/**
 * Rota para o cadastro de um novo produto.
 */
app.get("/cadastrarproduto/:lojaid", produtos.cadastrarProduto);

/**
 * Rota para a persistência do novo produto na aplicação.
 */
app.post("/cadastrarproduto/salvar", produtos.salvarProdutoCadastrado);

/**
 * Rota para alterar o cadastro de um produto.
 */
app.get("/alterarproduto/:lojaid/:id", produtos.alterarProduto);

/**
 * Rota para a persistência do produto alterado na aplicação.
 */
app.post("/alterarproduto/salvar/:id", produtos.salvarProdutoALterado);

/**
 * Rota para a remoção de um produto.
 */
app.post("/removerproduto/:lojaid", produtos.removerProduto);

module.exports = app;