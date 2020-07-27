const LojaService = require('../services/LojaService')
const LojaServiceInstance = new LojaService()

/**
 * @description Redireciona para a interface de listagem de todas as lojas
 * @param req {express.Request} Objeto de requisição
 * @param res {express.Response} Objeto de resposta
 */
const listarTodasLojas = (req, res) => {
    LojaServiceInstance.findAll().then((lojas) => {
        res.render("lojas/listagemLojas", {lojas: JSON.parse(lojas)});    
    }).catch((e) => {
        req.flash("error_msg", "Houve um erro ao listar as lojas.")
        res.redirect("/listarlojas");
    });
}

/**
 * @description Redireciona para a interface de cadastro de uma nova loja
 * @param req {express.Request} Objeto de requisição
 * @param res {express.Response} Objeto de resposta
 */
const cadastrarNovaLoja = (req, res) => {
    res.render("lojas/cadastroLoja");
}

/**
 * @description Persiste a nova loja no banco
 * @param req {express.Request} Objeto de requisição
 * @param res {express.Response} Objeto de resposta
 */
const salvarLojaCadastrada = (req, res) => {
    var erros = validaCampos(req)

    if(erros.length > 0) {
        res.render("lojas/cadastroLoja", {erros: erros});
    } else {
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
        }).then(() => {
            req.flash("success_msg", req.body.nome + " cadastrado com sucesso.");
            res.redirect("/listarlojas");   
        }).catch((e) => {
            req.flash("error_msg", "Não foi possível cadastrar " + req.body.nome + ".");
            res.redirect("/listarlojas");
        });
    }
}

/**
 * @description Redireciona para a interface de alteração do cadastro de uma loja
 * @param req {express.Request} Objeto de requisição
 * @param res {express.Response} Objeto de resposta
 */
const alterarLojaCadastrada = (req, res) => {
    LojaServiceInstance.findById(req.params.id).then((loja) => {
        res.render("lojas/alteracaoLoja", {loja: JSON.parse(loja)});    
    }).catch((e) => {
        req.flash("error_msg", "Esta loja não foi encontrada.");
        res.redirect("/listarlojas");
    });
}

/**
 * @description Persiste a loja alterada ao banco de dados
 * @param req {express.Request} Objeto de requisição
 * @param res {express.Response} Objeto de resposta
 */
const salvarLojaAlterada = (req, res) => {
    var erros = validaCampos(req)

    if(erros.length > 0) {
        res.render("lojas/alteracaoLoja", {erros: erros, loja: req.body});
    } else {
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
        }).then(() => {
            req.flash("success_msg", req.body.nome +" alterado com sucesso."); 
            res.redirect("/listarlojas");  
        }).catch((e) => {
            req.flash("error_msg", "Não foi possível alterar " + req.body.nome + ".");
            res.redirect("/listarlojas");
        });
    }
}

/**
 * @description Remove o cadastro de uma loja
 * @param req {express.Request} Objeto de requisição
 * @param res {express.Response} Objeto de resposta
 */
const removerLojaCadastrada = (req, res) => {
    LojaServiceInstance.delete(req.body.id).then(() => {
        res.status(200).send()
    }).then(() => {
        req.flash("success_msg", "Loja removida com sucesso.");
        res.redirect("/listarlojas");   
    }).catch((e) => {
        req.flash("error_msg", "Não foi possível remover a loja.");
        res.redirect("/listarlojas");
    });
}

/**
 * @description Valida o preenchimento dos campos obrigatórios do cadastro
 * @param req {express.Request} Objeto de requisição
 */
const validaCampos = (req) => {
    var erros = []

    if(!req.body.nome
        || typeof req.body.nome == undefined
        || req.body.nome == null) {
        erros.push({texto: "Nome inválido"})
    }

    if(!req.body.cnpj
        || typeof req.body.cnpj == undefined
        || req.body.cnpj == null
        || !validarCNPJ(req.body.cnpj)) {
        erros.push({texto: "CNPJ inválido"})
    }

    if(!req.body.rua
        || typeof req.body.rua == undefined
        || req.body.rua == null) {
        erros.push({texto: "Rua inválida"})
    }

    if(!req.body.numero
        || typeof req.body.numero == undefined
        || req.body.numero == null
        || isNaN(req.body.numero)) {
        erros.push({texto: "Número inválido"})
    }

    if(!req.body.bairro
        || typeof req.body.bairro == undefined
        || req.body.bairro == null) {
        erros.push({texto: "Bairro inválido"})
    }

    if(!req.body.cidade
        || typeof req.body.cidade == undefined
        || req.body.cidade == null) {
        erros.push({texto: "Cidade inválida"})
    }

    if(!req.body.uf
        || typeof req.body.uf == undefined
        || req.body.uf == null) {
        erros.push({texto: "UF inválida"})
    }

    return erros
}

/**
 * @description Valida se o preenchimento do CNPJ da loja está correto
 * @param cnpj {string} CNPJ da loja
 */
const validarCNPJ = (cnpj) => {
    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == '') return false;
     
    if (cnpj.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true; 
}

module.exports = {listarTodasLojas, cadastrarNovaLoja, salvarLojaCadastrada, 
    alterarLojaCadastrada, salvarLojaAlterada, removerLojaCadastrada}