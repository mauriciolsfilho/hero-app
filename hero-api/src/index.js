const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
/*
 *  Utilizando o modulo de rotas
 */
 app.use(routes);

app.listen(3333);
