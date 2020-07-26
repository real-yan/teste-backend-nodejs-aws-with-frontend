const app = require("express").Router();
const request = require('request-promise');
const lojas = require("./lojas");
const produtos = require("./produtos");

/**
 * Rota para a página principal
 */
app.get("/", (req, res) => {
    res.render("home/index");
});

app.get("/listarlojas", (req, res) => {
    request({
            url: 'https://xzf0kxerf9.execute-api.us-east-1.amazonaws.com/dev/lojas',
            method: 'GET'
        }, (err, response, body) => {
            return body
    }).then((lojas) => {
        res.render("lojas/listagemLojas", {lojas: JSON.parse(lojas)});    
    }).catch((e) => {
        //req.flash("error_msg", "Houve um erro ao listar os gastos mensais.")
        res.redirect("/listarlojas");
    });
});

app.get("/cadastrarloja", (req, res) => {
    res.render("lojas/cadastroLoja");
});

app.post("/cadastrarloja/salvar", (req, res) => {

    var erros = validaCampos(req)

    if(erros.length > 0) {
        res.render("lojas/cadastroLoja", {erros: erros});
    } else {
        request({
            uri: 'https://xzf0kxerf9.execute-api.us-east-1.amazonaws.com/dev/lojas/adicionar',
            body: req.body,
            json: true,
            method: 'POST'
        }, (err, response, body) => {
            
        }).then((lojas) => {
            res.redirect("/listarlojas");   
        }).catch((e) => {
            //req.flash("error_msg", "Houve um erro ao listar os gastos mensais.")
            res.redirect("/listarlojas");
        });
    }
});

app.get("/alterarloja/:id", (req, res) => {
    request({
        url: 'https://xzf0kxerf9.execute-api.us-east-1.amazonaws.com/dev/loja/'+ req.params.id,
        method: 'GET'
    }, (err, response, body) => {
        return body
    }).then((loja) => {
        res.render("lojas/alteracaoLoja", {loja: JSON.parse(loja)});    
    }).catch((e) => {
        //req.flash("error_msg", "Houve um erro ao listar os gastos mensais.")
        res.redirect("/listarlojas");
    });
});

app.post("/alterarloja/salvar/:id", (req, res) => {

    var erros = validaCampos(req)

    if(erros.length > 0) {
        res.render("lojas/alteracaoLoja", {erros: erros});
    } else {
        request({
            uri: 'https://xzf0kxerf9.execute-api.us-east-1.amazonaws.com/dev/lojas/alterar/'+ req.params.id,
            body: req.body,
            json: true,
            method: 'POST'
        }, (err, response, body) => {
            
        }).then((lojas) => {
            res.redirect("/listarlojas");   
        }).catch((e) => {
            //req.flash("error_msg", "Houve um erro ao listar os gastos mensais.")
            res.redirect("/listarlojas");
        });
    }
});

app.post("/removerLoja", (req, res) => {
    request({
        uri: 'https://xzf0kxerf9.execute-api.us-east-1.amazonaws.com/dev/lojas/remover/',
        body: {id: req.body.id},
        json: true,
        method: 'POST'
    }, (err, response, body) => {
        
    }).then((lojas) => {
        res.redirect("/listarlojas");   
    }).catch((e) => {
        //req.flash("error_msg", "Houve um erro ao listar os gastos mensais.")
        res.redirect("/listarlojas");
    });
});

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

validarCNPJ = (cnpj) => {
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

app.use(lojas);
app.use(produtos);

module.exports = app;
