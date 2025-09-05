const { Router } = require("express")
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const UsersController = require("../controllers/UsersControler")
const UserAvatarController = require("../controllers/UserAvatarController")
const ensureAuth = require("../middlewares/ensureAuth")

const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const usersController = new UsersController()
const userAvatarController = new UserAvatarController()

usersRoutes.post("/", usersController.create)
usersRoutes.put("/", ensureAuth,usersController.update)
usersRoutes.patch("/avatar", upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes