const express = require('express');

const cors = require('cors');

const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/**
 * Rota - Recurso
 * 
 * Métodos http:
 * 
 * GET : buscar uma informação do backend
 * POST : criar uma informação no backend
 * PUT : alterar uma informação no backend
 * DELETE : deletar uma infomação no backend
 * 
 * Tipos de Parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params : ''   utilizados para identificar recursos
 * Request Body : Corpo da requisição , utilizado para criar ou alterar recursos
 * 
 * Banco de Dados
 * 
 * SQL : MySQL , SQlite , PostgreSQL , Oracle , Microsoft SQL Server
 * NoSQL : MongoDB , CouchDB, etc
 * 
 * Driver: SELECT * FROM users
 * 
 * Query Builder: table("users"), select("*"), where()
 * 
 * 
 * 	
 */




