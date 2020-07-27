const app = require('express').Router();
const produtos = require('../../controllers/swagger/produtos')

/**
 * @swagger
 * /produtos/{lojaid}:
 *  get:
 *      summary: Retorna todos os produtos cadastrados passando como parâmetro o id da loja.
 *      parameters:
 *        - name: lojaid
 *          in: path
 *          type: integer
 *          required: true
 *          description: ID da loja desejada para retorno dos produtos.
 *      responses: 
 *          '200':
 *              description: Sucesso
 *          '400':
 *              description: Erro inesperado 
 */
app.get("/produtos/:lojaid", produtos.retornaTodosProdutosDaLoja);

/**
 * @swagger
 * /produtos/adicionar:
 *  post:
 *      summary: Cadastra um novo produto.
 *      parameters:
 *        - name: produto
 *          in: body
 *          required: true
 *          description: Conteúdo do produto a ser cadastrado.
 *          schema:
 *              type: object
 *              properties:
 *                  lojaId:
 *                      type: integer
 *                  codigo:
 *                      type: integer
 *                  nome:
 *                      type: string
 *                  classificacao:
 *                      type: string
 *                  quantidade:
 *                      type: integer
 *                  valor:
 *                      type: float
 *              required:
 *                - lojaId
 *                - codigo
 *                - nome
 *                - classificacao
 *                - quantidade
 *                - valor
 *              example:
 *                  lojaId: 1
 *                  codigo: 789
 *                  nome: Alpino 200g
 *                  classificacao: Doces
 *                  quantidade: 3
 *                  valor: 5.00
 *      responses: 
 *          '201':
 *              description: Criado
 *          '400':
 *              description: Erro inesperado 
 */
app.post("/produtos/adicionar", produtos.criaNovoProduto);

/**
 * @swagger
 * /produto/{id}:
 *  get:
 *      summary: Retorna um produto passando como parâmetro o seu id.
 *      parameters:
 *        - name: id
 *          in: path
 *          type: integer
 *          required: true
 *          description: ID do produto desejada.
 *      responses: 
 *          '200':
 *              description: Sucesso
 *          '400':
 *              description: Erro inesperado 
 */
app.get("/produto/:id", produtos.retornaProduto);

/**
 * @swagger
 * /produtos/alterar/{id}:
 *  post:
 *      summary: Altera o cadastro de um produto.
 *      parameters:
 *        - name: id
 *          in: path
 *          type: integer
 *          required: true
 *          description: ID do produto desejada.  
 *        - name: produto
 *          in: body
 *          required: true
 *          description: Conteúdo do produto a ser alterado.
 *          schema:
 *              type: object
 *              properties:
 *                  lojaId:
 *                      type: integer
 *                  codigo:
 *                      type: integer
 *                  nome:
 *                      type: string
 *                  classificacao:
 *                      type: string
 *                  quantidade:
 *                      type: integer
 *                  valor:
 *                      type: float
 *              required:
 *                - lojaId
 *                - codigo
 *                - nome
 *                - classificacao
 *                - quantidade
 *                - valor
 *              example:
 *                  lojaId: 1
 *                  codigo: 789
 *                  nome: Alpino 200g
 *                  classificacao: Doces
 *                  quantidade: 8
 *                  valor: 5.50
 *      responses: 
 *          '200':
 *              description: Sucesso
 *          '400':
 *              description: Erro inesperado 
 */
app.post("/produtos/alterar/:id", produtos.atualizaProduto);

/**
 * @swagger
 * /produtos/remover:
 *  post:
 *      summary: Remove um produto cadastrado.
 *      parameters:
 *        - name: loja
 *          in: body
 *          description: Id do produto a ser removido.
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
app.post("/produtos/remover", produtos.removeProduto);

module.exports = app;