const validator = require('validator')
const Articulo = require('../models/Articles')
const prueba = (req,res)=>{
    return res.status(200).send({
        mensaje:"Soy una accion de prueba en mi controlador de articulos"
    })
}
const crear = (req, res)=>{
    // Recoger los parametros por post a guardar
    let parametros = req.body
    console.log(parametros)
    // validar los datos
    try {
        let validar_titulo = !validator.isEmpty(parametros.titulo)
        let validar_contenido = !validator.isEmpty(parametros.contenido);    
        if(!validar_titulo || !validar_contenido){
            throw new Error("No se ha validado la informacion")            
        }
    } catch (error) {
        return res.status(400).json({
            mensaje:"Faltan datos por enviar",
            parametros
        })
    }
    // Crear un objeto a guardar
    const articulo = new Articulo(parametros)
    //asignar valores a objetos basados en el modelo(mnual o automatico)
    // guardar articulo (objeto) en la base de datos
    /*
    articulo.save((error, articuloGuardado)=>{
        if(error){
            return restart.status(400).json({
                status:"error",
                mensaje:"no se ha guardado el articulo"
            });
        }
        return res.status(200).json({
            mensaje:"Success",
            articulo:articuloGuardado,
            mensaje: "articulo guardado con exito"
        })
    });
    */
    articulo.save()
    .then(function(savedArticle){
      console.log(savedArticle);
      return res.status(200).json({
        mensaje:"Success",
        articulo:savedArticle,
        mensaje: "articulo guardado con exito"
    })
      
    })
    .catch(function(err){
        return res.status(400).json({
            mensaje:err,
            mensaje: "no se guardo el articulo"
        })
    });
}

const Listar = (req,res)=>{
    
    
    Articulo.find({}).then((articulos)=>{
        if(!articulos){
            return res.status(404).json({
                status:"error",
                mensaje:"No se han encontrado Articulos"
            });
        }
        return res.status(200).send({
            status:"success",
            articulos
        })
    }).catch((error)=>{
        return res.status(500).json({
            status:"error",
            mensaje:"Ha ocurrido un error al listar los articulos",
            error: error.menssage
        })
    })  
    
   
}

const uno = (req,res)=>{
    //recoger id por la url
    const {id} = req.params;
    console.log(id)
    //buscar articulo
    Articulo.findById(id,(error,articulo)=>{
        //si no existe devolver el error
        if(error){
            return res.status(401).send({message:"Error al buscar el articulo"})
        }
        if(!articulo){
            return res.status(404).send({message:"No existe el articulo"})
        }
        
        //si existe devolver articulo
        return res.status(200).json({
            status:"success",
            articulo
        })
    })  
}

const borrar = (req,res)=>{
    //recoger el id
    const {id}=req.params
    // buscar el id y eliminar
    Articulo.findByIdAndDelete(id,(error,articulo)=>{
        if(error){
            return res.status(200).json({
                status:"400",
                mensaje:"Error al eliminar articulo"
            })
        }
        if(!articulo){
            return res.status(404).json({
                status:"404",
                mensaje:"No existe el articulo"
            })
        }
        return res.status(200).json({
            status:"200",
            mensaje:"Articulo eliminado"
        })
    })
}

module.exports = {
    prueba,
    crear,
    Listar,
    uno,
    borrar
}