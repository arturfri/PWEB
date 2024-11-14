const express = require("express");
const consign = require('consign')

var app = express(); // executando o express

app.set('view engine', 'ejs'); 
app.set('views', './app/views');

consign({cwd: 'app'})
.include('routes')
.then('config/dbConnection.js')
.into(app); 

module.exports = app;