const express = require('express')
var router = express.Router(); //interceptação das rotas
const userController = require('../controllers/user-controller')

//Post
router.post("/", userController.post);

//Get All
router.get("/", userController.getAll);

//FindById
router.get("/:userId", userController.getById);

//PUT
router.put("/:userId", userController.put);

//DELETE
router.delete("/:productId", userController.delete);

module.exports = router;