const Category = require("../models/Category");
const validator = require("validator");

const createCategory = (req, res) => {
  // Recoger los parametros por post a guardar
  let parametros = req.body;
  console.log(parametros.name);
  // validar los datos
  try {
    let validar_name = !validator.isEmpty(parametros.name);
    if (!validar_name) {
      throw new Error("No se ha validado la informacion");
    }
  } catch (error) {
    return res.status(400).json({
      mensaje: "Faltan datos por enviar",
      parametros,
    });
  }
  // Crear un objeto a guardar
  const category = new Category(parametros);
  category
    .save()
    .then(function (savedCategory) {
      console.log(savedCategory);
      return res.status(200).json({
        mensaje: "Success",
        articulo: savedCategory,
        mensaje: "categoria guardado con exito",
      });
    })
    .catch(function (err) {
      return res.status(400).json({
        mensaje: err,
        mensaje: "no se guardo la categoria",
      });
    });
};

const getCategory = (req, res) => {
  Category.find({})
    .then((category) => {
      if (!category) {
        return res.status(404).json({
          status: "error",
          mensaje: "No se han encontrado categorias",
        });
      }
      return res.status(200).send({
        status: "success",
        category,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({
        status: "error",
        mensaje: "Ha ocurrido un error al listar los articulos",
        error: error,
      });
    });
};

const deleteCategory = (req, res) => {
  //recoger el id
  const id = req.params;
  // buscar el id y eliminar
  Category.findByIdAndDelete(id, (error, category) => {
    if (error) {
      return res.status(200).json({
        status: "400",
        mensaje: "Error al eliminar la categoria",
      });
    }
    if (!category) {
      return res.status(404).json({
        status: "404",
        mensaje: "No existe la categoria",
      });
    }
    return res.status(200).json({
      status: "200",
      mensaje: "Categoria eliminada",
    });
  });
};

module.exports = {
  createCategory,
  getCategory,
  deleteCategory,
};
