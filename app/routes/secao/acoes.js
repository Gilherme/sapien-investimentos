module.exports = function(app){
  app.get("/acoes", (req, res) => {
    res.render('secao/acoes');
  });
};