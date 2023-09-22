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

module.exports = {
  createCategory,
};
