const express = require('express')
const app = express()

// Referencia onde encontrar arquivos estaticos, como css e html
app.use(express.static('C:/Sapien'))

// Para retornar no render(/) precisa ser arquivo ejs, e para achar ele esse código o referencia
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render('index')
})

app.get("/acoes", (req, res) => {
  res.render('acoes')
} )

app.listen(9090, () => {
  console.log("Sapien tá ON!!")
})