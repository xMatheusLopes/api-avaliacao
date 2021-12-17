module.exports = function (app) {
  const fakeAuthorization =
    require("../../models/authorization.model.json").auth;

  app.use(function (req, res, next) {
    if (!req.headers.authorization) {
      return res
        .status(403)
        .json({ error: "Auhtorization header is missing!" });
    } else if (req.headers.authorization != fakeAuthorization) {
      return res.status(403).json({ error: "Invalid Authorization!" });
    }
    next();
  });
};
