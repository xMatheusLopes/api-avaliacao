const express = require("express");
const app = express();

require("./server")(app);
require("./src/controllers/auth/auth.controller")(app);
require("./src/middlewares/auth/auth.middleware")(app);
require("./src/controllers/transactions/transactions.controller")(app);
