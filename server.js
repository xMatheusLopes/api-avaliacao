module.exports = function (app) {
  const port = 3000;

  app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
  });
};
