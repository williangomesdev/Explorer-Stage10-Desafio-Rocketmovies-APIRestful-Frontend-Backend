const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post("/", usersController.createUser);
usersRoutes.put("/", ensureAuthenticated, usersController.updateUser);

module.exports = usersRoutes;
