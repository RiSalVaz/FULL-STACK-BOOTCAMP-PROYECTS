const express = require("express");
const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");
const logoutController = require("../controllers/logoutController");
const profileController = require("../controllers/profileController");
const loggingMiddleware = require('../middlewares/loggingMiddleware');
const authorizationMiddleware = require("../middlewares/authorizationMiddleware");


const auth = express();

auth.use(express.json());

auth.use(loggingMiddleware);

auth.get("/me", authorizationMiddleware, profileController);

auth.post("/register", registerController);

auth.post("/login", loginController);

auth.get("/logout",authorizationMiddleware, logoutController);

module.exports=auth;
