// IMPORTAÇÃO DOS MODULOS
let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');

// INICIANDO OBJETOS
let app = express();

// SETAR AS VARIAVEIS 'view engine' e 'views' PARA O EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');

// CONFIGURAR O MIDDLEWARE
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

// CONFIGURAR CONSIGN PARA EFETUAR O AUTO LOADING
consign()
  .include('app/routes')
  .then('app/models')
  .then('app/controllers')
  .into(app);

// EXPORTAÇÃO DA VARIAVEL APP
module.exports = app;
