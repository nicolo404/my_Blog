const express = require('express')
const route = express.Router();
const articlesCoontroller = require('../controllers/articlesControllers')

route.get('/prueba',articlesCoontroller.prueba)
//blog
route.post('/crear',articlesCoontroller.crear)
route.get('/articulos', articlesCoontroller.Listar)
route.get('/articulo/:id', articlesCoontroller.uno)
route.delete('/articulo/:id', articlesCoontroller.borrar)
module.exports=route