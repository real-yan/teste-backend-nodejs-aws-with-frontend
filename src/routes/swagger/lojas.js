const app = require('express').Router();
const lojas = require('../../controllers/swagger/lojas')

/**
 * @swagger
 * /lojas:
 *  get:
 *      summary: Retorna todas as lojas cadastradas.
 *      responses: 
 *          '200':
 *              description: Sucesso
 *          '400':
 *              description: Erro inesperado 
 */
app.get("/lojas", lojas.retornaTodasLojas);

/**
 * @swagger
 * /lojas/adicionar:
 *  post:
 *      summary: Cadastra uma nova loja.
 *      parameters:
 *        - name: loja
 *          in: body
 *          required: true
 *          description: Conteúdo da loja a ser cadastrada.
 *          schema:
 *              type: object
 *              properties:
 *                  nome:
 *                      type: string
 *                  cnpj:
 *                      type: string
 *                  rua:
 *                      type: string
 *                  numero:
 *                      type: integer
 *                  bairro:
 *                      type: string
 *                  complemento:
 *                      type: string
 *                  cidade:
 *                      type: string
 *                  uf:
 *                      type: string
 *                  telefone:
 *                      type: string
 *                  email:
 *                      type: string
 *                  responsavel:
 *                      type: string
 *              required:
 *                - nome
 *                - cnpj
 *                - rua
 *                - numero
 *                - bairro
 *                - cidade
 *                - uf
 *              example:
 *                  nome: Mercado da Rua XV
 *                  cnpj: 14.330.017/0002-11
 *                  rua: Rua XV
 *                  numero: 1500
 *                  bairro: Bairro da Rua XV
 *                  complemento:
 *                  cidade: Fortaleza
 *                  uf: CE
 *                  telefone: (85)99999-9999
 *                  email: emailexemplo@hotmail.com
 *                  responsavel: Yan Real
 *      responses: 
 *          '201':
 *              description: Criada
 *          '400':
 *              description: Erro inesperado 
 */
app.post("/lojas/adicionar", lojas.criaNovaLoja);

/**
 * @swagger
 * /loja/{id}:
 *  get:
 *      summary: Retorna uma loja passando como parâmetro o seu id.
 *      parameters:
 *        - name: id
 *          in: path
 *          type: integer
 *          required: true
 *          description: ID da loja desejada.
 *      responses: 
 *          '200':
 *              description: Sucesso
 *          '400':
 *              description: Erro inesperado 
 */
app.get("/loja/:id", lojas.retornaLoja);

/**
 * @swagger
 * /lojas/alterar/{id}:
 *  post:
 *      summary: Altera o cadastro de uma loja.
 *      parameters:
 *        - name: id
 *          in: path
 *          type: integer
 *          required: true
 *          description: ID da loja desejada.
 *        - name: loja
 *          in: body
 *          description: Conteúdo da loja a ser alterada.
 *          schema:
 *              type: object
 *              properties:
 *                  nome:
 *                      type: string
 *                  cnpj:
 *                      type: string
 *                  rua:
 *                      type: string
 *                  numero:
 *                      type: integer
 *                  bairro:
 *                      type: string
 *                  complemento:
 *                      type: string
 *                  cidade:
 *                      type: string
 *                  uf:
 *                      type: string
 *                  telefone:
 *                      type: string
 *                  email:
 *                      type: string
 *                  responsavel:
 *                      type: string
 *              required:
 *                - nome
 *                - cnpj
 *                - rua
 *                - numero
 *                - bairro
 *                - cidade
 *                - uf
 *              example:
 *                  nome: Mercadinho da Rua XVI
 *                  cnpj: 14.330.017/0001-11
 *                  rua: Rua XVI
 *                  numero: 1500
 *                  bairro: Bairro da Rua XVI
 *                  complemento:
 *                  cidade: Fortaleza
 *                  uf: CE
 *                  telefone: (85)99999-9999
 *                  email: emailexemplo@hotmail.com
 *                  responsavel: Yan Real
 *      responses: 
 *          '200':
 *              description: Sucesso
 *          '400':
 *              description: Erro inesperado 
 */
app.post("/lojas/alterar/:id", lojas.atualizaLoja);

/**
 * @swagger
 * /lojas/remover:
 *  post:
 *      summary: Remove uma loja cadastrada.
 *      parameters:
 *        - name: loja
 *          in: body
 *          description: Id da loja a ser removida.
 *          schema:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *              required:
 *                - id
 *              example:
 *                  id: 1
 *      responses: 
 *          '200':
 *              description: Sucesso
 *          '400':
 *              description: Falha
 */
app.post("/lojas/remover", lojas.removeLoja);

module.exports = app;
