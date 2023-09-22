const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const dotenv = require("dotenv");
dotenv.config();

conexion = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("conectado correctamente a la base de datos de mongo atlas");
  } catch (error) {
    console.log(error);
    throw new Error("no se ha podido conectar a la base de datos😢");
  }
};
module.exports = {
  conexion,
};
