module.exports = function(app){
  app.get('/cadastreSe', (req, res) => {
    res.render('users/cadastreSe');
  });  
};