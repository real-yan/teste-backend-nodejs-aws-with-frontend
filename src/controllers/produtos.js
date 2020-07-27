const ProdutoService = require('../services/ProdutoService')
const ProdutoServiceInstance = new ProdutoService()

const listarProdutosDaLoja = (req, res) => {
    ProdutoServiceInstance.findAllByForeignId(req.params.lojaid).then((produtos) => {
        res.render("produtos/listagemProdutos", {produtos: JSON.parse(produtos), lojaid: req.params.lojaid});    
    }).catch((e) => {
        req.flash("error_msg", "Houve um erro ao listar os produtos.")
        res.redirect("/listarprodutos/"+ req.params.lojaid);
    });
}

const cadastrarProduto = (req, res) => {
    res.render("produtos/cadastroProduto", {lojaid: req.params.lojaid});
}

const salvarProdutoCadastrado = (req, res) => {
    var erros = validaCampos(req)

    if(erros.length > 0) {
        res.render("produtos/cadastroProduto", {erros: erros, lojaid: req.body.lojaid});
    } else {
        ProdutoServiceInstance.create({
            lojaId: req.body.lojaid,
            codigo: req.body.codigo,
            nome: req.body.nome,
            classificacao: req.body.classificacao,
            quantidade: req.body.quantidade,
            valor: req.body.valor
        }).then(() => {
            req.flash("success_msg", "Produto " + req.body.nome + " cadastrado com sucesso.");
            res.redirect("/listarprodutos/"+ req.body.lojaid);   
        }).catch((e) => {
            req.flash("error_msg", "Não foi possível cadastrar o produto " + req.body.nome + ".");
            res.redirect("/listarprodutos/"+ req.body.lojaid);
        });
    }
}

const alterarProduto = (req, res) => {
    ProdutoServiceInstance.findById(req.params.id).then((produto) => {
        res.render("produtos/alteracaoProduto", {produto: JSON.parse(produto), lojaid: req.params.lojaid});    
    }).catch((e) => {
        req.flash("error_msg", "Este produto não foi encontrado.");
        res.redirect("/listarprodutos/"+ req.params.lojaid);
    });
}

const salvarProdutoALterado = (req, res) => {
    var erros = validaCampos(req)
    
    if(erros.length > 0) {
        res.render("produto/alteracaoProduto", {erros: erros, lojaid: req.body.lojaid, produto: req.body});
    } else {
        ProdutoServiceInstance.update(req.params.id, {
            lojaId: req.body.lojaid,
            codigo: req.body.codigo,
            nome: req.body.nome,
            classificacao: req.body.classificacao,
            quantidade: req.body.quantidade,
            valor: req.body.valor
        }).then(() => {
            req.flash("success_msg", "Produto " + req.body.nome + " alterado com sucesso."); 
            res.redirect("/listarprodutos/"+ req.body.lojaid);  
        }).catch((e) => {
            req.flash("error_msg", "Não foi possível alterar o produto " + req.body.nome + ".");
            res.redirect("/listarprodutos/"+ req.body.lojaid);
        });
    }
}

const removerProduto = (req, res) => {
    console.log(req.body.id)
    ProdutoServiceInstance.delete(req.body.id).then(() => {
        req.flash("success_msg", "Produto removido com sucesso.");
        res.redirect("/listarprodutos/"+ req.params.lojaid);   
    }).catch((e) => {
        req.flash("error_msg", "Não foi possível remover o produto.");
        res.redirect("/listarprodutos/"+ req.params.lojaid);
    });
}

const validaCampos = (req) => {
    var erros = []

    if(!req.body.codigo
        || typeof req.body.codigo == undefined
        || req.body.codigo == null
        || isNaN(req.body.codigo)) {
        erros.push({texto: "Código inválido"})
    }

    if(!req.body.nome
        || typeof req.body.nome == undefined
        || req.body.nome == null) {
        erros.push({texto: "Nome inválido"})
    }

    if(!req.body.classificacao
        || typeof req.body.classificacao == undefined
        || req.body.classificacao == null) {
        erros.push({texto: "Classificação inválida"})
    }

    if(!req.body.quantidade
        || typeof req.body.quantidade == undefined
        || req.body.quantidade == null
        || isNaN(req.body.quantidade)) {
        erros.push({texto: "Quantidade inválido"})
    }

    if(!req.body.valor
        || typeof req.body.valor == undefined
        || req.body.valor == null
        || isNaN(req.body.quantidade)) {
        erros.push({texto: "Valor inválido"})
    }

    return erros
}

module.exports = {listarProdutosDaLoja, cadastrarProduto, salvarProdutoCadastrado, 
    alterarProduto, salvarProdutoALterado, removerProduto}