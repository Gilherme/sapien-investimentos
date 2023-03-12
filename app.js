const mysql = require('mysql')

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true}))

// Referencia onde encontrar arquivos estaticos, como css e html
app.use(express.static('C:/Sapien'))

// Para retornar no render(/) precisa ser arquivo ejs, e para achar ele esse código o referencia
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render('index')
})
app.get("/acoes", (req, res) => {
  res.render('acoes')
})
app.get("/login", (req, res) => {
  res.render('login')
})
app.get('/cadastreSe', (req, res) => {
  res.render('cadastreSe')
})


// Rota que recebe os dados do formulário de login
app.post('/signup', (req, res) => {
  const {username, password, email} = req.body

  // Query para inserir os dados na tabela usuarios
  const query = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)'

  // Executa a query
  connection.query(query, [username, password, email], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados no banco de dados: ', err)
      res.status(500).send('Erro ao inserir dados no banco de dados.')
      return;
    }

    console.log('Dados inseridos com sucesso no banco de dados.')
    res.status(200).send( 'Usuario cadastrado com sucesso!')
  })
})

// conectando banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: 'Gui1324',
  database: 'db_sapien'
})
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err)
    return;
  }
  console.log('Conexão com o banco de dados estabelecida com sucesso!')
})


app.listen(9090, () => {
  console.log("Sapien tá ON!!")
})