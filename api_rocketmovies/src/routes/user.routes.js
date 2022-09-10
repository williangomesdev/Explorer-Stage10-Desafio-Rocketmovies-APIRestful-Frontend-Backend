const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");
const UsersController = require("../controllers/UsersController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();

usersRoutes.post("/", usersController.createUser);
usersRoutes.put("/", ensureAuthenticated, usersController.updateUser);
usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  (req, res) => {
    console.log(req.file.filename);
    res.json();
  }
);

module.exports = usersRoutes;
