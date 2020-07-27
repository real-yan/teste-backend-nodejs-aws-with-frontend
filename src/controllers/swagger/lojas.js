const LojaService = require('../../services/LojaService')
const LojaServiceInstance = new LojaService()

/**
 * @description Retorna todas as lojas
 * @param req {express.Request} Objeto de requisição
 * @param res {express.Response} Objeto de resposta
 */
const retornaTodasLojas = (req, res) => {
    LojaServiceInstance.findAll().then((result) => {
        res.status(200).json(JSON.parse(result))   
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar retornar as lojas do banco.")
    })
}

/**
 * @description Retorna uma loja
 * @param req {express.Request} Objeto de requisição
 * @param res {express.Response} Objeto de resposta
 */
const retornaLoja = (req, res) => {
    LojaServiceInstance.findById(req.params.id).then((result) => {
        if(!result) {
            res.status(404).send("Não foi encontrado nenhum resultado para o ID informado.")    
        }
        res.status(200).json(JSON.parse(result))
    }).catch((error) => {
        console.log(error) 
        res.status(400).send("Houve um erro ao tentar retornar a loja do banco.")  
    })
}

/**
 * @description Cria uma nova loja
 * @param req {express.Request} Objeto de requisição
 * @param res {express.Response} Objeto de resposta
 */
const criaNovaLoja = (req, res) => {
    LojaServiceInstance.create({
        nome: req.body.nome,
        cnpj: req.body.cnpj,
        rua: req.body.rua,
        numero: req.body.numero,
        bairro: req.body.bairro,
        complemento: req.body.complemento,
        cidade: req.body.cidade,
        uf: req.body.uf,
        telefone: req.body.telefone,
        email: req.body.email,
        responsavel: req.body.responsavel
    }).then((result) => {
        res.status(201).send("Loja salva com sucesso.")
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar salvar a loja no banco.")
    })
}

/**
 * @description Atualiza uma loja existente
 * @param req {express.Request} Objeto de requisição
 * @param res {express.Response} Objeto de resposta
 */
const atualizaLoja = (req, res) => {
    LojaServiceInstance.update(req.params.id, {
        nome: req.body.nome,
        cnpj: req.body.cnpj,
        rua: req.body.rua,
        numero: req.body.numero,
        bairro: req.body.bairro,
        complemento: req.body.complemento,
        cidade: req.body.cidade,
        uf: req.body.uf,
        telefone: req.body.telefone,
        email: req.body.email,
        responsavel: req.body.responsavel
    }).then((result) => {
        res.status(200).send("Loja alterada com sucesso com sucesso.")
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar alterar a loja no banco.")
    })
}

/**
 * @description Remove uma loja
 * @param req {express.Request} Objeto de requisição
 * @param res {express.Response} Objeto de resposta
 */
const removeLoja = (req, res) => {
    LojaServiceInstance.delete(req.body.id).then(() => {
        res.status(200).send("Loja removida com sucesso.")
    }).catch((error) => {
        console.log(error)
        res.status(400).send("Houve um erro ao tentar remover a loja do banco.")
    })
}

module.exports = {retornaTodasLojas, retornaLoja, criaNovaLoja, atualizaLoja, removeLoja}