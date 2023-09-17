const {conexion} = require('./database/db')
const express = require('express')
const cors = require('cors')
const routesArticle = require('./routes/articlesRoutes')

// app de node inicializada
console.log('App de node arrancada')
//conexion a la base de datos
conexion()
// crear servidor de nodejs con express
const app = express()
const puerto = 3001;
//configurar el cors
// middleware del corse (se ejecuta antes de una ruta)
//app.use() sirve para ejecutar midlewares o crear rutas
app.use(cors());
// middleware convertir body a json
app.use(express.json())
app.options('*',cors())
app.use(express.urlencoded({extended:true})) // form-urlencoded
//ruta con controlladores
app.use('/api',routesArticle)
// crear servidor y escuchar peticiones http
app.listen(puerto, ()=>{
    console.log("Servidor corriendo en el puerto "+puerto);
})