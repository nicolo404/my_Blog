const express = require("express");
const route = express.Router();
const categoryController = require("../controllers/categoryController");

route.post("/crear/category", categoryController.createCategory);
route.get("/categories", categoryController.getCategory);
route.delete("/delete/category/:id", categoryController.deleteCategory);

module.exports = route;
