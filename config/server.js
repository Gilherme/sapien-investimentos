const express = require('express');
const app = express();
// Para retornar no render(/) precisa ser arquivo ejs, e para achar ele esse código o referencia
app.set('view engine', 'ejs');
app.set('views', './app/views')

module.exports = app;
