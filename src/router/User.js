const express = require("express")
const router = express .Router()

const UserController = require("../controller/UserController")

router.get("/", UserController.index)
router.get("/index", UserController.index)
router.post("/ShowUser", UserController.show)
router.post("/AddUser", UserController.store)
router.post("/UpdateUser", UserController.update)
router.post("/DeleteUser", UserController.destroy)

module.exports = router