# Aplicação Nodejs com o objetivo de renderizar uma interface web para consumir uma API REST Serverless hospedada no AWS
O intuito desta aplicação é elaborar uma interface para consumir, de forma prática, uma API Serverless hospedada no AWS através dos serviços API Gateway, AWS Lambda Functions e Amazon RDS. Para desenvolver a aplicação foi utilizado o framework Express em conjunto com o Handlebars, para facilitar a elaboração da interface visual, o Swagger, para elaborar a documentação da API, e o Request, para consumir a API em questão.

O projeto em si constitui-se por uma aplicação web para o cadastro, alteração e remoção de lojas e produtos de uma determinada empresa.

## Instalação
Para instalar esta aplicação, é necessário primeiramente ter o [NodeJS](https://nodejs.org/en/) instalado na máquina. Feito isso, basta clonar o repositório em um diretório local e instalar as dependências referenciadas no ```package.json``` via ```npm```. 

```bash
npm install
```

## Execução
Para executar a aplicação, basta utilizar o Node para rodar o arquivo ```app.js``` encontrado na pasta ```src/```.

```bash
node app.js
```

Por padrão, a execução é realizada na porta ```3000```, mas essa informação pode ser configurada no arquivo ```settings.js```.

## Detalhes
Ao acessar o endpoint em que a aplicação está rodando, será aberta uma interface de apresentação do projeto. Nessa interface é possível acessar este repositório, ao clicar no botão 'Learn more', ir ao cadastro de lojas e acessar a documentação Swagger da API.

Os principais endpoints da aplicação são:

Endpoint para a documentação do Swagger
```
GET /api-doc
```

Endpoint para a interface de listagem de lojas.
```
GET /listarlojas
```

Endpoint para a interface de cadastro de loja.
```
GET /cadastrarloja
```

Endpoint para envio do formulário de cadastro da nova loja.
```
POST /cadastrarloja/salvar
Body: {
  "nome": String (Obrigatório),
  "cnpj": String (Obrigatório),
  "rua": String (Obrigatório),
  "numero": Integer (Obrigatório),
  "bairro": String (Obrigatório),
  "complemento": String,
  "cidade": String (Obrigatório),
  "uf": String (Obrigatório),
  "telefone": String,
  "email": String,
  "responsavel": String
}
```

Endpoint para a interface de alteração da loja cadastrada.
```
GET /alterarloja/{id}
```

Endpoint para envio do formulário de alteração do cadastro da loja.
```
POST /alterarloja/salvar/{id}
Body: {
  "nome": String (Obrigatório),
  "cnpj": String (Obrigatório),
  "rua": String (Obrigatório),
  "numero": Integer (Obrigatório),
  "bairro": String (Obrigatório),
  "complemento": String,
  "cidade": String (Obrigatório),
  "uf": String (Obrigatório),
  "telefone": String,
  "email": String,
  "responsavel": String
}
```

Endpoint para remover o cadastro de uma loja.
```
POST /removerloja
Body: {
  "id": Integer (Obrigatótio)
}
```

Endpoint para a interface de listagem de produtos de uma loja.
```
GET /listarprodutos/{lojaid}
```

Endpoint para a interface de cadastro do produto de uma loja.
```
GET /cadastrarproduto/{lojaid}
```

Endpoint para envio do formulário de cadastro do novo produto.
```
POST /cadastrarproduto/salvar
Body: {
  "lojaId": Integer (Obrigatótio),
  "codigo": Integer (Obrigatótio),
  "nome": String (Obrigatório),
  "classificacao": String (Obrigatório),
  "quantidade": Integer (Obrigatótio),
  "valor": Number (Obrigatório)
}
```

Endpoint para a interface de alteração de um produto cadastrado.
```
GET /alterarproduto/{lojaid}/{id}
```

Endpoint para envio do formulário de alteração do cadastro do produto.
```
POST /alterarproduto/salvar/{id}
Body: {
  "nome": String (Obrigatório),
  "cnpj": String (Obrigatório),
  "rua": String (Obrigatório),
  "numero": Integer (Obrigatório),
  "bairro": String (Obrigatório),
  "complemento": String,
  "cidade": String (Obrigatório),
  "uf": String (Obrigatório),
  "telefone": String,
  "email": String,
  "responsavel": String
}
```

Endpoint para remover o cadastro de um produto de uma loja.
```
POST /removerproduto/{lojaid}
Body: {
  "id": Integer (Obrigatótio)
}
```
