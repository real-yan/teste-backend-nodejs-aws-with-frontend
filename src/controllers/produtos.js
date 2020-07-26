const ProdutoService = require('../services/ProdutoService')
const ProdutoServiceInstance = new ProdutoService()

/**
 * @description Retorna todos os produtos de uma loja
 * @param req {express.Request} Objeto de requisição
 * @param res {express.Response} Objeto de resposta
 */
const retornaTodosProdutosDaLoja = (req, res) => {
    ProdutoServiceInstance.findAllByCondition({
        lojaId: req.params.lojaid
    }).then((result) => {
        res.status(200).json(result)    
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar retornar os produtos do banco.")
    })
}

/**
 * @description Retorna um produto
 * @param req {express.Request} Objeto de requisição
 * @param res {express.Response} Objeto de resposta
 */
const retornaProduto = (req, res) => {
    ProdutoServiceInstance.findById(req.params.id).then((result) => {
        res.status(200).json(result)
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar retornar o produto do banco.")   
    })
}

/**
 * @description Cria um novo produto
 * @param req {express.Request} Objeto de requisição
 * @param res {express.Response} Objeto de resposta
 */
const criaNovoProduto = (req, res) => {
    ProdutoServiceInstance.create({
        lojaId: req.body.lojaId,
        codigo: req.body.codigo,
        nome: req.body.nome,
        classificacao: req.body.classificacao,
        quantidade: req.body.quantidade,
        fabricacao: req.body.fabricacao,
        validade: req.body.validade,
        valor: req.body.valor,
        obs: req.body.obs
    }).then((result) => {
        res.status(201).send("Produto salvo com sucesso.")
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar salvar o produto no banco.")
    })
}

/**
 * @description Atualiza um produto existente
 * @param req {express.Request} Objeto de requisição
 * @param res {express.Response} Objeto de resposta
 */
const atualizaProduto = (req, res) => {
    ProdutoServiceInstance.update(req.body.id, {
        lojaId: req.body.lojaId,
        codigo: req.body.codigo,
        nome: req.body.nome,
        classificacao: req.body.classificacao,
        quantidade: req.body.quantidade,
        fabricacao: req.body.fabricacao,
        validade: req.body.validade,
        valor: req.body.valor,
        obs: req.body.obs
    }).then((result) => {
        res.status(200).send("Produto alterado com sucesso com sucesso.")
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar alterar o produto no banco.")
    })
}

/**
 * @description Remove um produto
 * @param req {express.Request} Objeto de requisição
 * @param res {express.Response} Objeto de resposta
 */
const removeProduto = (req, res) => {
    ProdutoServiceInstance.delete(req.body.id).then(() => {
        res.status(200).send("Produto removido com sucesso.")
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar remover o produto do banco.")
    })
}

module.exports = {retornaTodosProdutosDaLoja, retornaProduto, criaNovoProduto, atualizaProduto, removeProduto}