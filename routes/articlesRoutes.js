const express = require('express')
const route = express.Router();
const articlesCoontroller = require('../controllers/articlesControllers')

route.get('/prueba',articlesCoontroller.prueba)
//blog
route.post('/crear',articlesCoontroller.createArticle)
route.get('/articulos', articlesCoontroller.getAllArticle)
route.get('/articulo/:id', articlesCoontroller.getOneArticle)
route.delete('/delete/articulo/:id', articlesCoontroller.deleteArticle)
route.put('/update/articulo/:id', articlesCoontroller.updateArticle)
module.exports=route