 // servidor.js
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes'); // importa as rotas corretamente

app.use(express.urlencoded({ extended: true }));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); // corrigido aqui também 

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(routes); // aqui é 'use', não 'user'

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Acesse: http://localhost:3000');
    console.log('Servidor rodando na porta 3000');
});
