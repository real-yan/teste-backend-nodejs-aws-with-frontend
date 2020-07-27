const app = require('express').Router();
const lojas = require('../controllers/lojas')

/**
 * Rota para listar todas as lojas.
 */
app.get("/listarlojas", lojas.listarTodasLojas);

/**
 * Rota para o cadastro de uma nova loja.
 */
app.get("/cadastrarloja", lojas.cadastrarNovaLoja);

/**
 * Rota para a persistência da nova loja na aplicação.
 */
app.post("/cadastrarloja/salvar", lojas.salvarLojaCadastrada);

/**
 * Rota para alterar o cadastro de uma loja.
 */
app.get("/alterarloja/:id", lojas.alterarLojaCadastrada);

/**
 * Rota para a persistência da loja alterada na aplicação.
 */
app.post("/alterarloja/salvar/:id", lojas.salvarLojaAlterada);

/**
 * Rota para a remoção de uma loja.
 */
app.post("/removerloja", lojas.removerLojaCadastrada);

module.exports = app;