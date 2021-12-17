module.exports = function (app) {
  const fakeAuthorization =
    require("../../models/authorization.model.json").auth;

  app.get("/auth", (req, res) => {
    return res.status(200).json({ Authorization: fakeAuthorization });
  });
};
