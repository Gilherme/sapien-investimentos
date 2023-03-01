const express = require('express')
const app = express()

// Nescessário para fazer os arvos js e css funcionarem, referencia onde encontrar arquivos estaticos
app.use(express.static('C:/Sapien'))

// Para retornar no render(/) precisa ser arquivo ejs, e para achar ele esse código o referencia
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render('index')
})

app.listen(9090, () => {
  console.log("Sapien tá ON!!")
})