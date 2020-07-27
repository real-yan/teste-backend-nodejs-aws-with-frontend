const app = require('express').Router();
const lojas = require('../controllers/lojas')

app.get("/listarlojas", lojas.listarTodasLojas);

app.get("/cadastrarloja", lojas.cadastrarNovaLoja);

app.post("/cadastrarloja/salvar", lojas.salvarLojaCadastrada);

app.get("/alterarloja/:id", lojas.alterarLojaCadastrada);

app.post("/alterarloja/salvar/:id", lojas.salvarLojaAlterada);

app.post("/removerloja", lojas.removerLojaCadastrada);

module.exports = app;