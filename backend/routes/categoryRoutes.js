const express = require("express");
const route = express.Router();
const categoryController = require("../controllers/categoryController");

route.post("/crear/category", categoryController.createCategory);

module.exports = route;
