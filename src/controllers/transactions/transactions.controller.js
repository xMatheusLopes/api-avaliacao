module.exports = function (app) {
  app.get("/transactions", (req, res) => {
    return res
      .status(200)
      .json(require("../../models/transactions.model.json"));
  });
};
