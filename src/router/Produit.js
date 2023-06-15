const express = require("express")
const router = express .Router()

const ProductController = require("../controller/ProduitController")

router.get("/", ProductController.index)
router.get("/index", ProductController.index)
router.post("/ShowProduct", ProductController.show)
router.post("/AddProduct", ProductController.store)
router.post("/UpdateProduct", ProductController.update)
router.post("/DeleteProduct", ProductController.destroy)

module.exports = router