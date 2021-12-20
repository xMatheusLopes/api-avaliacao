module.exports = function (app) {
  const port = 3000;

  var cors = require("cors");

  app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
  });

  app.use(cors());
};
